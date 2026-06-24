import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  HeartPulse,
  Hotel,
  Scissors,
  Store,
  UtensilsCrossed,
  Wrench,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";
import {
  CtaLink,
  FaqItem,
  FeatureCard,
  Hero,
  HeroDashboardMockup,
  PricingCard,
  Section,
  SectionHeader,
  StepCard,
  TrialBadge,
  TrialReassurance,
} from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath, type IndustryKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getHomeContent } from "@/lib/content/locales";
import { getPlans } from "@/lib/content/plans";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/seo/jsonld";
import { AiSummaryBlock } from "./ai-summary-block";
import { ExampleSites } from "./example-sites";

const SECTOR_ICONS: Record<IndustryKey, React.ReactNode> = {
  restaurants: <UtensilsCrossed className="h-5 w-5" />,
  hairdressers: <Scissors className="h-5 w-5" />,
  hotels: <Hotel className="h-5 w-5" />,
  gyms: <Dumbbell className="h-5 w-5" />,
  clinics: <HeartPulse className="h-5 w-5" />,
  "local-services": <Store className="h-5 w-5" />,
};

const STEP_ICONS = [
  <ShoppingCart key="1" className="h-7 w-7" />,
  <Wrench key="2" className="h-7 w-7" />,
  <LayoutDashboard key="3" className="h-7 w-7" />,
];

export function HomeTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = getHomeContent(locale);
  const plans = getPlans(locale).slice(0, 3);

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />

      <Hero
        title={c.h1}
        subtitle={c.subtitle}
        badge={<TrialBadge label={dict.trialBadge} />}
        actions={
          <>
            <CtaLink
              href={localePath(locale, "contact")}
              variant="primary"
              size="lg"
            >
              {dict.trialCtaStart}
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink
              href={localePath(locale, "pricing")}
              variant="outline"
              size="lg"
            >
              {c.secondaryCta}
            </CtaLink>
          </>
        }
        actionsNote={
          <TrialReassurance>{dict.trialReassurance}</TrialReassurance>
        }
        visual={<HeroDashboardMockup />}
      />

      {/* Trust strip */}
      <section className="border-y border-line bg-surface-lowest py-12">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <p className="text-label-md uppercase tracking-wider text-ink-muted">
            {c.trustLine}
          </p>
        </div>
      </section>

      {/* Sectors → industry pages */}
      <Section>
        <SectionHeader title={c.sectorsTitle} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {c.sectors.map((s) => (
            <Link key={s.key} href={localePath(locale, `industry:${s.key}`)}>
              <FeatureCard
                icon={SECTOR_ICONS[s.key]}
                title={s.title}
                description={s.description}
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* See a real example */}
      <ExampleSites locale={locale} />

      {/* How it works */}
      <Section tone="muted" bordered>
        <SectionHeader title={c.howItWorksTitle} />
        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="absolute left-[16.6%] right-[16.6%] top-8 z-0 hidden h-px bg-line md:block" />
          {c.steps.map((step, i) => (
            <StepCard
              key={step.title}
              index={i + 1}
              icon={STEP_ICONS[i]}
              {...step}
            />
          ))}
        </div>
      </Section>

      {/* Plans */}
      <Section>
        <SectionHeader title={c.plansTitle} subtitle={c.plansSubtitle} />
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.code}
              name={plan.name}
              price={`€${plan.priceFrom}`}
              priceSuffix={dict.perMonth}
              features={plan.features.slice(0, 4)}
              ctaLabel={dict.choosePlan}
              ctaHref={localePath(locale, "pricing")}
              highlighted={plan.highlighted}
              badge={plan.highlighted ? dict.trialBadge : undefined}
              footnote={dict.trialReassurance}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={localePath(locale, "pricing")}
            className="inline-flex items-center gap-1 text-label-md font-medium text-brand-accent hover:underline"
          >
            {dict.ctaSeePricing} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* AI-friendly summary */}
      <AiSummaryBlock label={dict.aiSummaryLabel} text={c.aiSummary} />

      {/* FAQ */}
      <Section tone="muted" bordered>
        <SectionHeader title={c.faqTitle} />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {c.faqs.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>
    </>
  );
}
