import { ArrowRight, Check } from "lucide-react";
import {
  Container,
  CtaLink,
  Section,
  SectionHeader,
  TrialBadge,
  TrialReassurance,
} from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath, onboardingPath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { EXTRAS, getPlans, PRICING_META } from "@/lib/content/plans";
import {
  breadcrumbSchema,
  JsonLd,
  pricingOffersSchema,
} from "@/lib/seo/jsonld";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "../breadcrumbs";
import { AiSummaryBlock } from "./ai-summary-block";

export function PricingTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const plans = getPlans(locale);
  const meta = PRICING_META[locale];
  const path = localePath(locale, "pricing");

  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: dict.pricingTitle, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          pricingOffersSchema({
            name: `NorthSail — ${dict.pricingTitle}`,
            description: meta.metaDescription,
            url: path,
            plans: plans.map((p) => ({
              name: p.name,
              price: p.priceFrom,
              description: p.tagline,
            })),
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-14 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <h1 className="text-display-sm text-brand md:text-display-lg">
              {dict.pricingTitle}
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted">
              {dict.pricingSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Plans grid — horizontal snap-scroll on small screens, 5-up grid on xl */}
      <Section bare>
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 pt-6 xl:grid xl:grid-cols-5 xl:overflow-visible xl:px-0 xl:pb-0">
            {plans.map((plan) => (
              <div
                key={plan.code}
                className={cn(
                  "relative flex h-full w-[280px] shrink-0 snap-start flex-col rounded-2xl border p-6 transition-transform duration-300 sm:w-[300px] xl:w-auto",
                  plan.highlighted
                    ? "border-brand-container bg-brand-container text-white shadow-card-lg xl:scale-105"
                    : "border-line bg-surface-lowest shadow-card hover:-translate-y-1"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-accent px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-white">
                    {dict.planRecommended}
                  </span>
                )}
                <h2
                  className={cn(
                    "text-headline-md",
                    plan.highlighted ? "text-white" : "text-brand"
                  )}
                >
                  {plan.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-label-md",
                      plan.highlighted
                        ? "text-surface-highest"
                        : "text-ink-muted"
                    )}
                  >
                    {dict.startingFrom}
                  </span>
                  <span
                    className={cn(
                      "text-display-sm",
                      plan.highlighted ? "text-white" : "text-brand"
                    )}
                  >
                    €{plan.priceFrom}
                  </span>
                  <span
                    className={cn(
                      "text-body-md",
                      plan.highlighted
                        ? "text-surface-highest"
                        : "text-ink-muted"
                    )}
                  >
                    {dict.perMonth}
                  </span>
                </div>
                <TrialBadge label={dict.trialBadge} className="mt-3" />
                <p
                  className={cn(
                    "mt-4 min-h-[3rem] text-label-sm",
                    plan.highlighted
                      ? "text-surface-highest"
                      : "text-ink-subtle"
                  )}
                >
                  {dict.bestFor}: {plan.bestFor}
                </p>
                <ul className="my-5 flex flex-grow flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className={cn(
                          "mt-1 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-white" : "text-brand-accent"
                        )}
                      />
                      <span
                        className={cn(
                          "text-label-md",
                          plan.highlighted
                            ? "text-surface-highest"
                            : "text-ink-muted"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <CtaLink
                  href={onboardingPath(locale)}
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {dict.choosePlan}
                </CtaLink>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Extras */}
      <Section tone="muted" bordered>
        <SectionHeader
          title={dict.pricingExtrasTitle}
          subtitle={dict.pricingExtrasNote}
        />
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {EXTRAS[locale].map((extra) => (
            <div
              key={extra}
              className="rounded-lg border border-line bg-surface-lowest px-4 py-3 text-label-md text-ink-muted"
            >
              {extra}
            </div>
          ))}
        </div>
      </Section>

      <AiSummaryBlock label={dict.aiSummaryLabel} text={meta.aiSummary} />

      <Section>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-display-sm text-brand">
            {dict.ctaGetRecommendation}
          </h2>
          <CtaLink
            href={localePath(locale, "contact")}
            variant="primary"
            size="lg"
          >
            {dict.ctaContact}
            <ArrowRight className="h-4 w-4" />
          </CtaLink>
          <TrialReassurance>{dict.trialReassurance}</TrialReassurance>
        </div>
      </Section>
    </>
  );
}
