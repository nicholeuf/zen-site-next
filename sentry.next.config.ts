import { withSentryConfig, SentryBuildOptions } from '@sentry/nextjs';
import { NextConfig } from 'next';

const buildOptions: SentryBuildOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'nicholeuf',
  project: 'javascript-nextjs',

  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
};

const setupSentry = (nextConfig: NextConfig) => {
  return withSentryConfig(nextConfig, buildOptions);
};

export default setupSentry;
