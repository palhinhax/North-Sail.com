import { Container, Section } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getContactContent } from "@/lib/content/locales";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import type { IndustryKey } from "@/lib/i18n/routes";
import { Breadcrumbs } from "../breadcrumbs";
import { LeadForm } from "../lead-form";

export function ContactTemplate({
  locale,
  defaultIndustry,
}: {
  locale: Locale;
  defaultIndustry?: IndustryKey;
}) {
  const dict = getDictionary(locale);
  const c = getContactContent(locale);
  const path = localePath(locale, "contact");

  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-14 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <h1 className="text-display-sm text-brand md:text-display-lg">
              {c.h1}
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted">{c.intro}</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <LeadForm locale={locale} defaultIndustry={defaultIndustry} />
        </div>
      </Section>
    </>
  );
}
