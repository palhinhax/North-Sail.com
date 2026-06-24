import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { type IndustryKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getHomeContent } from "@/lib/content/locales";

/**
 * "See a real example" — visual proof that "from €15/month" is credible.
 *
 * TODO: replace the placeholder mockups + href="#" with real example
 * sites/mini apps per sector (gym, restaurant, hairdresser) once they exist.
 * Each entry's `href` should then point at the live demo and `live: true`.
 */
const EXAMPLES: { sector: IndustryKey; href: string; live: boolean }[] = [
  { sector: "gyms", href: "#", live: false },
  { sector: "restaurants", href: "#", live: false },
  { sector: "hairdressers", href: "#", live: false },
];

function MockupFrame({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-lowest shadow-card">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-low px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
        <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
        <span className="ml-2 truncate text-label-sm text-ink-subtle">
          {label}
        </span>
      </div>
      {/* faux page */}
      <div className="flex flex-col gap-3 p-4">
        <div className="h-16 rounded-lg bg-brand-container/90" />
        <div className="h-3 w-2/3 rounded bg-surface-highest" />
        <div className="h-3 w-1/2 rounded bg-surface-highest" />
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="h-12 rounded-md bg-surface-low" />
          <div className="h-12 rounded-md bg-surface-low" />
          <div className="h-12 rounded-md bg-surface-low" />
        </div>
        <div className="mt-1 h-8 w-28 rounded-md bg-brand-accent/90" />
      </div>
    </div>
  );
}

export function ExampleSites({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const home = getHomeContent(locale);
  const sectorTitle = (key: IndustryKey) =>
    home.sectors.find((s) => s.key === key)?.title ?? key;

  return (
    <Section>
      <SectionHeader
        title={dict.exampleSitesTitle}
        subtitle={dict.exampleSitesSubtitle}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {EXAMPLES.map(({ sector, href, live }) => {
          const title = sectorTitle(sector);
          const domain = `${sector}.exemplo.northsail`;
          return (
            <Link
              key={sector}
              href={href}
              {...(live
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { "aria-disabled": true, tabIndex: -1 })}
              className="group flex flex-col gap-4 rounded-2xl border border-line bg-surface-lowest p-4 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <MockupFrame label={domain} />
              <div className="flex items-center justify-between px-1 pb-1">
                <div className="flex items-center gap-2">
                  <span className="text-headline-sm text-brand">{title}</span>
                  <span className="rounded-full bg-surface-low px-2 py-0.5 text-label-sm text-ink-subtle">
                    {dict.exampleSitesBadge}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-label-md font-medium text-brand-accent group-hover:underline">
                  {dict.exampleSitesCta}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
