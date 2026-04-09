import logging
import os
from fastapi import FastAPI, HTTPException, Request, Depends
from fastapi.responses import JSONResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from google.cloud.sql.connector import Connector
import pg8000
import sqlalchemy
from pydantic import BaseModel
from typing import List
from pythonjsonlogger import jsonlogger

import firebase_admin
from firebase_admin import credentials, auth as firebase_auth

# Initialize Firebase Admin SDK (uses default GCP credentials in Cloud Run)
if not firebase_admin._apps:
    firebase_admin.initialize_app()

security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        logger.error(f"Token verification failed: {e}")
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter('%(asctime)s %(levelname)s %(name)s %(message)s')
logHandler.setFormatter(formatter)
logger.addHandler(logHandler)

app = FastAPI()

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.exception(f"Unhandled exception: {exc}", extra={"path": request.url.path})
    return JSONResponse(
        status_code=500,
        content={"message": "An unexpected error occurred. Please try again later."},
    )


def connect_with_connector() -> sqlalchemy.engine.base.Engine:
    """
    Initializes a connection pool for a Cloud SQL instance of Postgres.

    Uses the Cloud SQL Python Connector package.
    """
    # Note: Saving credentials in environment variables is convenient, but not
    # secure - consider a more secure solution such as
    # Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
    # keep secrets safe.

    instance_connection_name = os.environ[
        "CLOUD_SQL_POSTGRES_INSTANCE"
    ]  # e.g. 'project:region:instance'
    db_user = os.environ["CLOUD_SQL_POSTGRES_USER"]  # e.g. 'my-db-user'
    db_pass = os.environ["CLOUD_SQL_POSTGRES_PASSWORD"]  # e.g. 'my-db-password'
    db_name = os.environ["CLOUD_SQL_POSTGRES_DATABASE"]  # e.g. 'my-database'

    logger.info(f"Connecting to Cloud SQL instance {instance_connection_name} with user {db_user} to database {db_name}")

    # initialize Cloud SQL Python Connector object
    connector = Connector()

    def getconn() -> pg8000.dbapi.Connection:
        conn: pg8000.dbapi.Connection = connector.connect(
            instance_connection_name,
            "pg8000",
            user=db_user,
            password=db_pass,
            db=db_name,
        )
        return conn

    # The Cloud SQL Python Connector can be used with SQLAlchemy
    # using the 'creator' argument to 'create_engine'
    pool = sqlalchemy.create_engine(
        "postgresql+pg8000://",
        creator=getconn,
        pool_pre_ping=True,
    )
    return pool

engine = connect_with_connector()


class PollCreate(BaseModel):
    question: str
    options: List[str]

class VoteCreate(BaseModel):
    option: str

@app.get("/api/polls")
def get_polls():
    logger.info("Fetching polls from the database.")
    try:
        with engine.connect() as conn:
            logger.info("Successfully connected to the database.")
            result = conn.execute(text("""
                SELECT p.id, p.question_text, p.created_at, array_agg(po.option_text) as options
                FROM polls p
                JOIN poll_options po ON p.id = po.poll_id
                GROUP BY p.id
                ORDER BY p.created_at DESC
            """))
            polls = [dict(row._mapping) for row in result]
            logger.info(f"Successfully fetched {len(polls)} polls.")
            return polls
    except SQLAlchemyError as e:
        logger.error(f"Error fetching polls: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/polls")
def create_poll(poll: PollCreate, user=Depends(verify_token)):
    if not poll.question or not poll.options or len(poll.options) < 2:
        raise HTTPException(status_code=400, detail="Question and at least two options are required.")

    try:
        with engine.connect() as conn:
            with conn.begin():
                result = conn.execute(text("INSERT INTO polls (question_text) VALUES (:question) RETURNING id"), {"question": poll.question})
                poll_id = result.scalar()

                for option in poll.options:
                    conn.execute(text("INSERT INTO poll_options (poll_id, option_text) VALUES (:poll_id, :option)"), {"poll_id": poll_id, "option": option})
            return {"id": poll_id}
    except SQLAlchemyError as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/polls/{poll_id}/vote")
def vote_on_poll(poll_id: int, vote: VoteCreate):
    if not vote.option:
        raise HTTPException(status_code=400, detail="Option is required.")

    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT id FROM poll_options WHERE poll_id = :poll_id AND option_text = :option"), {"poll_id": poll_id, "option": vote.option})
            option_row = result.first()
            if not option_row:
                raise HTTPException(status_code=400, detail="Invalid option.")

            poll_option_id = option_row[0]
            conn.execute(text("INSERT INTO votes (poll_option_id) VALUES (:poll_option_id)"), {"poll_option_id": poll_option_id})
            conn.commit()
        return {"message": "Vote cast"}
    except SQLAlchemyError as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/polls/{poll_id}/results")
def get_poll_results(poll_id: int):
    try:
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT po.option_text, COUNT(v.id) as vote_count
                FROM poll_options po
                LEFT JOIN votes v ON po.id = v.poll_option_id
                WHERE po.poll_id = :poll_id
                GROUP BY po.option_text
            """), {"poll_id": poll_id})
            results = [dict(row._mapping) for row in result]
            return results
    except SQLAlchemyError as e:
        raise HTTPException(status_code=500, detail=str(e))