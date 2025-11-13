import { MetadataRoute } from "next";
import routes from "@/app/lib/routes";
import getBaseUrl from "@/app/lib/getBaseUrl";

const sitemap = (): MetadataRoute.Sitemap => {
  return Object.values(routes).map((route) => {
    return {
      url: new URL(route.href, getBaseUrl()).toString(),
      lastModified: new Date(),
      changeFrequency: "always",
      priority: route.priority,
    };
  });
};

export default sitemap;
