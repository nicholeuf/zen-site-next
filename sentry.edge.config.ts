// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";

// This file left `sendDefaultPii` unset in v10 (restrictive). Set that baseline
// explicitly because v11 collects everything when `dataCollection` is omitted.
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
  dsn: process.env.SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: isProduction ? 0.5 : 1,

  dataCollection: v10RestrictiveDataCollection,

  integrations: [
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["warn", "error"] }),
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
