import type { Metadata } from "next";

/**
 * Localized authentication pages live at `/{locale}/auth/*`. Like the onboarding
 * wizard, they are kept out of the search index: the multilingual discovery
 * surface is the marketing pages, and indexing per-locale login/register forms
 * would only create duplicate, low-value entries.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
