import type { Metadata } from "next";
import { LOCALES, OG_LOCALE, type Locale } from "@/lib/i18n/config";
import { localePath, type PageKey } from "@/lib/i18n/routes";
import { absUrl, SITE_NAME, SITE_URL } from "./site";

interface BuildMetadataArgs {
  locale: Locale;
  pageKey: PageKey;
  title: string;
  description: string;
  /**
   * Optional override for the social share image (site-root path). When
   * omitted, the branded card from `app/opengraph-image.tsx` is used.
   */
  image?: string;
  /** Set true for pages that should not be indexed. */
  noindex?: boolean;
}

/**
 * Build a Next.js Metadata object with a correct canonical URL, full hreflang
 * alternates across every locale (plus an x-default pointing at English) and
 * Open Graph + Twitter card metadata.
 */
export function buildMetadata({
  locale,
  pageKey,
  title,
  description,
  image,
  noindex = false,
}: BuildMetadataArgs): Metadata {
  const canonicalPath = localePath(locale, pageKey);

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = absUrl(localePath(l, pageKey));
  }
  // x-default points at the global English version.
  languages["x-default"] = absUrl(localePath("en", pageKey));

  return {
    metadataBase: new URL(SITE_URL),
    // Absolute title bypasses the root layout's "%s | NorthSail" template so
    // titles that already include the brand don't double it up.
    title: { absolute: title },
    description,
    alternates: {
      canonical: absUrl(canonicalPath),
      languages,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: absUrl(canonicalPath),
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l]
      ),
      // Only override the default branded card (app/opengraph-image.tsx) when a
      // page passes an explicit image.
      ...(image ? { images: [{ url: image, alt: SITE_NAME }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
