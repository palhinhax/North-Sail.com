/**
 * Supported locales for the NorthSail marketing site.
 *
 * English is the default / global version and is served at `/en`.
 * The bare root `/` redirects to `/en`.
 */
export const LOCALES = ["en", "pt", "es", "fr", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Human-readable language names, shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

/**
 * BCP-47 language tags used for the `hreflang` attribute, the `<html lang>`
 * attribute and Open Graph `og:locale`.
 */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-PT",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
};

/** Open Graph locale codes (underscore form). */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_PT",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
};
