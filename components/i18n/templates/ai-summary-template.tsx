import { ArrowRight, Check, X } from "lucide-react";
import {
  Container,
  CtaLink,
  FaqItem,
  Section,
  SectionHeader,
} from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getAiSummaryContent } from "@/lib/content/locales";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";

export function AiSummaryTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = getAiSummaryContent(locale);
  const path = localePath(locale, "ai-summary");

  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  const blocks: { heading: string; body: string }[] = [
    { heading: dict.ourSolution, body: c.whatItIs },
    { heading: dict.whoFor, body: c.whoItServes },
    { heading: dict.nav[0].label, body: c.plans },
    { heading: dict.relatedIndustries, body: c.industries },
    { heading: dict.upgradeOptions, body: c.howToChoose },
  ];

  return (
    <>
      <JsonLd data={[faqSchema(c.faqs), breadcrumbSchema(crumbs)]} />

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
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {blocks.map((b) => (
            <div key={b.heading}>
              <h2 className="mb-3 text-headline-md text-brand">{b.heading}</h2>
              <p className="text-body-lg text-ink-muted">{b.body}</p>
            </div>
          ))}

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface-lowest p-8 shadow-card">
              <h2 className="mb-5 text-headline-md text-brand">
                {dict.whatsIncluded}
              </h2>
              <ul className="flex flex-col gap-3">
                {c.included.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-accent" />
                    <span className="text-body-md text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface-low p-8">
              <h2 className="mb-5 text-headline-md text-brand">
                {dict.notIncluded}
              </h2>
              <ul className="flex flex-col gap-3">
                {c.excluded.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <X className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
                    <span className="text-body-md text-ink-subtle">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" bordered>
        <SectionHeader title={dict.faqTitle} />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {c.faqs.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-display-sm text-brand">{dict.leadTitle}</h2>
          <CtaLink
            href={localePath(locale, "contact")}
            variant="primary"
            size="lg"
          >
            {dict.ctaStart}
            <ArrowRight className="h-4 w-4" />
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
