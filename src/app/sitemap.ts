import { MetadataRoute } from 'next';
import routes from '@/app/lib/routes';

const sitemap = (): MetadataRoute.Sitemap => {
  return Object.values(routes).map((route) => {
    return {
      url: new URL(route.href, process.env.NEXT_PUBLIC_SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: route.priority,
    };
  });
};

export default sitemap;
