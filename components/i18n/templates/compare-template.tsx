import { ArrowRight } from "lucide-react";
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
import type { ComparePageContent } from "@/lib/content/types";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  serviceSchema,
} from "@/lib/seo/jsonld";
import { PLAN_PRICES } from "@/lib/content/plans";
import { Breadcrumbs } from "../breadcrumbs";
import { AiSummaryBlock } from "./ai-summary-block";

export function CompareTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ComparePageContent;
}) {
  const dict = getDictionary(locale);
  const path = localePath(locale, content.pageKey);

  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: content.h1, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: content.metaTitle,
            description: content.metaDescription,
            url: path,
            priceFrom: PLAN_PRICES.MINI_APP,
          }),
          faqSchema(content.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-16 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <h1 className="text-display-sm text-brand md:text-display-lg">
              {content.h1}
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted">
              {content.valueProp}
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-ink-muted">
              {content.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                href={localePath(locale, content.cta.target)}
                variant="primary"
                size="lg"
              >
                {content.cta.label}
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
              <CtaLink
                href={localePath(locale, "pricing")}
                variant="outline"
                size="lg"
              >
                {dict.ctaSeePricing}
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {content.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-4 text-headline-md text-brand">{s.heading}</h2>
              <div className="flex flex-col gap-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-body-lg text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <AiSummaryBlock label={dict.aiSummaryLabel} text={content.aiSummary} />

      <Section tone="muted" bordered>
        <SectionHeader title={dict.faqTitle} />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {content.faqs.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-display-sm text-brand">{content.cta.label}</h2>
          <CtaLink
            href={localePath(locale, content.cta.target)}
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
