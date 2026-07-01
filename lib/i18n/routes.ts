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
  | "about"
  | "cases"
  | "consulting"
  | "dx-sme"
  | "offer"
  | "industry:restaurants"
  | "industry:cafes"
  | "industry:hairdressers"
  | "industry:hotels"
  | "industry:gyms"
  | "industry:clinics"
  | "industry:local-services"
  | "compare:website-with-bookings"
  | "compare:cheap-website-for-small-business"
  // Enterprise / web-apps axis (section-based pages, premium positioning).
  | "compare:web-apps-for-business"
  | "compare:client-portals"
  | "compare:internal-dashboards"
  | "compare:custom-software"
  | "compare:process-automation"
  | "compare:web-apps-for-law-firms"
  // Restaurant sub-intent pages.
  | "compare:restaurant-online-reservations"
  | "compare:restaurant-digital-menu"
  // Upgrade / migration intent.
  | "compare:legacy-website-redesign"
  | "legal:privacy"
  | "legal:terms";

/** Industry page keys, used by the programmatic-SEO content registry. */
export const INDUSTRY_KEYS = [
  "restaurants",
  "cafes",
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
  about: {
    en: "about",
    pt: "sobre",
    es: "sobre",
    fr: "a-propos",
    de: "ueber-uns",
  },
  cases: {
    en: "case-studies",
    pt: "casos",
    es: "casos",
    fr: "etudes-de-cas",
    de: "referenzen",
  },
  consulting: {
    en: "consulting",
    pt: "consultoria",
    es: "consultoria",
    fr: "conseil",
    de: "beratung",
  },
  "dx-sme": {
    en: "digital-transformation-for-small-business",
    pt: "transformacao-digital-para-pme",
    es: "transformacion-digital-para-pymes",
    fr: "transformation-numerique-pour-pme",
    de: "digitale-transformation-fuer-kmu",
  },
  // Promo landing (launch offer). Same slug across locales so the campaign
  // link/QR stays stable regardless of language.
  offer: {
    en: "oferta-1-ano-gratis",
    pt: "oferta-1-ano-gratis",
    es: "oferta-1-ano-gratis",
    fr: "oferta-1-ano-gratis",
    de: "oferta-1-ano-gratis",
  },
  "industry:restaurants": {
    en: "restaurants",
    pt: "restaurantes",
    es: "restaurantes",
    fr: "restaurants",
    de: "restaurants",
  },
  "industry:cafes": {
    en: "cafes",
    pt: "cafes",
    es: "cafeterias",
    fr: "cafes",
    de: "cafes",
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
  "compare:web-apps-for-business": {
    en: "web-apps-for-business",
    pt: "web-apps-para-empresas",
    es: "web-apps-para-empresas",
    fr: "web-apps-pour-entreprises",
    de: "web-apps-fuer-unternehmen",
  },
  "compare:client-portals": {
    en: "client-portals",
    pt: "portais-de-cliente",
    es: "portales-de-cliente",
    fr: "portails-client",
    de: "kundenportale",
  },
  "compare:internal-dashboards": {
    en: "internal-dashboards",
    pt: "dashboards-internos",
    es: "paneles-internos",
    fr: "tableaux-de-bord-internes",
    de: "interne-dashboards",
  },
  "compare:custom-software": {
    en: "custom-software",
    pt: "software-a-medida",
    es: "software-a-medida",
    fr: "logiciel-sur-mesure",
    de: "individuelle-software",
  },
  "compare:process-automation": {
    en: "process-automation",
    pt: "automacao-de-processos",
    es: "automatizacion-de-procesos",
    fr: "automatisation-des-processus",
    de: "prozessautomatisierung",
  },
  "compare:web-apps-for-law-firms": {
    en: "web-apps-for-law-firms",
    pt: "web-apps-para-advogados",
    es: "web-apps-para-despachos-de-abogados",
    fr: "web-apps-pour-cabinets-davocats",
    de: "web-apps-fuer-anwaltskanzleien",
  },
  "compare:restaurant-online-reservations": {
    en: "restaurant-reservation-system",
    pt: "sistema-de-reservas-para-restaurantes",
    es: "sistema-de-reservas-para-restaurantes",
    fr: "systeme-de-reservation-pour-restaurants",
    de: "reservierungssystem-fuer-restaurants",
  },
  "compare:restaurant-digital-menu": {
    en: "digital-menu-for-restaurants",
    pt: "menu-digital-para-restaurantes",
    es: "menu-digital-para-restaurantes",
    fr: "menu-numerique-pour-restaurants",
    de: "digitale-speisekarte-fuer-restaurants",
  },
  "compare:legacy-website-redesign": {
    en: "website-redesign",
    pt: "renovar-site-antigo",
    es: "renovar-web-antigua",
    fr: "refonte-de-site-web",
    de: "website-relaunch",
  },
  "legal:privacy": {
    en: "privacy",
    pt: "privacidade",
    es: "privacidad",
    fr: "confidentialite",
    de: "datenschutz",
  },
  "legal:terms": {
    en: "terms",
    pt: "termos",
    es: "terminos",
    fr: "conditions",
    de: "nutzungsbedingungen",
  },
};

/** Map a page key to its legal-page kind when applicable. */
export type LegalKey = "privacy" | "terms";
export function legalKeyOf(key: PageKey): LegalKey | null {
  if (key === "legal:privacy") return "privacy";
  if (key === "legal:terms") return "terms";
  return null;
}

export const ALL_PAGE_KEYS = Object.keys(SLUGS) as PageKey[];

/** All page keys except the home page (i.e. everything served by `[slug]`). */
export const SLUG_PAGE_KEYS = ALL_PAGE_KEYS.filter((k) => k !== "home");

/** Build the canonical path for a page key in a given locale, e.g. `/pt/precos`. */
export function localePath(locale: Locale, key: PageKey): string {
  const slug = SLUGS[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/**
 * Path to the localized onboarding wizard, e.g. `/pt/comecar`. The wizard keeps
 * the same `comecar` slug across locales (it is `noindex`, so a translated slug
 * would add no SEO value); the locale prefix is what selects the language.
 */
export function onboardingPath(locale: Locale): string {
  return `/${locale}/comecar`;
}

/** The four localized authentication pages, served under `/{locale}/auth/*`. */
export type AuthPage =
  | "login"
  | "register"
  | "forgot-password"
  | "reset-password";

/**
 * Path to a localized authentication page, e.g. `/pt/auth/login`. Auth pages
 * keep the same English slugs across locales (they are `noindex`, so translated
 * slugs would add no SEO value); the locale prefix selects the language.
 */
export function authPath(locale: Locale, page: AuthPage): string {
  return `/${locale}/auth/${page}`;
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
