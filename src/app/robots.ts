import { MetadataRoute } from "next";

import getBaseUrl from "@/app/lib/getBaseUrl";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("sitemap.xml", getBaseUrl()).toString(),
  };
};

export default robots;
