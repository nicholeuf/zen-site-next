import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL(
      'sitemap.xml',
      process.env.NEXT_PUBLIC_SITE_URL
    ).toString(),
  };
};

export default robots;
