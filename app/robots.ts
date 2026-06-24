import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

/**
 * robots.txt — allow normal crawling of public marketing pages (including AI
 * search crawlers such as OAI-SearchBot) and block private/admin/portal routes.
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/admin",
    "/dashboard",
    "/account",
    "/client",
    "/api/",
    "/auth/",
  ];

  return {
    rules: [
      // Default: everything public is crawlable; private areas blocked.
      { userAgent: "*", allow: "/", disallow },
      // Explicitly welcome major search + AI search crawlers.
      { userAgent: "Googlebot", allow: "/", disallow },
      { userAgent: "Bingbot", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
      { userAgent: "Applebot", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
