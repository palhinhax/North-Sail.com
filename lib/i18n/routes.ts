import { LOCALES, type Locale } from "./config";

/**
 * Page keys identify a logical marketing page that exists in every language.
 * Each key maps to a locale-specific URL slug (see SLUGS below). The `[locale]`
 * route resolves an incoming slug back to its page key.
 */
export type PageKey =
  | "home"
  | "pricing"
  | "ai-summary"
  | "contact"
  | "industry:restaurants"
  | "industry:hairdressers"
  | "industry:hotels"
  | "industry:gyms"
  | "industry:clinics"
  | "industry:local-services"
  | "compare:website-with-bookings"
  | "compare:cheap-website-for-small-business";

/** Industry page keys, used by the programmatic-SEO content registry. */
export const INDUSTRY_KEYS = [
  "restaurants",
  "hairdressers",
  "hotels",
  "gyms",
  "clinics",
  "local-services",
] as const;

export type IndustryKey = (typeof INDUSTRY_KEYS)[number];

/**
 * Locale-specific slug for every page key. The home page has an empty slug
 * (it lives at `/{locale}`). All other slugs are unique within a locale so a
 * single `[locale]/[slug]` route can resolve them.
 */
type SlugMap = Record<PageKey, Record<Locale, string>>;

export const SLUGS: SlugMap = {
  home: { en: "", pt: "", es: "", fr: "", de: "" },
  pricing: {
    en: "pricing",
    pt: "precos",
    es: "precios",
    fr: "tarifs",
    de: "preise",
  },
  "ai-summary": {
    en: "ai-summary",
    pt: "resumo-ia",
    es: "resumen-ia",
    fr: "resume-ia",
    de: "ki-zusammenfassung",
  },
  contact: {
    en: "contact",
    pt: "contacto",
    es: "contacto",
    fr: "contact",
    de: "kontakt",
  },
  "industry:restaurants": {
    en: "restaurants",
    pt: "restaurantes",
    es: "restaurantes",
    fr: "restaurants",
    de: "restaurants",
  },
  "industry:hairdressers": {
    en: "hairdressers",
    pt: "cabeleireiros",
    es: "peluquerias",
    fr: "coiffeurs",
    de: "friseure",
  },
  "industry:hotels": {
    en: "hotels",
    pt: "hoteis",
    es: "hoteles",
    fr: "hotels",
    de: "hotels",
  },
  "industry:gyms": {
    en: "gyms",
    pt: "ginasios",
    es: "gimnasios",
    fr: "salles-de-sport",
    de: "fitnessstudios",
  },
  "industry:clinics": {
    en: "clinics",
    pt: "clinicas",
    es: "clinicas",
    fr: "cliniques",
    de: "kliniken",
  },
  "industry:local-services": {
    en: "local-services",
    pt: "servicos-locais",
    es: "servicios-locales",
    fr: "services-locaux",
    de: "lokale-dienstleistungen",
  },
  "compare:website-with-bookings": {
    en: "website-with-bookings",
    pt: "site-com-reservas",
    es: "sitio-web-con-reservas",
    fr: "site-avec-reservations",
    de: "website-mit-buchungen",
  },
  "compare:cheap-website-for-small-business": {
    en: "cheap-website-for-small-business",
    pt: "site-barato-para-pequenas-empresas",
    es: "web-barata-para-pequenas-empresas",
    fr: "site-pas-cher-pour-petites-entreprises",
    de: "guenstige-website-fuer-kleine-unternehmen",
  },
};

export const ALL_PAGE_KEYS = Object.keys(SLUGS) as PageKey[];

/** All page keys except the home page (i.e. everything served by `[slug]`). */
export const SLUG_PAGE_KEYS = ALL_PAGE_KEYS.filter((k) => k !== "home");

/** Build the canonical path for a page key in a given locale, e.g. `/pt/precos`. */
export function localePath(locale: Locale, key: PageKey): string {
  const slug = SLUGS[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Resolve a locale + raw slug back to its page key, or null if unknown. */
export function resolvePageKey(locale: Locale, slug: string): PageKey | null {
  for (const key of SLUG_PAGE_KEYS) {
    if (SLUGS[key][locale] === slug) return key;
  }
  return null;
}

/** Static params for the `[locale]/[slug]` route across every locale. */
export function allSlugParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const key of SLUG_PAGE_KEYS) {
      params.push({ locale, slug: SLUGS[key][locale] });
    }
  }
  return params;
}

/** Map a page key to its industry key when applicable. */
export function industryKeyOf(key: PageKey): IndustryKey | null {
  if (key.startsWith("industry:")) {
    return key.slice("industry:".length) as IndustryKey;
  }
  return null;
}
