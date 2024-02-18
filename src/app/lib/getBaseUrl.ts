const getBaseUrl = (): string => {
  // TODO: Determine why VERCEL_URL is not working in vercel deployment
  // https://github.com/nicholeuf/zen-site-next/issues/18
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
};

export default getBaseUrl;
