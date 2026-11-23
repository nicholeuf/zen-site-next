/* v8 ignore file -- @preserve */

// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";

// v10 `sendDefaultPii: false` baseline. v11 collects everything unless this is set.
const v10RestrictiveDataCollection = {
  userInfo: false,
  cookies: false,
  httpHeaders: {
    request: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
    response: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
  },
  httpBodies: [],
  urlQueryParams: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
  genAI: { inputs: false, outputs: false },
  databaseQueryData: false,
  graphQL: { document: false, variables: false },
};

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: isProduction ? 0.5 : 1,

  // Production previously set `sendDefaultPii: false`. Development used `true`,
  // which matches the v11 default, so `dataCollection` is omitted there.
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#dataCollection
  ...(isProduction ? { dataCollection: v10RestrictiveDataCollection } : {}),

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["warn", "error"] }),
  ],

  // Define how likely Replay events are sampled.
  // Disabled in development to avoid exceeding quota
  replaysSessionSampleRate: isProduction ? 0.1 : 0,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: isProduction ? 1.0 : 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
