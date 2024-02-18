const getBaseUrl = () => {
  // TODO: Determine why VERCEL_URL is not working in vercel deployment
  // Simply return environment variable
  // https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
  return process.env.NEXT_PUBLIC_SITE_URL;
};

export default getBaseUrl;
