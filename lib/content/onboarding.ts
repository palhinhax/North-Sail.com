import { Sector } from "@prisma/client";
import type { Locale } from "@/lib/i18n/config";
import type { ReasonKey } from "@/features/plans/schemas";

/**
 * Localized copy for the `/comecar` onboarding wizard. The wizard is a client
 * component, so every visible string lives here (keyed by locale) instead of
 * being hardcoded in the page. Plan names and feature bullets shown in step 3
 * come from {@link lib/content/plans.ts} (also localized); only the numeric
 * prices come from the live plans API.
 */
export interface OnboardingCopy {
  metaTitle: string;
  /** "Passo {step} de {total}". `{step}` / `{total}` are interpolated. */
  stepBadge: string;
  steps: {
    business: { title: string; subtitle: string };
    needs: { title: string; subtitle: string };
    plan: { title: string };
    account: { title: string; subtitle: string };
  };
  sectors: Record<Sector, string>;
  toggles: {
    needsBookings: string;
    multipleStaff: string;
    weeklySchedule: string;
    multipleLocationsOrRooms: string;
    teamUsers: string;
    payments: string;
    externalIntegrations: string;
  };
  descriptionLabel: string;
  descriptionPlaceholder: string;
  /** Localized recommendation sentence, keyed by reason. */
  reasons: Record<ReasonKey, string>;
  setupLabel: string;
  setupFree: string;
  billingMonthly: string;
  billingAnnual: string;
  perYearLong: string;
  perMonthLong: string;
  perYearShort: string;
  perMonthShort: string;
  quoteNote: string;
  loadingPlan: string;
  trialOnboarding: string;
  asideRecommendedFor: string;
  asideCalculating: string;
  asideNote: string;
  back: string;
  continue: string;
  seePlan: string;
  createAccount: string;
  form: {
    businessName: string;
    businessNamePlaceholder: string;
    phone: string;
    whatsapp: string;
    accountName: string;
    email: string;
    password: string;
  };
  toastCreatedTitle: string;
  toastCreatedDesc: string;
  toastErrorTitle: string;
  toastErrorFallback: string;
}

const en: OnboardingCopy = {
  metaTitle: "Get started — NorthSail",
  stepBadge: "Step {step} of {total}",
  steps: {
    business: {
      title: "What's your business?",
      subtitle: "We tailor the platform to your specific needs.",
    },
    needs: {
      title: "What do you need?",
      subtitle: "Tick everything that applies to your day-to-day.",
    },
    plan: { title: "The plan we recommend" },
    account: {
      title: "Create account",
      subtitle: "Last details to get going.",
    },
  },
  sectors: {
    [Sector.RESTAURANT]: "Restaurant",
    [Sector.HAIR_SALON]: "Hair salon / Barber",
    [Sector.HOTEL]: "Hotel / Lodging",
    [Sector.GYM]: "Gym / Studio",
    [Sector.LOCAL_SERVICES]: "Local services",
    [Sector.SMALL_SHOP]: "Local shop",
    [Sector.CLINIC]: "Clinic",
    [Sector.OTHER]: "Other",
  },
  toggles: {
    needsBookings: "Reservations, bookings, requests or sign-ups",
    multipleStaff: "Several staff, classes or groups",
    weeklySchedule: "Calendar or weekly schedules",
    multipleLocationsOrRooms: "Several rooms, spaces or locations",
    teamUsers: "Team with multiple users",
    payments: "Online payments",
    externalIntegrations:
      "External integrations (Booking, POS, ERP, invoicing…)",
  },
  descriptionLabel: "Describe what you need in 1-2 sentences",
  descriptionPlaceholder:
    "E.g. I run a gym and want an app to manage weekly classes and allow sign-ups.",
  reasons: {
    integrations:
      "External integrations (Booking, POS, PMS, ERP, invoicing, etc.) — we recommend Pro Management as a base. May require a quote.",
    automationPayments:
      "Automations, payments or multiple team users — fits the Pro Management plan.",
    multiLocation:
      "Several spaces/rooms/members — we recommend Business Local with more modules.",
    multiStaff:
      "Several staff or weekly schedules/calendar — Advanced App covers it.",
    bookings:
      "One essential feature (reservations / bookings / requests / classes) — Essential App.",
    presence: "Just an online presence, contacts and WhatsApp.",
  },
  setupLabel: "Setup:",
  setupFree: "free",
  billingMonthly: "Monthly",
  billingAnnual: "Annual",
  perYearLong: "/ year",
  perMonthLong: "/ month",
  perYearShort: "/year",
  perMonthShort: "/month",
  quoteNote:
    "As you asked for external integrations, this price is a baseline — we'll confirm the quote with you.",
  loadingPlan: "Loading plan…",
  trialOnboarding:
    "You start with 1 month free (30 days), no card. You only pay if you decide to continue.",
  asideRecommendedFor: "Recommended for you",
  asideCalculating: "Calculating…",
  asideNote:
    "The recommended plan adjusts automatically to your answers to ensure the best fit.",
  back: "Back",
  continue: "Continue",
  seePlan: "See recommended plan",
  createAccount: "Create account and start",
  form: {
    businessName: "Business name",
    businessNamePlaceholder: "North Wind Gym",
    phone: "Phone",
    whatsapp: "WhatsApp",
    accountName: "Your name",
    email: "Email",
    password: "Password",
  },
  toastCreatedTitle: "Account created",
  toastCreatedDesc: "Welcome to NorthSail! We're handling your request.",
  toastErrorTitle: "Error",
  toastErrorFallback: "Failed to create account",
};

const pt: OnboardingCopy = {
  metaTitle: "Começar — NorthSail",
  stepBadge: "Passo {step} de {total}",
  steps: {
    business: {
      title: "Qual é o seu negócio?",
      subtitle:
        "Personalizamos a plataforma para as suas necessidades específicas.",
    },
    needs: {
      title: "O que precisa?",
      subtitle: "Marque tudo o que se aplica ao seu dia a dia.",
    },
    plan: { title: "O plano que recomendamos" },
    account: {
      title: "Criar conta",
      subtitle: "Últimos detalhes para arrancarmos.",
    },
  },
  sectors: {
    [Sector.RESTAURANT]: "Restaurante",
    [Sector.HAIR_SALON]: "Cabeleireiro / Barbearia",
    [Sector.HOTEL]: "Hotel / Alojamento",
    [Sector.GYM]: "Ginásio / Estúdio",
    [Sector.LOCAL_SERVICES]: "Serviços locais",
    [Sector.SMALL_SHOP]: "Loja local",
    [Sector.CLINIC]: "Clínica",
    [Sector.OTHER]: "Outro",
  },
  toggles: {
    needsBookings: "Reservas, marcações, pedidos ou inscrições",
    multipleStaff: "Vários profissionais, aulas ou turmas",
    weeklySchedule: "Calendário ou horários semanais",
    multipleLocationsOrRooms: "Vários quartos, salas ou espaços",
    teamUsers: "Equipa com vários utilizadores",
    payments: "Pagamentos online",
    externalIntegrations:
      "Integrações externas (Booking, POS, ERP, faturação…)",
  },
  descriptionLabel: "Descreva o que pretende em 1-2 frases",
  descriptionPlaceholder:
    "Ex: tenho um ginásio e quero uma app para gerir as aulas semanais e permitir inscrições.",
  reasons: {
    integrations:
      "Integrações externas (Booking, POS, PMS, ERP, faturação, etc.) — recomendamos PRO Gestão como base. Pode exigir orçamento.",
    automationPayments:
      "Automações, pagamentos ou múltiplos utilizadores na equipa — encaixa no plano PRO Gestão.",
    multiLocation:
      "Vários espaços/salas/membros — recomendamos Business Local com mais módulos.",
    multiStaff:
      "Vários profissionais ou horários semanais/calendário — App Avançada cobre.",
    bookings:
      "Uma funcionalidade essencial (reservas / marcações / pedidos / aulas) — App Essencial.",
    presence: "Só presença online, contactos e WhatsApp.",
  },
  setupLabel: "Setup:",
  setupFree: "grátis",
  billingMonthly: "Mensal",
  billingAnnual: "Anual",
  perYearLong: "/ ano",
  perMonthLong: "/ mês",
  perYearShort: "/ano",
  perMonthShort: "/mês",
  quoteNote:
    "Como pediu integrações externas, este preço é uma base — confirmamos o orçamento consigo.",
  loadingPlan: "A carregar plano…",
  trialOnboarding:
    "Começas com 1 mês grátis (30 dias), sem cartão. Só pagas se decidires continuar.",
  asideRecommendedFor: "Recomendado para si",
  asideCalculating: "A calcular…",
  asideNote:
    "O plano recomendado ajusta-se automaticamente às suas respostas para garantir a melhor solução.",
  back: "Voltar",
  continue: "Continuar",
  seePlan: "Ver plano recomendado",
  createAccount: "Criar conta e começar",
  form: {
    businessName: "Nome do negócio",
    businessNamePlaceholder: "Ginásio Vento Norte",
    phone: "Telefone",
    whatsapp: "WhatsApp",
    accountName: "O seu nome",
    email: "Email",
    password: "Password",
  },
  toastCreatedTitle: "Conta criada",
  toastCreatedDesc: "Bem-vindo à NorthSail! Estamos a tratar do teu pedido.",
  toastErrorTitle: "Erro",
  toastErrorFallback: "Falha ao criar conta",
};

const es: OnboardingCopy = {
  metaTitle: "Empezar — NorthSail",
  stepBadge: "Paso {step} de {total}",
  steps: {
    business: {
      title: "¿Cuál es tu negocio?",
      subtitle: "Personalizamos la plataforma para tus necesidades concretas.",
    },
    needs: {
      title: "¿Qué necesitas?",
      subtitle: "Marca todo lo que se aplique a tu día a día.",
    },
    plan: { title: "El plan que recomendamos" },
    account: {
      title: "Crear cuenta",
      subtitle: "Últimos detalles para empezar.",
    },
  },
  sectors: {
    [Sector.RESTAURANT]: "Restaurante",
    [Sector.HAIR_SALON]: "Peluquería / Barbería",
    [Sector.HOTEL]: "Hotel / Alojamiento",
    [Sector.GYM]: "Gimnasio / Estudio",
    [Sector.LOCAL_SERVICES]: "Servicios locales",
    [Sector.SMALL_SHOP]: "Tienda local",
    [Sector.CLINIC]: "Clínica",
    [Sector.OTHER]: "Otro",
  },
  toggles: {
    needsBookings: "Reservas, citas, solicitudes o inscripciones",
    multipleStaff: "Varios profesionales, clases o grupos",
    weeklySchedule: "Calendario u horarios semanales",
    multipleLocationsOrRooms: "Varias habitaciones, salas o espacios",
    teamUsers: "Equipo con varios usuarios",
    payments: "Pagos online",
    externalIntegrations:
      "Integraciones externas (Booking, POS, ERP, facturación…)",
  },
  descriptionLabel: "Describe lo que necesitas en 1-2 frases",
  descriptionPlaceholder:
    "Ej: tengo un gimnasio y quiero una app para gestionar las clases semanales y permitir inscripciones.",
  reasons: {
    integrations:
      "Integraciones externas (Booking, POS, PMS, ERP, facturación, etc.) — recomendamos Pro Gestión como base. Puede requerir presupuesto.",
    automationPayments:
      "Automatizaciones, pagos o varios usuarios del equipo — encaja en el plan Pro Gestión.",
    multiLocation:
      "Varios espacios/salas/miembros — recomendamos Business Local con más módulos.",
    multiStaff:
      "Varios profesionales u horarios semanales/calendario — App Avanzada lo cubre.",
    bookings:
      "Una función esencial (reservas / citas / solicitudes / clases) — App Esencial.",
    presence: "Solo presencia online, contactos y WhatsApp.",
  },
  setupLabel: "Setup:",
  setupFree: "gratis",
  billingMonthly: "Mensual",
  billingAnnual: "Anual",
  perYearLong: "/ año",
  perMonthLong: "/ mes",
  perYearShort: "/año",
  perMonthShort: "/mes",
  quoteNote:
    "Como pediste integraciones externas, este precio es una base — confirmamos el presupuesto contigo.",
  loadingPlan: "Cargando plan…",
  trialOnboarding:
    "Empiezas con 1 mes gratis (30 días), sin tarjeta. Solo pagas si decides continuar.",
  asideRecommendedFor: "Recomendado para ti",
  asideCalculating: "Calculando…",
  asideNote:
    "El plan recomendado se ajusta automáticamente a tus respuestas para garantizar la mejor opción.",
  back: "Volver",
  continue: "Continuar",
  seePlan: "Ver plan recomendado",
  createAccount: "Crear cuenta y empezar",
  form: {
    businessName: "Nombre del negocio",
    businessNamePlaceholder: "Gimnasio Viento Norte",
    phone: "Teléfono",
    whatsapp: "WhatsApp",
    accountName: "Tu nombre",
    email: "Email",
    password: "Contraseña",
  },
  toastCreatedTitle: "Cuenta creada",
  toastCreatedDesc:
    "¡Bienvenido a NorthSail! Estamos gestionando tu solicitud.",
  toastErrorTitle: "Error",
  toastErrorFallback: "No se pudo crear la cuenta",
};

const fr: OnboardingCopy = {
  metaTitle: "Commencer — NorthSail",
  stepBadge: "Étape {step} sur {total}",
  steps: {
    business: {
      title: "Quelle est votre activité ?",
      subtitle: "Nous adaptons la plateforme à vos besoins spécifiques.",
    },
    needs: {
      title: "De quoi avez-vous besoin ?",
      subtitle: "Cochez tout ce qui correspond à votre quotidien.",
    },
    plan: { title: "Le plan que nous recommandons" },
    account: {
      title: "Créer un compte",
      subtitle: "Derniers détails pour démarrer.",
    },
  },
  sectors: {
    [Sector.RESTAURANT]: "Restaurant",
    [Sector.HAIR_SALON]: "Coiffeur / Barbier",
    [Sector.HOTEL]: "Hôtel / Hébergement",
    [Sector.GYM]: "Salle de sport / Studio",
    [Sector.LOCAL_SERVICES]: "Services locaux",
    [Sector.SMALL_SHOP]: "Commerce local",
    [Sector.CLINIC]: "Clinique",
    [Sector.OTHER]: "Autre",
  },
  toggles: {
    needsBookings: "Réservations, rendez-vous, demandes ou inscriptions",
    multipleStaff: "Plusieurs intervenants, cours ou groupes",
    weeklySchedule: "Calendrier ou horaires hebdomadaires",
    multipleLocationsOrRooms: "Plusieurs chambres, salles ou espaces",
    teamUsers: "Équipe avec plusieurs utilisateurs",
    payments: "Paiements en ligne",
    externalIntegrations:
      "Intégrations externes (Booking, POS, ERP, facturation…)",
  },
  descriptionLabel: "Décrivez votre besoin en 1-2 phrases",
  descriptionPlaceholder:
    "Ex : j'ai une salle de sport et je veux une app pour gérer les cours hebdomadaires et permettre les inscriptions.",
  reasons: {
    integrations:
      "Intégrations externes (Booking, POS, PMS, ERP, facturation, etc.) — nous recommandons Pro Gestion comme base. Peut nécessiter un devis.",
    automationPayments:
      "Automatisations, paiements ou plusieurs utilisateurs — correspond au plan Pro Gestion.",
    multiLocation:
      "Plusieurs espaces/salles/membres — nous recommandons Business Local avec plus de modules.",
    multiStaff:
      "Plusieurs intervenants ou horaires hebdomadaires/calendrier — App Avancée couvre.",
    bookings:
      "Une fonctionnalité essentielle (réservations / rendez-vous / demandes / cours) — App Essentielle.",
    presence: "Juste une présence en ligne, contacts et WhatsApp.",
  },
  setupLabel: "Setup :",
  setupFree: "gratuit",
  billingMonthly: "Mensuel",
  billingAnnual: "Annuel",
  perYearLong: "/ an",
  perMonthLong: "/ mois",
  perYearShort: "/an",
  perMonthShort: "/mois",
  quoteNote:
    "Comme vous avez demandé des intégrations externes, ce prix est une base — nous confirmerons le devis avec vous.",
  loadingPlan: "Chargement du plan…",
  trialOnboarding:
    "Vous commencez avec 1 mois gratuit (30 jours), sans carte. Vous ne payez que si vous décidez de continuer.",
  asideRecommendedFor: "Recommandé pour vous",
  asideCalculating: "Calcul en cours…",
  asideNote:
    "Le plan recommandé s'ajuste automatiquement à vos réponses pour garantir la meilleure solution.",
  back: "Retour",
  continue: "Continuer",
  seePlan: "Voir le plan recommandé",
  createAccount: "Créer un compte et commencer",
  form: {
    businessName: "Nom de l'entreprise",
    businessNamePlaceholder: "Salle de sport Vent du Nord",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    accountName: "Votre nom",
    email: "E-mail",
    password: "Mot de passe",
  },
  toastCreatedTitle: "Compte créé",
  toastCreatedDesc: "Bienvenue chez NorthSail ! Nous traitons votre demande.",
  toastErrorTitle: "Erreur",
  toastErrorFallback: "Échec de la création du compte",
};

const de: OnboardingCopy = {
  metaTitle: "Loslegen — NorthSail",
  stepBadge: "Schritt {step} von {total}",
  steps: {
    business: {
      title: "Was ist Ihr Unternehmen?",
      subtitle: "Wir passen die Plattform an Ihre konkreten Bedürfnisse an.",
    },
    needs: {
      title: "Was brauchen Sie?",
      subtitle: "Markieren Sie alles, was auf Ihren Alltag zutrifft.",
    },
    plan: { title: "Der Tarif, den wir empfehlen" },
    account: {
      title: "Konto erstellen",
      subtitle: "Letzte Details, dann geht's los.",
    },
  },
  sectors: {
    [Sector.RESTAURANT]: "Restaurant",
    [Sector.HAIR_SALON]: "Friseur / Barbier",
    [Sector.HOTEL]: "Hotel / Unterkunft",
    [Sector.GYM]: "Fitnessstudio / Studio",
    [Sector.LOCAL_SERVICES]: "Lokale Dienstleistungen",
    [Sector.SMALL_SHOP]: "Lokales Geschäft",
    [Sector.CLINIC]: "Klinik",
    [Sector.OTHER]: "Andere",
  },
  toggles: {
    needsBookings: "Reservierungen, Termine, Anfragen oder Anmeldungen",
    multipleStaff: "Mehrere Mitarbeiter, Kurse oder Gruppen",
    weeklySchedule: "Kalender oder Wochenpläne",
    multipleLocationsOrRooms: "Mehrere Zimmer, Räume oder Standorte",
    teamUsers: "Team mit mehreren Benutzern",
    payments: "Online-Zahlungen",
    externalIntegrations:
      "Externe Integrationen (Booking, POS, ERP, Rechnungsstellung…)",
  },
  descriptionLabel: "Beschreiben Sie Ihren Bedarf in 1-2 Sätzen",
  descriptionPlaceholder:
    "Z. B.: Ich habe ein Fitnessstudio und möchte eine App, um die Wochenkurse zu verwalten und Anmeldungen zu ermöglichen.",
  reasons: {
    integrations:
      "Externe Integrationen (Booking, POS, PMS, ERP, Rechnungsstellung usw.) — wir empfehlen Pro Management als Basis. Kann ein Angebot erfordern.",
    automationPayments:
      "Automatisierungen, Zahlungen oder mehrere Team-Benutzer — passt zum Pro-Management-Tarif.",
    multiLocation:
      "Mehrere Räume/Standorte/Mitglieder — wir empfehlen Business Local mit mehr Modulen.",
    multiStaff:
      "Mehrere Mitarbeiter oder Wochenpläne/Kalender — Advanced App deckt das ab.",
    bookings:
      "Eine zentrale Funktion (Reservierungen / Termine / Anfragen / Kurse) — Essential App.",
    presence: "Nur Online-Präsenz, Kontakte und WhatsApp.",
  },
  setupLabel: "Setup:",
  setupFree: "gratis",
  billingMonthly: "Monatlich",
  billingAnnual: "Jährlich",
  perYearLong: "/ Jahr",
  perMonthLong: "/ Monat",
  perYearShort: "/Jahr",
  perMonthShort: "/Monat",
  quoteNote:
    "Da Sie externe Integrationen angefragt haben, ist dieser Preis eine Basis — wir bestätigen das Angebot mit Ihnen.",
  loadingPlan: "Tarif wird geladen…",
  trialOnboarding:
    "Sie starten mit 1 Monat gratis (30 Tage), ohne Karte. Sie zahlen nur, wenn Sie sich entscheiden fortzufahren.",
  asideRecommendedFor: "Für Sie empfohlen",
  asideCalculating: "Wird berechnet…",
  asideNote:
    "Der empfohlene Tarif passt sich automatisch an Ihre Antworten an, um die beste Lösung zu gewährleisten.",
  back: "Zurück",
  continue: "Weiter",
  seePlan: "Empfohlenen Tarif ansehen",
  createAccount: "Konto erstellen und loslegen",
  form: {
    businessName: "Name des Unternehmens",
    businessNamePlaceholder: "Fitnessstudio Nordwind",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    accountName: "Ihr Name",
    email: "E-Mail",
    password: "Passwort",
  },
  toastCreatedTitle: "Konto erstellt",
  toastCreatedDesc:
    "Willkommen bei NorthSail! Wir kümmern uns um Ihre Anfrage.",
  toastErrorTitle: "Fehler",
  toastErrorFallback: "Konto konnte nicht erstellt werden",
};

export const ONBOARDING_COPY: Record<Locale, OnboardingCopy> = {
  en,
  pt,
  es,
  fr,
  de,
};

export function getOnboardingCopy(locale: Locale): OnboardingCopy {
  return ONBOARDING_COPY[locale];
}
