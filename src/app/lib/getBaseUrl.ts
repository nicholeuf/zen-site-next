interface GetBaseUrlOptions {
  vercelTargetEnv?: string;
  vercelProjectProductionUrl?: string;
  vercelBranchUrl?: string;
  vercelUrl?: string;
  fallbackUrl?: string;
}

const DEFAULT_URL = "http://localhost:3000";

const getBaseUrl: (options?: GetBaseUrlOptions) => string = (
  options = {}
): string => {
  const {
    // VERCEL_TARGET_ENV: "production" | "preview" | "development"
    vercelTargetEnv = process.env.VERCEL_TARGET_ENV,
    // VERCEL_PROJECT_PRODUCTION_URL: stable canonical prod URL
    vercelProjectProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL,
    // VERCEL_BRANCH_URL: per-deployment URL (preview/prod)
    vercelBranchUrl = process.env.VERCEL_BRANCH_URL,
    // Fallback to NEXT_PUBLIC_SITE_URL for non-Vercel hosting or overrides.
    fallbackUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL,
  } = options;

  const rawBaseUrl =
    (vercelTargetEnv === "production" && vercelProjectProductionUrl) ||
    (vercelTargetEnv === "preview" && vercelBranchUrl) ||
    fallbackUrl;

  if (!/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(rawBaseUrl)) {
    return `https://${rawBaseUrl}`;
  }

  return rawBaseUrl;
};

export default getBaseUrl;
