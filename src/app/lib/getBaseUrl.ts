interface GetBaseUrlOptions {
  vercelTargetEnv?: string;
  vercelProjectProductionUrl?: string;
  vercelBranchUrl?: string;
  vercelUrl?: string;
  nextPublicSiteUrl?: string;
}

const getBaseUrl: (options?: GetBaseUrlOptions) => string = (
  options = {}
): string => {
  const {
    vercelTargetEnv = process.env.VERCEL_TARGET_ENV,
    vercelProjectProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL,
    vercelBranchUrl = process.env.VERCEL_BRANCH_URL,
    vercelUrl = process.env.VERCEL_URL,
    nextPublicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL,
  } = options;

  // Prefer Vercel system env vars when deployed.
  // - VERCEL_PROJECT_PRODUCTION_URL: stable canonical prod URL
  // - VERCEL_URL: per-deployment URL (preview/prod)
  // Fallback to NEXT_PUBLIC_SITE_URL for non-Vercel hosting or overrides.
  if (process.env.VERCEL) {
    // Logging for deployment verification. Remove after confirming values.
    console.info("getBaseUrl env", {
      VERCEL_TARGET_ENV: vercelTargetEnv,
      VERCEL_PROJECT_PRODUCTION_URL: vercelProjectProductionUrl,
      VERCEL_BRANCH_URL: vercelBranchUrl,
      VERCEL_URL: vercelUrl,
      NEXT_PUBLIC_SITE_URL: nextPublicSiteUrl,
    });
  }

  const rawBaseUrl =
    (vercelTargetEnv === "production" && vercelProjectProductionUrl) ||
    (vercelTargetEnv === "preview" && vercelUrl) ||
    nextPublicSiteUrl ||
    "http://localhost:3000";

  if (!/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(rawBaseUrl)) {
    return `https://${rawBaseUrl}`;
  }

  return rawBaseUrl;
};

export default getBaseUrl;
