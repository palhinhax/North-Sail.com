import type { Locale } from "@/lib/i18n/config";
import type { PlanCode } from "./types";

export interface PlanContent {
  code: PlanCode;
  /** Entry ("from") price in euros per month. */
  priceFrom: number;
  name: string;
  tagline: string;
  features: string[];
  bestFor: string;
  highlighted?: boolean;
}

export const PLAN_ORDER: PlanCode[] = [
  "PRESENCA",
  "MINI_APP",
  "MINI_APP_PLUS",
  "BUSINESS_LOCAL",
  "PRO_GESTAO",
];

export const PLAN_PRICES: Record<PlanCode, number> = {
  PRESENCA: 5,
  MINI_APP: 15,
  MINI_APP_PLUS: 25,
  BUSINESS_LOCAL: 39,
  PRO_GESTAO: 69,
};

type PlanCopy = Omit<PlanContent, "code" | "priceFrom">;

const PLAN_COPY: Record<Locale, Record<PlanCode, PlanCopy>> = {
  en: {
    PRESENCA: {
      name: "Presence",
      tagline: "A clean one-page website so customers can find you.",
      features: [
        "Professional website page",
        "Custom domain",
        "Hosting & SSL",
        "WhatsApp button & Google Maps",
        "Complete contact information",
        "Technical maintenance",
      ],
      bestFor: "Businesses that need a polished online presence.",
    },
    MINI_APP: {
      name: "Essential App",
      tagline: "A website plus one business-specific core feature.",
      features: [
        "Everything in Presence",
        "One core feature: reservations, bookings, quote or appointment requests, schedules",
        "Domain, hosting, SSL & maintenance included",
        "Mobile-first, fast-loading pages",
      ],
      bestFor: "Restaurants, hairdressers, hotels, gyms and local services.",
      highlighted: true,
    },
    MINI_APP_PLUS: {
      name: "Advanced App",
      tagline: "More pages, a better dashboard and automations.",
      features: [
        "Everything in Essential App",
        "More pages",
        "Enhanced client/admin dashboard",
        "Workflow automations",
        "More customization",
        "One monthly update included",
      ],
      bestFor: "Businesses with more regular activity.",
    },
    BUSINESS_LOCAL: {
      name: "Business Local",
      tagline: "More complete management for higher volume.",
      features: [
        "Everything in Advanced App",
        "Multiple pages",
        "More advanced booking/request flows",
        "Multiple users",
        "Export & detailed reports",
      ],
      bestFor: "Hotels, gyms, restaurants and clinics with more volume.",
    },
    PRO_GESTAO: {
      name: "Pro Management",
      tagline: "Advanced workflows, integrations and dashboards.",
      features: [
        "Everything in Business Local",
        "Advanced workflows",
        "External integrations",
        "Dashboards & permissions",
        "Priority support",
      ],
      bestFor: "Businesses that need more than a one-page website.",
    },
  },
  pt: {
    PRESENCA: {
      name: "Presença",
      tagline: "Um site de uma página para os clientes o encontrarem.",
      features: [
        "Página de site profissional",
        "Domínio próprio",
        "Alojamento e SSL",
        "Botão WhatsApp e Google Maps",
        "Informações de contacto completas",
        "Manutenção técnica",
      ],
      bestFor: "Negócios que precisam de uma presença online cuidada.",
    },
    MINI_APP: {
      name: "App Essencial",
      tagline: "Um site mais uma funcionalidade essencial do negócio.",
      features: [
        "Tudo do plano Presença",
        "Uma funcionalidade essencial: reservas, marcações, pedidos de orçamento ou de marcação, horários",
        "Domínio, alojamento, SSL e manutenção incluídos",
        "Páginas rápidas e mobile-first",
      ],
      bestFor:
        "Restaurantes, cabeleireiros, hotéis, ginásios e serviços locais.",
      highlighted: true,
    },
    MINI_APP_PLUS: {
      name: "App Avançada",
      tagline: "Mais páginas, melhor painel e automações.",
      features: [
        "Tudo do plano App Essencial",
        "Mais páginas",
        "Painel de cliente/admin melhorado",
        "Automações de fluxo",
        "Mais personalização",
        "Uma atualização mensal incluída",
      ],
      bestFor: "Negócios com mais atividade regular.",
    },
    BUSINESS_LOCAL: {
      name: "Business Local",
      tagline: "Gestão mais completa para maior volume.",
      features: [
        "Tudo do plano App Avançada",
        "Múltiplas páginas",
        "Fluxos de reserva/pedido mais avançados",
        "Vários utilizadores",
        "Exportação e relatórios detalhados",
      ],
      bestFor: "Hotéis, ginásios, restaurantes e clínicas com mais volume.",
    },
    PRO_GESTAO: {
      name: "Pro Gestão",
      tagline: "Fluxos avançados, integrações e dashboards.",
      features: [
        "Tudo do plano Business Local",
        "Fluxos de trabalho avançados",
        "Integrações externas",
        "Dashboards e permissões",
        "Suporte prioritário",
      ],
      bestFor:
        "Negócios que precisam de mais do que uma presença de uma página.",
    },
  },
  es: {
    PRESENCA: {
      name: "Presencia",
      tagline: "Una web de una página para que te encuentren.",
      features: [
        "Página web profesional",
        "Dominio propio",
        "Alojamiento y SSL",
        "Botón de WhatsApp y Google Maps",
        "Información de contacto completa",
        "Mantenimiento técnico",
      ],
      bestFor: "Negocios que necesitan una presencia online cuidada.",
    },
    MINI_APP: {
      name: "App Esencial",
      tagline: "Una web más una función esencial del negocio.",
      features: [
        "Todo lo del plan Presencia",
        "Una función esencial: reservas, citas, solicitudes de presupuesto o cita, horarios",
        "Dominio, alojamiento, SSL y mantenimiento incluidos",
        "Páginas rápidas y mobile-first",
      ],
      bestFor:
        "Restaurantes, peluquerías, hoteles, gimnasios y servicios locales.",
      highlighted: true,
    },
    MINI_APP_PLUS: {
      name: "App Avanzada",
      tagline: "Más páginas, mejor panel y automatizaciones.",
      features: [
        "Todo lo del plan App Esencial",
        "Más páginas",
        "Panel de cliente/admin mejorado",
        "Automatizaciones de flujo",
        "Más personalización",
        "Una actualización mensual incluida",
      ],
      bestFor: "Negocios con más actividad habitual.",
    },
    BUSINESS_LOCAL: {
      name: "Business Local",
      tagline: "Gestión más completa para mayor volumen.",
      features: [
        "Todo lo del plan App Avanzada",
        "Múltiples páginas",
        "Flujos de reserva/solicitud más avanzados",
        "Varios usuarios",
        "Exportación e informes detallados",
      ],
      bestFor: "Hoteles, gimnasios, restaurantes y clínicas con más volumen.",
    },
    PRO_GESTAO: {
      name: "Pro Gestión",
      tagline: "Flujos avanzados, integraciones y paneles.",
      features: [
        "Todo lo del plan Business Local",
        "Flujos de trabajo avanzados",
        "Integraciones externas",
        "Paneles y permisos",
        "Soporte prioritario",
      ],
      bestFor: "Negocios que necesitan más que una presencia de una página.",
    },
  },
  fr: {
    PRESENCA: {
      name: "Présence",
      tagline: "Un site d'une page pour que vos clients vous trouvent.",
      features: [
        "Page de site professionnelle",
        "Nom de domaine",
        "Hébergement et SSL",
        "Bouton WhatsApp et Google Maps",
        "Coordonnées complètes",
        "Maintenance technique",
      ],
      bestFor: "Entreprises qui ont besoin d'une présence en ligne soignée.",
    },
    MINI_APP: {
      name: "App Essentielle",
      tagline: "Un site plus une fonctionnalité métier essentielle.",
      features: [
        "Tout le plan Présence",
        "Une fonctionnalité clé : réservations, prises de rendez-vous, demandes de devis, horaires",
        "Domaine, hébergement, SSL et maintenance inclus",
        "Pages rapides et mobile-first",
      ],
      bestFor:
        "Restaurants, coiffeurs, hôtels, salles de sport et services locaux.",
      highlighted: true,
    },
    MINI_APP_PLUS: {
      name: "App Avancée",
      tagline:
        "Plus de pages, un meilleur tableau de bord et des automatisations.",
      features: [
        "Tout le plan App Essentielle",
        "Plus de pages",
        "Tableau de bord client/admin amélioré",
        "Automatisations de flux",
        "Plus de personnalisation",
        "Une mise à jour mensuelle incluse",
      ],
      bestFor: "Entreprises avec une activité plus régulière.",
    },
    BUSINESS_LOCAL: {
      name: "Business Local",
      tagline: "Une gestion plus complète pour plus de volume.",
      features: [
        "Tout le plan App Avancée",
        "Plusieurs pages",
        "Flux de réservation/demande plus avancés",
        "Plusieurs utilisateurs",
        "Export et rapports détaillés",
      ],
      bestFor:
        "Hôtels, salles de sport, restaurants et cliniques à fort volume.",
    },
    PRO_GESTAO: {
      name: "Pro Gestion",
      tagline: "Flux avancés, intégrations et tableaux de bord.",
      features: [
        "Tout le plan Business Local",
        "Flux de travail avancés",
        "Intégrations externes",
        "Tableaux de bord et permissions",
        "Support prioritaire",
      ],
      bestFor: "Entreprises qui ont besoin de plus qu'un site d'une page.",
    },
  },
  de: {
    PRESENCA: {
      name: "Präsenz",
      tagline: "Eine schlichte Ein-Seiten-Website, damit Kunden Sie finden.",
      features: [
        "Professionelle Website-Seite",
        "Eigene Domain",
        "Hosting und SSL",
        "WhatsApp-Button und Google Maps",
        "Vollständige Kontaktangaben",
        "Technische Wartung",
      ],
      bestFor: "Unternehmen, die eine gepflegte Online-Präsenz brauchen.",
    },
    MINI_APP: {
      name: "Essential App",
      tagline: "Eine Website plus eine zentrale Geschäftsfunktion.",
      features: [
        "Alles aus dem Präsenz-Tarif",
        "Eine Kernfunktion: Reservierungen, Termine, Angebots- oder Terminanfragen, Zeitpläne",
        "Domain, Hosting, SSL und Wartung inklusive",
        "Schnelle, Mobile-First-Seiten",
      ],
      bestFor:
        "Restaurants, Friseure, Hotels, Fitnessstudios und lokale Dienstleister.",
      highlighted: true,
    },
    MINI_APP_PLUS: {
      name: "Advanced App",
      tagline: "Mehr Seiten, besseres Dashboard und Automatisierungen.",
      features: [
        "Alles aus dem Essential-App-Tarif",
        "Mehr Seiten",
        "Verbessertes Kunden-/Admin-Dashboard",
        "Workflow-Automatisierungen",
        "Mehr Anpassung",
        "Ein monatliches Update inklusive",
      ],
      bestFor: "Unternehmen mit regelmäßigerer Aktivität.",
    },
    BUSINESS_LOCAL: {
      name: "Business Local",
      tagline: "Umfassendere Verwaltung für mehr Volumen.",
      features: [
        "Alles aus dem Advanced-App-Tarif",
        "Mehrere Seiten",
        "Fortgeschrittenere Buchungs-/Anfrageabläufe",
        "Mehrere Benutzer",
        "Export und detaillierte Berichte",
      ],
      bestFor:
        "Hotels, Fitnessstudios, Restaurants und Kliniken mit mehr Volumen.",
    },
    PRO_GESTAO: {
      name: "Pro Management",
      tagline: "Fortgeschrittene Abläufe, Integrationen und Dashboards.",
      features: [
        "Alles aus dem Business-Local-Tarif",
        "Fortgeschrittene Workflows",
        "Externe Integrationen",
        "Dashboards und Berechtigungen",
        "Priorisierter Support",
      ],
      bestFor: "Unternehmen, die mehr als eine einseitige Website brauchen.",
    },
  },
};

export function getPlans(locale: Locale): PlanContent[] {
  return PLAN_ORDER.map((code) => {
    const copy = PLAN_COPY[locale][code];
    return {
      code,
      priceFrom: PLAN_PRICES[code],
      highlighted: copy.highlighted,
      ...copy,
    };
  });
}

/** Plan display name for a given locale + code (used by templates & schema). */
export function planName(locale: Locale, code: PlanCode): string {
  return PLAN_COPY[locale][code].name;
}

/** Localized extras / add-ons list. */
export const EXTRAS: Record<Locale, string[]> = {
  en: [
    "Professional email",
    "Extra language",
    "Extra page",
    "SMS reminders",
    "WhatsApp automation",
    "Online payments",
    "Booking deposit",
    "Advanced forms",
    "Blog / news",
    "Advanced gallery",
    "External integrations",
    "Full ecommerce",
    "Custom development",
  ],
  pt: [
    "Email profissional",
    "Idioma extra",
    "Página extra",
    "Lembretes por SMS",
    "Automação de WhatsApp",
    "Pagamentos online",
    "Sinal de reserva",
    "Formulários avançados",
    "Blog / notícias",
    "Galeria avançada",
    "Integrações externas",
    "Ecommerce completo",
    "Desenvolvimento à medida",
  ],
  es: [
    "Email profesional",
    "Idioma extra",
    "Página extra",
    "Recordatorios por SMS",
    "Automatización de WhatsApp",
    "Pagos online",
    "Depósito de reserva",
    "Formularios avanzados",
    "Blog / noticias",
    "Galería avanzada",
    "Integraciones externas",
    "Ecommerce completo",
    "Desarrollo a medida",
  ],
  fr: [
    "E-mail professionnel",
    "Langue supplémentaire",
    "Page supplémentaire",
    "Rappels par SMS",
    "Automatisation WhatsApp",
    "Paiements en ligne",
    "Acompte de réservation",
    "Formulaires avancés",
    "Blog / actualités",
    "Galerie avancée",
    "Intégrations externes",
    "E-commerce complet",
    "Développement sur mesure",
  ],
  de: [
    "Professionelle E-Mail",
    "Zusätzliche Sprache",
    "Zusätzliche Seite",
    "SMS-Erinnerungen",
    "WhatsApp-Automatisierung",
    "Online-Zahlungen",
    "Reservierungsanzahlung",
    "Erweiterte Formulare",
    "Blog / News",
    "Erweiterte Galerie",
    "Externe Integrationen",
    "Vollständiger Online-Shop",
    "Individuelle Entwicklung",
  ],
};

/** Localized pricing-page meta + intro copy. */
export const PRICING_META: Record<
  Locale,
  { metaTitle: string; metaDescription: string; aiSummary: string }
> = {
  en: {
    metaTitle: "Pricing — professional websites & web apps from €5/month",
    metaDescription:
      "NorthSail pricing: Presence from €5/mo, Essential App from €15/mo, Advanced App from €25/mo, Business Local from €39/mo and Pro Management from €59/mo. Domain, hosting, SSL and maintenance included.",
    aiSummary:
      "NorthSail offers five subscription plans for small-business websites and web apps: Presence (from €5/month, a professional online presence), Essential App (from €15/month, website plus one core feature like reservations or appointments), Advanced App (from €25/month), Business Local (from €39/month) and Pro Management (from €59/month). Every plan includes a custom domain, hosting, SSL and technical maintenance. Low prices come with clear plan limits; advanced integrations and payments belong to higher plans.",
  },
  pt: {
    metaTitle:
      "Preços — sites e web apps profissionais desde 5€/mês | NorthSail",
    metaDescription:
      "Preços NorthSail: Presença desde 5€/mês, App Essencial desde 15€/mês, App Avançada desde 25€/mês, Business Local desde 39€/mês e Pro Gestão desde 69€/mês. Domínio, alojamento, SSL e manutenção incluídos.",
    aiSummary:
      "A NorthSail oferece cinco planos de subscrição para sites e web apps de pequenas empresas: Presença (desde 5€/mês, uma presença online profissional), App Essencial (desde 15€/mês, site mais uma funcionalidade essencial como reservas ou marcações), App Avançada (desde 25€/mês), Business Local (desde 39€/mês) e Pro Gestão (desde 69€/mês). Todos os planos incluem domínio próprio, alojamento, SSL e manutenção técnica. Preços baixos vêm com limites claros; integrações avançadas e pagamentos fazem parte de planos superiores.",
  },
  es: {
    metaTitle:
      "Precios — webs y web apps profesionales desde 5€/mes | NorthSail",
    metaDescription:
      "Precios NorthSail: Presencia desde 5€/mes, App Esencial desde 15€/mes, App Avanzada desde 25€/mes, Business Local desde 39€/mes y Pro Gestión desde 69€/mes. Dominio, alojamiento, SSL y mantenimiento incluidos.",
    aiSummary:
      "NorthSail ofrece cinco planes de suscripción para webs y web apps de pequeños negocios: Presencia (desde 5€/mes, una presencia online profesional), App Esencial (desde 15€/mes, web más una función esencial como reservas o citas), App Avanzada (desde 25€/mes), Business Local (desde 39€/mes) y Pro Gestión (desde 69€/mes). Todos los planes incluyen dominio propio, alojamiento, SSL y mantenimiento técnico. Los precios bajos vienen con límites claros; las integraciones avanzadas y los pagos forman parte de planes superiores.",
  },
  fr: {
    metaTitle:
      "Tarifs — sites et web apps professionnels à partir de 5€/mois | NorthSail",
    metaDescription:
      "Tarifs NorthSail : Présence dès 5€/mois, App Essentielle dès 15€/mois, App Avancée dès 25€/mois, Business Local dès 39€/mois et Pro Gestion dès 69€/mois. Domaine, hébergement, SSL et maintenance inclus.",
    aiSummary:
      "NorthSail propose cinq abonnements pour les sites et web apps des petites entreprises : Présence (dès 5€/mois, une présence en ligne professionnelle), App Essentielle (dès 15€/mois, un site plus une fonctionnalité clé comme les réservations ou les rendez-vous), App Avancée (dès 25€/mois), Business Local (dès 39€/mois) et Pro Gestion (dès 69€/mois). Chaque plan inclut un nom de domaine, l'hébergement, le SSL et la maintenance technique. Des prix bas s'accompagnent de limites claires ; les intégrations avancées et les paiements font partie des offres supérieures.",
  },
  de: {
    metaTitle:
      "Preise — professionelle Websites und Web-Apps ab 5€/Monat | NorthSail",
    metaDescription:
      "NorthSail-Preise: Präsenz ab 5€/Monat, Essential App ab 15€/Monat, Advanced App ab 25€/Monat, Business Local ab 39€/Monat und Pro Management ab 69€/Monat. Domain, Hosting, SSL und Wartung inklusive.",
    aiSummary:
      "NorthSail bietet fünf Abo-Tarife für Websites und Web-Apps kleiner Unternehmen: Präsenz (ab 5€/Monat, eine professionelle Online-Präsenz), Essential App (ab 15€/Monat, Website plus eine Kernfunktion wie Reservierungen oder Termine), Advanced App (ab 25€/Monat), Business Local (ab 39€/Monat) und Pro Management (ab 69€/Monat). Jeder Tarif enthält eine eigene Domain, Hosting, SSL und technische Wartung. Sehr niedrige Preise bedeuten klare Grenzen; erweiterte Integrationen und Zahlungen sind nicht Teil des Einstiegstarifs.",
  },
};
