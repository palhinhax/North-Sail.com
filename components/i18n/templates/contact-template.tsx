import { Mail } from "lucide-react";
import { Container, Section } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getContactContent } from "@/lib/content/locales";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { CONTACT_EMAIL } from "@/lib/seo/site";
import type { IndustryKey } from "@/lib/i18n/routes";
import { Breadcrumbs } from "../breadcrumbs";
import { LeadForm } from "../lead-form";

/** Short "or email us directly" lead-in per locale. */
const EMAIL_LEADIN: Record<Locale, string> = {
  pt: "Prefere email? Escreva-nos diretamente para",
  en: "Prefer email? Reach us directly at",
  es: "¿Prefiere email? Escríbanos directamente a",
  fr: "Vous préférez l'email ? Écrivez-nous directement à",
  de: "Lieber per E-Mail? Schreiben Sie uns direkt an",
};

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

          <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-body-md text-ink-muted">
            <Mail className="h-4 w-4 text-brand-accent" />
            {EMAIL_LEADIN[locale]}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-brand-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
