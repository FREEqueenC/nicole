import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "https://dd2c45219fb5a7f951caca9235d09778@o4511232426573824.ingest.us.sentry.io/4511309047857152",

  sendDefaultPii: true,

  // 100% in dev, 10% in production
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,

  // Session Replay: 10% of all sessions, 100% of sessions with errors
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  enableLogs: true,

  integrations: [
    Sentry.replayIntegration(),
  ],

  beforeSend(event) {
    // Ignore errors originating from browser extension scripts (e.g. MetaMask inpage.js).
    // These are third-party extension failures outside the application's control.
    const frames = event.exception?.values?.flatMap(
      (v) => v.stacktrace?.frames ?? []
    ) ?? [];
    const fromExtension = frames.some((f) =>
      f.filename?.startsWith("chrome-extension://") ||
      f.filename?.startsWith("moz-extension://")
    );
    if (fromExtension) return null;

    // Also drop known MetaMask session-restore errors by message.
    const messages = event.exception?.values?.map((v) => v.value ?? "") ?? [];
    const isMetaMaskError = messages.some(
      (m) =>
        m.includes("MetaMask extension not found") ||
        m.includes("Failed to connect to MetaMask")
    );
    if (isMetaMaskError) return null;

    return event;
  },
});

// Hook into App Router navigation transitions
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
