import { MetadataRoute } from "next";
import getBaseUrl from "@/app/lib/getBaseUrl";
import routes from "@/app/lib/routes";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return Object.values(routes).map((route) => {
    return {
      url: new URL(route.href, baseUrl).toString(),
      lastModified,
      changeFrequency: "always",
      priority: route.priority,
    };
  });
};

export default sitemap;
