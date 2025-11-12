import { MetadataRoute } from 'next';
import getBaseUrl from '@/app/lib/getBaseUrl';
import routes from '@/app/lib/routes';

const sitemap = (): MetadataRoute.Sitemap => {
  return Object.values(routes).map((route) => {
    return {
      url: new URL(route.href, getBaseUrl()).toString(),
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: route.priority,
    };
  });
};

export default sitemap;
