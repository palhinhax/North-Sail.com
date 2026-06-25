import Link from "next/link";
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
import { planName } from "@/lib/content/plans";
import { availableIndustries, getIndustryContent } from "@/lib/content/locales";
import type { IndustryContent } from "@/lib/content/types";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  serviceSchema,
} from "@/lib/seo/jsonld";
import { PLAN_PRICES } from "@/lib/content/plans";
import { Breadcrumbs } from "../breadcrumbs";
import { AiSummaryBlock } from "./ai-summary-block";

export function IndustryTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: IndustryContent;
}) {
  const dict = getDictionary(locale);
  const pageKey = `industry:${content.industry}` as const;
  const path = localePath(locale, pageKey);
  const minPlanName = planName(locale, content.minimumPlan.code);

  const related = availableIndustries(locale)
    .filter((k) => k !== content.industry)
    .map((k) => getIndustryContent(locale, k))
    .filter(Boolean)
    .slice(0, 4) as IndustryContent[];

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
            priceFrom: PLAN_PRICES[content.minimumPlan.code],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-16 pt-28 md:pb-20 md:pt-32">
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
              {content.heroText}
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

      {/* Audience + Problems */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-headline-md text-brand">{dict.whoFor}</h2>
            <ul className="flex flex-col gap-3">
              {content.audience.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-accent" />
                  <span className="text-body-md text-ink-muted">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-headline-md text-brand">
              {dict.whatProblem}
            </h2>
            <ul className="flex flex-col gap-3">
              {content.problems.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-body-md text-ink-muted">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section tone="muted" bordered>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-display-sm text-brand">
            {dict.ourSolution}
          </h2>
          <p className="text-body-lg text-ink-muted">{content.solution}</p>
        </div>
      </Section>

      {/* Included / Excluded */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-lowest p-8 shadow-card">
            <h2 className="mb-5 text-headline-md text-brand">
              {dict.whatsIncluded}
            </h2>
            <ul className="flex flex-col gap-3">
              {content.included.map((f) => (
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
              {content.excluded.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <X className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
                  <span className="text-body-md text-ink-subtle">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Minimum plan + upgrade */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-container bg-brand-container p-8 text-white">
            <span className="text-label-md uppercase tracking-wider text-surface-highest">
              {dict.minimumPlan}
            </span>
            <p className="mt-2 text-headline-md text-white">
              {minPlanName} · {dict.startingFrom} €
              {PLAN_PRICES[content.minimumPlan.code]}
              {dict.perMonth}
            </p>
            <p className="mt-3 text-body-md text-surface-highest">
              {content.minimumPlan.reason}
            </p>
            <Link
              href={localePath(locale, "pricing")}
              className="mt-5 inline-flex items-center gap-1 text-label-md font-medium text-white underline-offset-4 hover:underline"
            >
              {dict.ctaSeePricing} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-surface-lowest p-8 shadow-card">
            <span className="text-label-md uppercase tracking-wider text-ink-muted">
              {dict.upgradeOptions}
            </span>
            <p className="mt-3 text-body-md text-ink-muted">
              {content.upgrade}
            </p>
          </div>
        </div>
      </Section>

      {/* AI-friendly summary */}
      <AiSummaryBlock label={dict.aiSummaryLabel} text={content.aiSummary} />

      {/* FAQ */}
      <Section tone="muted" bordered>
        <SectionHeader title={dict.faqTitle} />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {content.faqs.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      {/* Related industries */}
      {related.length > 0 && (
        <Section>
          <SectionHeader title={dict.relatedIndustries} align="left" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.industry}
                href={localePath(locale, `industry:${r.industry}`)}
                className="group rounded-2xl border border-line bg-surface-lowest p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="text-headline-sm text-brand">
                  {r.valueProp.split(" — ")[0].slice(0, 60)}
                </span>
                <span className="mt-2 flex items-center gap-1 text-label-md text-brand-accent">
                  {dict.ctaStart}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section tone="muted" bordered>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-display-sm text-brand">{content.cta.label}</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/comecar" variant="primary" size="lg">
              {dict.ctaStart}
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink
              href={localePath(locale, "contact")}
              variant="outline"
              size="lg"
            >
              {dict.ctaGetRecommendation}
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
