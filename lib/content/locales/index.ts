import type { Locale } from "@/lib/i18n/config";
import type { IndustryKey, PageKey } from "@/lib/i18n/routes";
import type {
  AiSummaryContent,
  ComparePageContent,
  ContactContent,
  HomeContent,
  IndustryContent,
  LocaleContent,
} from "../types";
import en from "./en";
import pt from "./pt";
import es from "./es";
import fr from "./fr";
import de from "./de";

export const LOCALE_CONTENT: Record<Locale, LocaleContent> = {
  en,
  pt,
  es,
  fr,
  de,
};

export function getHomeContent(locale: Locale): HomeContent {
  return LOCALE_CONTENT[locale].home;
}

export function getAiSummaryContent(locale: Locale): AiSummaryContent {
  return LOCALE_CONTENT[locale].aiSummary;
}

export function getContactContent(locale: Locale): ContactContent {
  return LOCALE_CONTENT[locale].contact;
}

export function getIndustryContent(
  locale: Locale,
  industry: IndustryKey
): IndustryContent | undefined {
  return LOCALE_CONTENT[locale].industries[industry];
}

export function getCompareContent(
  locale: Locale,
  pageKey: PageKey
): ComparePageContent | undefined {
  return LOCALE_CONTENT[locale].compare[pageKey];
}

/** Industry keys that have published content in a given locale. */
export function availableIndustries(locale: Locale): IndustryKey[] {
  return Object.keys(LOCALE_CONTENT[locale].industries) as IndustryKey[];
}
