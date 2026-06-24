import type { Metadata } from "next";

/**
 * The `/comecar` onboarding wizard is a Portuguese-only conversion funnel that
 * creates accounts. It is intentionally kept out of the search index: the
 * canonical, multilingual discovery surface is the localized marketing pages
 * (`/{locale}`, `/{locale}/pricing`, the industry pages and `/{locale}/contact`).
 * Keeping it `noindex, follow` avoids an orphan duplicate competing with those
 * pages while still letting crawlers follow its internal links.
 */
export const metadata: Metadata = {
  title: "Começar — NorthSail",
  robots: { index: false, follow: true },
};

export default function ComecarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
