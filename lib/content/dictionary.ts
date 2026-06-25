import type { Locale } from "@/lib/i18n/config";
import type { PageKey } from "@/lib/i18n/routes";
import { TRIAL_COPY_PT } from "./trial";

/** UI chrome strings (navigation, footer, shared labels) per locale. */
export interface Dictionary {
  nav: { label: string; target: PageKey }[];
  navStart: string;
  navLogin: string;
  navDashboard: string;
  footerTagline: string;
  footerProduct: string;
  footerBookings: string;
  footerCompany: string;
  footerLegal: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
  // shared section labels
  whoFor: string;
  whatProblem: string;
  ourSolution: string;
  whatsIncluded: string;
  notIncluded: string;
  minimumPlan: string;
  upgradeOptions: string;
  faqTitle: string;
  aiSummaryLabel: string;
  relatedIndustries: string;
  startingFrom: string; // e.g. "from"
  perMonth: string; // "/month"
  // pricing
  pricingTitle: string;
  pricingSubtitle: string;
  pricingExtrasTitle: string;
  pricingExtrasNote: string;
  bestFor: string;
  choosePlan: string;
  // CTAs
  ctaStart: string;
  ctaSeePricing: string;
  ctaGetRecommendation: string;
  ctaContact: string;
  // free-trial offer (canonical phrasing, see lib/content/trial.ts)
  trialBadge: string; // short pill, e.g. "1 mês grátis · sem cartão"
  trialReassurance: string; // muted line under CTAs, e.g. "Sem cartão, sem compromisso."
  trialCtaStart: string; // primary CTA, e.g. "Começar 1 mês grátis"
  planRecommended: string; // top badge on the highlighted plan card, e.g. "Recomendado"
  // "see a real example" section
  exampleSitesTitle: string;
  exampleSitesSubtitle: string;
  exampleSitesBadge: string; // tag shown on each example card
  exampleSitesCta: string; // per-card link label
  // lead form
  leadTitle: string;
  leadIntro: string;
  leadBusinessName: string;
  leadBusinessType: string;
  leadCountry: string;
  leadLanguage: string;
  leadCurrentSite: string;
  leadNeed: string;
  leadEmail: string;
  leadPhone: string;
  leadOptional: string;
  leadSubmit: string;
  leadSuccess: string;
  leadError: string;
  leadOther: string;
  breadcrumbHome: string;
}

const en: Dictionary = {
  nav: [
    { label: "Pricing", target: "pricing" },
    { label: "Restaurants", target: "industry:restaurants" },
    { label: "Hotels", target: "industry:hotels" },
    { label: "AI summary", target: "ai-summary" },
  ],
  navStart: "Get started",
  navLogin: "Log in",
  navDashboard: "Dashboard",
  footerTagline: "Your business website, without the technical headaches.",
  footerProduct: "Product",
  footerBookings: "Bookings",
  footerCompany: "Company",
  footerLegal: "Legal",
  footerRights: "All rights reserved.",
  footerPrivacy: "Privacy",
  footerTerms: "Terms",
  whoFor: "Who it's for",
  whatProblem: "The problem",
  ourSolution: "What NorthSail does",
  whatsIncluded: "What's included",
  notIncluded: "Not included in the base plan",
  minimumPlan: "Minimum recommended plan",
  upgradeOptions: "Upgrade options",
  faqTitle: "Frequently asked questions",
  aiSummaryLabel: "In short",
  relatedIndustries: "Other business types",
  startingFrom: "from",
  perMonth: "/month",
  pricingTitle: "Clear, transparent pricing",
  pricingSubtitle:
    "Affordable monthly plans. Very low prices mean clear plan limits — advanced integrations are not included in the entry-level plan.",
  pricingExtrasTitle: "Extras and add-ons",
  pricingExtrasNote:
    "Add only what you need. Extras are billed on top of your base plan.",
  bestFor: "Best for",
  choosePlan: "Choose plan",
  ctaStart: "Start your website",
  ctaSeePricing: "See pricing",
  ctaGetRecommendation: "Ask for a recommendation",
  ctaContact: "Contact NorthSail",
  trialBadge: "1 month free · no card",
  trialReassurance: "No card, no commitment.",
  trialCtaStart: "Start 1 month free",
  planRecommended: "Recommended",
  exampleSitesTitle: "See a real example",
  exampleSitesSubtitle:
    "Real websites and web apps, from €15/month. (Illustrative examples.)",
  exampleSitesBadge: "Example",
  exampleSitesCta: "View example",
  leadTitle: "Tell us about your business",
  leadIntro:
    "Send us a few details and we'll recommend the minimum plan that fits — no obligation.",
  leadBusinessName: "Business name",
  leadBusinessType: "Business type",
  leadCountry: "Country",
  leadLanguage: "Preferred language",
  leadCurrentSite: "Current website",
  leadNeed: "What do you need?",
  leadEmail: "Email",
  leadPhone: "WhatsApp / phone",
  leadOptional: "optional",
  leadSubmit: "Send request",
  leadSuccess: "Thank you! We'll get back to you shortly.",
  leadError: "Something went wrong. Please try again.",
  leadOther: "Other",
  breadcrumbHome: "Home",
};

const pt: Dictionary = {
  nav: [
    { label: "Preços", target: "pricing" },
    { label: "Restaurantes", target: "industry:restaurants" },
    { label: "Hotéis", target: "industry:hotels" },
    { label: "Resumo IA", target: "ai-summary" },
  ],
  navStart: "Começar",
  navLogin: "Entrar",
  navDashboard: "Painel",
  footerTagline: "O site do seu negócio, sem complicações técnicas.",
  footerProduct: "Produto",
  footerBookings: "Reservas",
  footerCompany: "Empresa",
  footerLegal: "Legal",
  footerRights: "Todos os direitos reservados.",
  footerPrivacy: "Privacidade",
  footerTerms: "Termos",
  whoFor: "Para quem é",
  whatProblem: "O problema",
  ourSolution: "O que a NorthSail faz",
  whatsIncluded: "O que está incluído",
  notIncluded: "Não incluído no plano base",
  minimumPlan: "Plano mínimo recomendado",
  upgradeOptions: "Opções de upgrade",
  faqTitle: "Perguntas frequentes",
  aiSummaryLabel: "Em resumo",
  relatedIndustries: "Outros tipos de negócio",
  startingFrom: "desde",
  perMonth: "/mês",
  pricingTitle: "Preços claros e transparentes",
  pricingSubtitle:
    "Planos mensais acessíveis. Preços muito baixos implicam limites claros — as integrações avançadas não estão incluídas no plano inicial.",
  pricingExtrasTitle: "Extras e complementos",
  pricingExtrasNote:
    "Adicione apenas o que precisa. Os extras são cobrados além do plano base.",
  bestFor: "Ideal para",
  choosePlan: "Escolher plano",
  ctaStart: "Criar o meu site",
  ctaSeePricing: "Ver preços",
  ctaGetRecommendation: "Pedir uma recomendação",
  ctaContact: "Contactar a NorthSail",
  trialBadge: TRIAL_COPY_PT.badge,
  trialReassurance: TRIAL_COPY_PT.reassurance,
  trialCtaStart: TRIAL_COPY_PT.ctaStart,
  planRecommended: "Recomendado",
  exampleSitesTitle: "Veja um exemplo real",
  exampleSitesSubtitle:
    "Sites e web apps reais, desde 15€/mês. (Exemplos ilustrativos.)",
  exampleSitesBadge: "Exemplo",
  exampleSitesCta: "Ver exemplo",
  leadTitle: "Fale-nos do seu negócio",
  leadIntro:
    "Envie alguns dados e recomendamos o plano mínimo que se adequa — sem compromisso.",
  leadBusinessName: "Nome do negócio",
  leadBusinessType: "Tipo de negócio",
  leadCountry: "País",
  leadLanguage: "Idioma preferido",
  leadCurrentSite: "Site atual",
  leadNeed: "O que precisa?",
  leadEmail: "Email",
  leadPhone: "WhatsApp / telefone",
  leadOptional: "opcional",
  leadSubmit: "Enviar pedido",
  leadSuccess: "Obrigado! Entraremos em contacto em breve.",
  leadError: "Algo correu mal. Tenta novamente.",
  leadOther: "Outro",
  breadcrumbHome: "Início",
};

const es: Dictionary = {
  nav: [
    { label: "Precios", target: "pricing" },
    { label: "Restaurantes", target: "industry:restaurants" },
    { label: "Hoteles", target: "industry:hotels" },
    { label: "Resumen IA", target: "ai-summary" },
  ],
  navStart: "Empezar",
  navLogin: "Entrar",
  navDashboard: "Panel",
  footerTagline: "La web de tu negocio, sin complicaciones técnicas.",
  footerProduct: "Producto",
  footerBookings: "Reservas",
  footerCompany: "Empresa",
  footerLegal: "Legal",
  footerRights: "Todos los derechos reservados.",
  footerPrivacy: "Privacidad",
  footerTerms: "Términos",
  whoFor: "Para quién es",
  whatProblem: "El problema",
  ourSolution: "Qué hace NorthSail",
  whatsIncluded: "Qué incluye",
  notIncluded: "No incluido en el plan base",
  minimumPlan: "Plan mínimo recomendado",
  upgradeOptions: "Opciones de mejora",
  faqTitle: "Preguntas frecuentes",
  aiSummaryLabel: "En resumen",
  relatedIndustries: "Otros tipos de negocio",
  startingFrom: "desde",
  perMonth: "/mes",
  pricingTitle: "Precios claros y transparentes",
  pricingSubtitle:
    "Planes mensuales asequibles. Los precios muy bajos implican límites claros — las integraciones avanzadas no se incluyen en el plan inicial.",
  pricingExtrasTitle: "Extras y complementos",
  pricingExtrasNote:
    "Añade solo lo que necesites. Los extras se cobran además del plan base.",
  bestFor: "Ideal para",
  choosePlan: "Elegir plan",
  ctaStart: "Crear mi web",
  ctaSeePricing: "Ver precios",
  ctaGetRecommendation: "Pedir una recomendación",
  ctaContact: "Contactar con NorthSail",
  trialBadge: "1 mes gratis · sin tarjeta",
  trialReassurance: "Sin tarjeta, sin compromiso.",
  trialCtaStart: "Empezar 1 mes gratis",
  planRecommended: "Recomendado",
  exampleSitesTitle: "Mira un ejemplo real",
  exampleSitesSubtitle:
    "Webs y web apps reales, desde 15€/mes. (Ejemplos ilustrativos.)",
  exampleSitesBadge: "Ejemplo",
  exampleSitesCta: "Ver ejemplo",
  leadTitle: "Cuéntanos sobre tu negocio",
  leadIntro:
    "Envíanos algunos datos y te recomendaremos el plan mínimo que encaja — sin compromiso.",
  leadBusinessName: "Nombre del negocio",
  leadBusinessType: "Tipo de negocio",
  leadCountry: "País",
  leadLanguage: "Idioma preferido",
  leadCurrentSite: "Web actual",
  leadNeed: "¿Qué necesitas?",
  leadEmail: "Email",
  leadPhone: "WhatsApp / teléfono",
  leadOptional: "opcional",
  leadSubmit: "Enviar solicitud",
  leadSuccess: "¡Gracias! Te responderemos en breve.",
  leadError: "Algo salió mal. Inténtalo de nuevo.",
  leadOther: "Otro",
  breadcrumbHome: "Inicio",
};

const fr: Dictionary = {
  nav: [
    { label: "Tarifs", target: "pricing" },
    { label: "Restaurants", target: "industry:restaurants" },
    { label: "Hôtels", target: "industry:hotels" },
    { label: "Résumé IA", target: "ai-summary" },
  ],
  navStart: "Commencer",
  navLogin: "Connexion",
  navDashboard: "Tableau de bord",
  footerTagline: "Le site de votre entreprise, sans tracas technique.",
  footerProduct: "Produit",
  footerBookings: "Réservations",
  footerCompany: "Entreprise",
  footerLegal: "Légal",
  footerRights: "Tous droits réservés.",
  footerPrivacy: "Confidentialité",
  footerTerms: "Conditions",
  whoFor: "Pour qui",
  whatProblem: "Le problème",
  ourSolution: "Ce que fait NorthSail",
  whatsIncluded: "Ce qui est inclus",
  notIncluded: "Non inclus dans le plan de base",
  minimumPlan: "Plan minimum recommandé",
  upgradeOptions: "Options d'évolution",
  faqTitle: "Questions fréquentes",
  aiSummaryLabel: "En bref",
  relatedIndustries: "Autres types d'entreprise",
  startingFrom: "à partir de",
  perMonth: "/mois",
  pricingTitle: "Des tarifs clairs et transparents",
  pricingSubtitle:
    "Des abonnements mensuels abordables. Des prix très bas impliquent des limites claires — les intégrations avancées ne sont pas incluses dans le plan d'entrée.",
  pricingExtrasTitle: "Options et extras",
  pricingExtrasNote:
    "Ajoutez uniquement ce dont vous avez besoin. Les extras s'ajoutent à votre plan de base.",
  bestFor: "Idéal pour",
  choosePlan: "Choisir ce plan",
  ctaStart: "Créer mon site",
  ctaSeePricing: "Voir les tarifs",
  ctaGetRecommendation: "Demander une recommandation",
  ctaContact: "Contacter NorthSail",
  trialBadge: "1 mois gratuit · sans carte",
  trialReassurance: "Sans carte, sans engagement.",
  trialCtaStart: "Commencer 1 mois gratuit",
  planRecommended: "Recommandé",
  exampleSitesTitle: "Voyez un exemple réel",
  exampleSitesSubtitle:
    "Sites et web apps réels, à partir de 15€/mois. (Exemples illustratifs.)",
  exampleSitesBadge: "Exemple",
  exampleSitesCta: "Voir l'exemple",
  leadTitle: "Parlez-nous de votre entreprise",
  leadIntro:
    "Envoyez-nous quelques informations et nous recommanderons le plan minimum adapté — sans engagement.",
  leadBusinessName: "Nom de l'entreprise",
  leadBusinessType: "Type d'entreprise",
  leadCountry: "Pays",
  leadLanguage: "Langue préférée",
  leadCurrentSite: "Site actuel",
  leadNeed: "De quoi avez-vous besoin ?",
  leadEmail: "E-mail",
  leadPhone: "WhatsApp / téléphone",
  leadOptional: "facultatif",
  leadSubmit: "Envoyer la demande",
  leadSuccess: "Merci ! Nous vous répondrons rapidement.",
  leadError: "Une erreur s'est produite. Veuillez réessayer.",
  leadOther: "Autre",
  breadcrumbHome: "Accueil",
};

const de: Dictionary = {
  nav: [
    { label: "Preise", target: "pricing" },
    { label: "Restaurants", target: "industry:restaurants" },
    { label: "Hotels", target: "industry:hotels" },
    { label: "KI-Zusammenfassung", target: "ai-summary" },
  ],
  navStart: "Loslegen",
  navLogin: "Anmelden",
  navDashboard: "Dashboard",
  footerTagline: "Die Website Ihres Unternehmens, ohne technischen Aufwand.",
  footerProduct: "Produkt",
  footerBookings: "Buchungen",
  footerCompany: "Unternehmen",
  footerLegal: "Rechtliches",
  footerRights: "Alle Rechte vorbehalten.",
  footerPrivacy: "Datenschutz",
  footerTerms: "Nutzungsbedingungen",
  whoFor: "Für wen",
  whatProblem: "Das Problem",
  ourSolution: "Was NorthSail macht",
  whatsIncluded: "Was enthalten ist",
  notIncluded: "Nicht im Basistarif enthalten",
  minimumPlan: "Mindestens empfohlener Tarif",
  upgradeOptions: "Upgrade-Optionen",
  faqTitle: "Häufige Fragen",
  aiSummaryLabel: "Kurz gesagt",
  relatedIndustries: "Weitere Branchen",
  startingFrom: "ab",
  perMonth: "/Monat",
  pricingTitle: "Klare, transparente Preise",
  pricingSubtitle:
    "Bezahlbare Monatstarife. Sehr niedrige Preise bedeuten klare Grenzen — erweiterte Integrationen sind im Einstiegstarif nicht enthalten.",
  pricingExtrasTitle: "Extras und Zusatzoptionen",
  pricingExtrasNote:
    "Fügen Sie nur hinzu, was Sie brauchen. Extras werden zusätzlich zum Basistarif berechnet.",
  bestFor: "Ideal für",
  choosePlan: "Tarif wählen",
  ctaStart: "Website erstellen",
  ctaSeePricing: "Preise ansehen",
  ctaGetRecommendation: "Empfehlung anfragen",
  ctaContact: "NorthSail kontaktieren",
  trialBadge: "1 Monat gratis · ohne Karte",
  trialReassurance: "Ohne Karte, ohne Verpflichtung.",
  trialCtaStart: "1 Monat gratis starten",
  planRecommended: "Empfohlen",
  exampleSitesTitle: "Sehen Sie ein echtes Beispiel",
  exampleSitesSubtitle:
    "Echte Websites und Web-Apps, ab 15€/Monat. (Illustrative Beispiele.)",
  exampleSitesBadge: "Beispiel",
  exampleSitesCta: "Beispiel ansehen",
  leadTitle: "Erzählen Sie uns von Ihrem Unternehmen",
  leadIntro:
    "Senden Sie uns ein paar Angaben und wir empfehlen den passenden Mindesttarif — unverbindlich.",
  leadBusinessName: "Name des Unternehmens",
  leadBusinessType: "Art des Unternehmens",
  leadCountry: "Land",
  leadLanguage: "Bevorzugte Sprache",
  leadCurrentSite: "Aktuelle Website",
  leadNeed: "Was brauchen Sie?",
  leadEmail: "E-Mail",
  leadPhone: "WhatsApp / Telefon",
  leadOptional: "optional",
  leadSubmit: "Anfrage senden",
  leadSuccess: "Danke! Wir melden uns in Kürze.",
  leadError: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
  leadOther: "Andere",
  breadcrumbHome: "Startseite",
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, pt, es, fr, de };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
