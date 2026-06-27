import type { MetadataRoute } from "next";

const siteUrl = "https://brownlinetours.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/account", "/api"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
