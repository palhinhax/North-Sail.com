import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/config";
import {
  ALL_PAGE_KEYS,
  industryKeyOf,
  localePath,
  type PageKey,
} from "@/lib/i18n/routes";
import { absUrl } from "@/lib/seo/site";
import { availableIndustries, getCompareContent } from "@/lib/content/locales";

/**
 * Multilingual sitemap. Every page key is emitted for every locale that has
 * content, each entry carrying hreflang `alternates.languages` for all locales.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    const industries = new Set(availableIndustries(locale));

    for (const key of ALL_PAGE_KEYS as PageKey[]) {
      // Skip pages that don't have content in this locale.
      const industry = industryKeyOf(key);
      if (industry && !industries.has(industry)) continue;
      if (key.startsWith("compare:") && !getCompareContent(locale, key)) {
        continue;
      }

      const languages: Record<string, string> = {};
      for (const l of LOCALES) languages[l] = absUrl(localePath(l, key));

      entries.push({
        url: absUrl(localePath(locale, key)),
        changeFrequency: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? 1 : key === "pricing" ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
