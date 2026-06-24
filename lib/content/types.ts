import type { Locale } from "@/lib/i18n/config";
import type { IndustryKey, PageKey } from "@/lib/i18n/routes";

/** Plan identifiers, aligned with the recommendation engine. */
export type PlanCode =
  | "PRESENCA"
  | "MINI_APP"
  | "MINI_APP_PLUS"
  | "BUSINESS_LOCAL"
  | "PRO_GESTAO";

export interface FaqItemContent {
  question: string;
  answer: string;
}

/** A pair of CTA label + target page key (resolved to a localized path). */
export interface CtaContent {
  label: string;
  target: PageKey;
}

/**
 * Full content for an industry landing page in a single language.
 * This shape powers the programmatic-SEO content model: adding a new industry
 * or language is just a new data object, no new template code.
 */
export interface IndustryContent {
  industry: IndustryKey;
  locale: Locale;
  /** <title> tag. */
  metaTitle: string;
  /** meta description. */
  metaDescription: string;
  /** Visible H1. */
  h1: string;
  /** One-line value proposition under the H1. */
  valueProp: string;
  /** Longer hero paragraph. */
  heroText: string;
  /** Who this is for (short audience descriptors). */
  audience: string[];
  /** Pain points / problems this solves. */
  problems: string[];
  /** Narrative solution paragraph. */
  solution: string;
  /** What is included in the recommended package. */
  included: string[];
  /** What is NOT included in the base/entry plan. */
  excluded: string[];
  /** Minimum recommended plan code + a one-line reason. */
  minimumPlan: { code: PlanCode; reason: string };
  /** When to upgrade and to what. */
  upgrade: string;
  /** Plain-language "AI-friendly summary" paragraph. */
  aiSummary: string;
  faqs: FaqItemContent[];
  /** Primary CTA for the page. */
  cta: CtaContent;
}

/** A localized intent/comparison landing page (e.g. "website with bookings"). */
export interface ComparePageContent {
  pageKey: PageKey;
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  valueProp: string;
  intro: string;
  /** Body sections with a heading + paragraphs. */
  sections: { heading: string; body: string[] }[];
  aiSummary: string;
  faqs: FaqItemContent[];
  cta: CtaContent;
}

/** Localized homepage copy (keeps the existing home design but per-locale). */
export interface HomeContent {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  trustLine: string;
  sectorsTitle: string;
  sectors: { key: IndustryKey; title: string; description: string }[];
  howItWorksTitle: string;
  steps: { title: string; description: string }[];
  plansTitle: string;
  plansSubtitle: string;
  aiSummary: string;
  faqTitle: string;
  faqs: FaqItemContent[];
}

/** Localized AI-summary page (AEO/GEO). */
export interface AiSummaryContent {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatItIs: string;
  whoItServes: string;
  plans: string;
  industries: string;
  included: string[];
  excluded: string[];
  howToChoose: string;
  faqs: FaqItemContent[];
}

/** Localized contact / lead page copy. */
export interface ContactContent {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
}

/** Aggregated per-locale content bundle. */
export interface LocaleContent {
  home: HomeContent;
  aiSummary: AiSummaryContent;
  contact: ContactContent;
  industries: Partial<Record<IndustryKey, IndustryContent>>;
  compare: Partial<Record<PageKey, ComparePageContent>>;
}
