const getBaseUrl = () => {
  // If VERCEL_URL is set, use that.
  // Otherwise use environemnt variable for other use cases (local development, test environemtn)
  // https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
  return process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL;
};

export default getBaseUrl;
