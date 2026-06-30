import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import {
  allSlugParams,
  industryKeyOf,
  legalKeyOf,
  resolvePageKey,
  type PageKey,
} from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { PRICING_META } from "@/lib/content/plans";
import {
  getAiSummaryContent,
  getCompareContent,
  getContactContent,
  getIndustryContent,
} from "@/lib/content/locales";
import { getLegalContent } from "@/lib/content/legal";
import {
  AboutTemplate,
  aboutMeta,
  AiSummaryTemplate,
  CasesTemplate,
  casesMeta,
  ConsultingTemplate,
  consultingMeta,
  CompareTemplate,
  ContactTemplate,
  IndustryTemplate,
  LegalTemplate,
  LocaleMarketingLayout,
  PricingTemplate,
} from "@/components/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return allSlugParams();
}

/** Resolve (locale, slug) → page key, or null if it doesn't exist/has no content. */
function resolve(localeRaw: string, slug: string) {
  if (!isLocale(localeRaw)) return null;
  const locale = localeRaw as Locale;
  const pageKey = resolvePageKey(locale, slug);
  if (!pageKey) return null;
  return { locale, pageKey };
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const r = resolve(params.locale, params.slug);
  if (!r) return {};
  const { locale, pageKey } = r;

  const meta = metaFor(locale, pageKey);
  if (!meta) return {};
  return buildMetadata({
    locale,
    pageKey,
    title: meta.title,
    description: meta.description,
  });
}

function metaFor(
  locale: Locale,
  pageKey: PageKey
): { title: string; description: string } | null {
  if (pageKey === "pricing") {
    const m = PRICING_META[locale];
    return { title: m.metaTitle, description: m.metaDescription };
  }
  if (pageKey === "ai-summary") {
    const c = getAiSummaryContent(locale);
    return { title: c.metaTitle, description: c.metaDescription };
  }
  if (pageKey === "contact") {
    const c = getContactContent(locale);
    return { title: c.metaTitle, description: c.metaDescription };
  }
  if (pageKey === "about") {
    return aboutMeta(locale);
  }
  if (pageKey === "cases") {
    return casesMeta(locale);
  }
  if (pageKey === "consulting") {
    return consultingMeta(locale);
  }
  const industry = industryKeyOf(pageKey);
  if (industry) {
    const c = getIndustryContent(locale, industry);
    return c ? { title: c.metaTitle, description: c.metaDescription } : null;
  }
  if (pageKey.startsWith("compare:")) {
    const c = getCompareContent(locale, pageKey);
    return c ? { title: c.metaTitle, description: c.metaDescription } : null;
  }
  const legal = legalKeyOf(pageKey);
  if (legal) {
    const c = getLegalContent(locale, legal);
    return { title: c.metaTitle, description: c.metaDescription };
  }
  return null;
}

export default function LocaleSlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const r = resolve(params.locale, params.slug);
  if (!r) notFound();
  const { locale, pageKey } = r;

  let body: React.ReactNode = null;

  if (pageKey === "pricing") {
    body = <PricingTemplate locale={locale} />;
  } else if (pageKey === "ai-summary") {
    body = <AiSummaryTemplate locale={locale} />;
  } else if (pageKey === "contact") {
    body = <ContactTemplate locale={locale} />;
  } else if (pageKey === "about") {
    body = <AboutTemplate locale={locale} />;
  } else if (pageKey === "cases") {
    body = <CasesTemplate locale={locale} />;
  } else if (pageKey === "consulting") {
    body = <ConsultingTemplate locale={locale} />;
  } else if (legalKeyOf(pageKey)) {
    body = <LegalTemplate locale={locale} which={legalKeyOf(pageKey)!} />;
  } else {
    const industry = industryKeyOf(pageKey);
    if (industry) {
      const content = getIndustryContent(locale, industry);
      if (!content) notFound();
      body = <IndustryTemplate locale={locale} content={content} />;
    } else if (pageKey.startsWith("compare:")) {
      const content = getCompareContent(locale, pageKey);
      if (!content) notFound();
      body = <CompareTemplate locale={locale} content={content} />;
    }
  }

  if (!body) notFound();

  return (
    <LocaleMarketingLayout locale={locale} pageKey={pageKey}>
      {body}
    </LocaleMarketingLayout>
  );
}
