import Link from "next/link";
import { Container } from "@/components/marketing";
import { PoweredByBadge } from "@/app/components/PoweredByBadge";
import { LOCALE_LABELS, type Locale } from "@/lib/i18n/config";
import { localePath, type PageKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { SITE_NAME } from "@/lib/seo/site";
import { LocaleNav } from "./locale-nav";

export function LocaleFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const columns: { title: string; links: { href: string; label: string }[] }[] =
    [
      {
        title: dict.footerProduct,
        links: [
          { href: localePath(locale, "pricing"), label: dict.nav[0].label },
          {
            href: localePath(locale, "industry:restaurants"),
            label: dict.nav[1].label,
          },
          {
            href: localePath(locale, "industry:hotels"),
            label: dict.nav[2].label,
          },
          {
            href: localePath(locale, "compare:website-with-bookings"),
            label: dict.footerBookings,
          },
        ],
      },
      {
        title: dict.footerCompany,
        links: [
          { href: localePath(locale, "ai-summary"), label: dict.nav[3].label },
          { href: localePath(locale, "contact"), label: dict.ctaContact },
        ],
      },
      {
        title: dict.footerLegal,
        links: [
          {
            href: localePath(locale, "legal:privacy"),
            label: dict.footerPrivacy,
          },
          { href: localePath(locale, "legal:terms"), label: dict.footerTerms },
        ],
      },
    ];

  return (
    <footer className="mt-24 border-t border-line bg-background">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-headline-sm font-bold text-brand">
              {SITE_NAME}
            </span>
            <p className="max-w-xs text-center text-body-md text-ink-muted md:text-left">
              {dict.footerTagline}
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-label-sm text-ink-muted">
              {LOCALE_LABELS[locale]}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <span className="text-label-md font-semibold text-brand">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-label-sm text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <PoweredByBadge align="center" />
      </Container>
    </footer>
  );
}

/** Locale-aware marketing shell (nav + content + footer). */
export function LocaleMarketingLayout({
  locale,
  pageKey,
  children,
  hideFooter = false,
}: {
  locale: Locale;
  pageKey: PageKey;
  children: React.ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LocaleNav locale={locale} pageKey={pageKey} />
      <main className="flex-1 pt-16">{children}</main>
      {!hideFooter && <LocaleFooter locale={locale} />}
    </div>
  );
}
