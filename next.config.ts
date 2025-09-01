import type { NextConfig } from 'next';
import setupSentry from './sentry.next.config';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,
  // Hides source maps from generated client bundles
  hideSourceMaps: false,
  images: {
    qualities: [5],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

console.log(nextConfig);

const setupConfig = () => {
  // https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
  // Initialize sentry when deployed to vercel only
  // if (!!process.env.VERCEL_ENV) {
  return setupSentry(nextConfig);
  // }

  return nextConfig;
};

export default setupConfig();
