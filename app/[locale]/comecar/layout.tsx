import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getOnboardingCopy } from "@/lib/content/onboarding";

/**
 * The localized `/{locale}/comecar` onboarding wizard is a conversion funnel
 * that creates accounts. It is intentionally kept out of the search index: the
 * canonical, multilingual discovery surface is the localized marketing pages
 * (`/{locale}`, `/{locale}/pricing`, the industry pages and `/{locale}/contact`).
 * Keeping it `noindex, follow` avoids an orphan duplicate competing with those
 * pages while still letting crawlers follow its internal links.
 */
export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  return {
    title: getOnboardingCopy(locale).metaTitle,
    robots: { index: false, follow: true },
  };
}

export default function ComecarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
