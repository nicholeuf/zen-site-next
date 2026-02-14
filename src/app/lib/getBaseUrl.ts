const getBaseUrl = (): string => {
  // Prefer Vercel system env vars when deployed.
  // - VERCEL_PROJECT_PRODUCTION_URL: stable canonical prod URL
  // - VERCEL_URL: per-deployment URL (preview/prod)
  // Fallback to NEXT_PUBLIC_SITE_URL for non-Vercel hosting or overrides.
  if (process.env.VERCEL) {
    // Logging for deployment verification. Remove after confirming values.
    console.info("getBaseUrl env", {
      VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    });
  }

  return (
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
  );
};

export default getBaseUrl;
