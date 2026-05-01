import { NextResponse } from "next/server";

// This is a temporary in-memory store. 
// For production persistence, we recommend Vercel KV or a Postgres node.
let vaultIntelligence = {
  timestamp: new Date().toISOString(),
  satellites: [
    { name: "CTC-0", latitude: "0.0000°", longitude: "0.0000°", altitude: "550 km", status: "Searching..." }
  ],
  economics: { base_apr: "10%", bonus_tiers: [], requirements: "Pending..." },
  market: { price_usd: "0.00", change_24h: "0%", liquidity: "0" },
  status: "INITIALIZING"
};

export async function GET() {
  return NextResponse.json(vaultIntelligence);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simple validation
    if (!body.satellites || !body.economics) {
      return NextResponse.json({ error: "Invalid intelligence package structure" }, { status: 400 });
    }

    // Security: Check for a simple secret header to prevent unauthorized updates
    const authHeader = request.headers.get("x-vault-secret");
    if (authHeader !== process.env.VAULT_UPDATE_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    vaultIntelligence = {
      ...body,
      timestamp: new Date().toISOString(),
      status: "DECRYPTED_BY_NICOLE_VISION"
    };

    return NextResponse.json({ message: "Vault intelligence synchronized successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Synchronization failure" }, { status: 500 });
  }
}
