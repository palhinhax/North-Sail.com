import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container, Section, CtaLink } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";

/**
 * Case studies / portfolio page.
 *
 * HONESTY RULE: never present an illustrative demo as a real paying client.
 * The cases below are marked `illustrative: true` and rendered with a visible
 * "illustrative example" badge plus a note above the grid, so a visitor is
 * never misled. When you build for a real business (with permission to use the
 * name), add it WITHOUT the `illustrative` flag, ideally with a live `href`.
 *
 * Each localized field is a Record<Locale, string>; `businessName` and `href`
 * are shared across locales.
 */
type LocalizedText = Record<Locale, string>;

type CaseStudy = {
  businessName: string;
  location: LocalizedText;
  sector: LocalizedText;
  summary: LocalizedText;
  result: LocalizedText;
  href?: string;
  illustrative?: boolean;
};

const CASES: CaseStudy[] = [
  {
    businessName: "Maison Noir",
    illustrative: true,
    location: {
      pt: "Lisboa",
      en: "Lisbon",
      es: "Lisboa",
      fr: "Lisbonne",
      de: "Lissabon",
    },
    sector: {
      pt: "Barbearia",
      en: "Barbershop",
      es: "Barbería",
      fr: "Barbier",
      de: "Barbershop",
    },
    summary: {
      pt: "Marcações online 24/7, catálogo de serviços por barbeiro e lembretes automáticos por WhatsApp.",
      en: "24/7 online booking, a per-barber service catalog and automatic WhatsApp reminders.",
      es: "Reservas online 24/7, catálogo de servicios por barbero y recordatorios automáticos por WhatsApp.",
      fr: "Réservation en ligne 24/7, catalogue de services par barbier et rappels automatiques par WhatsApp.",
      de: "24/7-Onlinebuchung, Leistungskatalog pro Barbier und automatische WhatsApp-Erinnerungen.",
    },
    result: {
      pt: "~40% menos faltas e a maioria das marcações passou a acontecer fora do horário de balcão.",
      en: "~40% fewer no-shows, with most bookings now made outside opening hours.",
      es: "~40% menos ausencias y la mayoría de las reservas ahora se hacen fuera del horario de atención.",
      fr: "~40% de rendez-vous manqués en moins, la plupart des réservations se faisant hors des heures d'ouverture.",
      de: "~40% weniger No-Shows, die meisten Buchungen erfolgen jetzt außerhalb der Öffnungszeiten.",
    },
  },
  {
    businessName: "Opero",
    illustrative: true,
    location: {
      pt: "Serviços profissionais",
      en: "Professional services",
      es: "Servicios profesionales",
      fr: "Services professionnels",
      de: "Dienstleistungen",
    },
    sector: {
      pt: "Dashboard interno",
      en: "Internal dashboard",
      es: "Panel interno",
      fr: "Tableau de bord interne",
      de: "Internes Dashboard",
    },
    summary: {
      pt: "Substituímos várias folhas de Excel por um painel com permissões: clientes, pedidos e estado num só sítio.",
      en: "We replaced several spreadsheets with one role-based dashboard: clients, requests and status in one place.",
      es: "Sustituimos varias hojas de Excel por un panel con permisos: clientes, solicitudes y estado en un solo lugar.",
      fr: "Nous avons remplacé plusieurs feuilles Excel par un tableau de bord avec rôles : clients, demandes et statut au même endroit.",
      de: "Wir ersetzten mehrere Excel-Tabellen durch ein rollenbasiertes Dashboard: Kunden, Anfragen und Status an einem Ort.",
    },
    result: {
      pt: "Fim das 5 folhas paralelas; o tratamento de pedidos ficou cerca de 2x mais rápido.",
      en: "No more five parallel spreadsheets; request handling became about 2x faster.",
      es: "Se acabaron las 5 hojas paralelas; la gestión de solicitudes es unas 2x más rápida.",
      fr: "Fini les 5 feuilles en parallèle ; le traitement des demandes est environ 2x plus rapide.",
      de: "Keine fünf Paralleltabellen mehr; die Bearbeitung von Anfragen wurde rund 2x schneller.",
    },
  },
  {
    businessName: "Restaurante O Cais",
    illustrative: true,
    location: {
      pt: "Sesimbra",
      en: "Sesimbra",
      es: "Sesimbra",
      fr: "Sesimbra",
      de: "Sesimbra",
    },
    sector: {
      pt: "Restaurante",
      en: "Restaurant",
      es: "Restaurante",
      fr: "Restaurant",
      de: "Restaurant",
    },
    summary: {
      pt: "Site novo com reservas online, menu digital sempre atualizado e botão de WhatsApp.",
      en: "A new site with online reservations, an always-updated digital menu and a WhatsApp button.",
      es: "Web nueva con reservas online, menú digital siempre actualizado y botón de WhatsApp.",
      fr: "Un nouveau site avec réservations en ligne, menu numérique toujours à jour et bouton WhatsApp.",
      de: "Neue Website mit Online-Reservierungen, stets aktueller digitaler Speisekarte und WhatsApp-Button.",
    },
    result: {
      pt: "~30% das reservas passaram a ser feitas online, fora do horário de atendimento.",
      en: "~30% of reservations moved online, made outside service hours.",
      es: "~30% de las reservas pasaron a hacerse online, fuera del horario de atención.",
      fr: "~30% des réservations se font désormais en ligne, en dehors des heures de service.",
      de: "~30% der Reservierungen erfolgen jetzt online, außerhalb der Servicezeiten.",
    },
  },
];

type CasesCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  resultLabel: string;
  viewLabel: string;
  illustrativeBadge: string;
  illustrativeNote: string;
  foundingTitle: string;
  foundingBody: string;
  foundingCta: string;
  emptyTitle: string;
  emptyBody: string;
  emptyCta: string;
};

const COPY: Record<Locale, CasesCopy> = {
  pt: {
    metaTitle: "Casos e exemplos — NorthSail",
    metaDescription:
      "Exemplos de websites e web apps que a NorthSail cria para pequenos negócios: reservas, menus, portais e mais, com resultados concretos.",
    h1: "Negócios que já deram o upgrade",
    intro:
      "Exemplos de sites e mini apps que construímos — com o que muda no dia a dia de cada negócio.",
    resultLabel: "Resultado",
    viewLabel: "Ver site",
    illustrativeBadge: "Exemplo ilustrativo",
    illustrativeNote:
      "Exemplos ilustrativos do que construímos. Estamos a integrar os primeiros clientes fundadores — os casos reais aparecem aqui à medida que ficam no ar.",
    foundingTitle: "Quer ser um dos nossos primeiros casos reais?",
    foundingBody:
      "Para os primeiros negócios temos condições especiais: site no ar em 48h e setup grátis. Mostramos o seu negócio aqui (com a sua autorização) quando estiver no ar.",
    foundingCta: "Quero ser cliente fundador",
    emptyTitle: "Estamos a escolher os primeiros clientes fundadores",
    emptyBody:
      "Quer ser um dos primeiros casos da NorthSail? Para os primeiros negócios temos condições especiais: site no ar em 48h e setup grátis. Mostramos o seu negócio aqui (com a sua autorização) quando estiver no ar.",
    emptyCta: "Quero ser cliente fundador",
  },
  en: {
    metaTitle: "Case studies & examples — NorthSail",
    metaDescription:
      "Examples of websites and web apps NorthSail builds for small businesses: bookings, menus, portals and more, with concrete results.",
    h1: "Businesses that already upgraded",
    intro:
      "Examples of sites and mini apps we build — and what changes in each business's day-to-day.",
    resultLabel: "Result",
    viewLabel: "View site",
    illustrativeBadge: "Illustrative example",
    illustrativeNote:
      "Illustrative examples of what we build. We're onboarding our first founding clients — real cases will appear here as they go live.",
    foundingTitle: "Want to be one of our first real case studies?",
    foundingBody:
      "Our first businesses get special terms: site live in 48h and free setup. We'll feature your business here (with your permission) once it's live.",
    foundingCta: "I want to be a founding client",
    emptyTitle: "We're picking our first founding clients",
    emptyBody:
      "Want to be one of NorthSail's first case studies? Our first businesses get special terms: site live in 48h and free setup. We'll feature your business here (with your permission) once it's live.",
    emptyCta: "I want to be a founding client",
  },
  es: {
    metaTitle: "Casos y ejemplos — NorthSail",
    metaDescription:
      "Ejemplos de webs y web apps que NorthSail crea para pequeños negocios: reservas, menús, portales y más, con resultados concretos.",
    h1: "Negocios que ya dieron el salto",
    intro:
      "Ejemplos de webs y mini apps que construimos — y qué cambia en el día a día de cada negocio.",
    resultLabel: "Resultado",
    viewLabel: "Ver web",
    illustrativeBadge: "Ejemplo ilustrativo",
    illustrativeNote:
      "Ejemplos ilustrativos de lo que construimos. Estamos incorporando a los primeros clientes fundadores — los casos reales aparecerán aquí a medida que se publiquen.",
    foundingTitle: "¿Quieres ser uno de nuestros primeros casos reales?",
    foundingBody:
      "Los primeros negocios tienen condiciones especiales: web online en 48h y configuración gratis. Mostraremos tu negocio aquí (con tu permiso) cuando esté online.",
    foundingCta: "Quiero ser cliente fundador",
    emptyTitle: "Estamos eligiendo a los primeros clientes fundadores",
    emptyBody:
      "¿Quieres ser uno de los primeros casos de NorthSail? Los primeros negocios tienen condiciones especiales: web online en 48h y configuración gratis. Mostraremos tu negocio aquí (con tu permiso) cuando esté online.",
    emptyCta: "Quiero ser cliente fundador",
  },
  fr: {
    metaTitle: "Études de cas & exemples — NorthSail",
    metaDescription:
      "Exemples de sites et web apps que NorthSail crée pour des petites entreprises : réservations, menus, portails et plus, avec des résultats concrets.",
    h1: "Des entreprises déjà passées au numérique",
    intro:
      "Exemples de sites et mini apps que nous réalisons — et ce qui change au quotidien pour chaque entreprise.",
    resultLabel: "Résultat",
    viewLabel: "Voir le site",
    illustrativeBadge: "Exemple illustratif",
    illustrativeNote:
      "Exemples illustratifs de ce que nous construisons. Nous intégrons nos premiers clients fondateurs — les cas réels apparaîtront ici au fur et à mesure de leur mise en ligne.",
    foundingTitle:
      "Vous voulez être l'une de nos premières études de cas réelles ?",
    foundingBody:
      "Nos premiers clients bénéficient de conditions spéciales : site en ligne en 48h et installation offerte. Nous présenterons votre entreprise ici (avec votre accord) une fois en ligne.",
    foundingCta: "Je veux être client fondateur",
    emptyTitle: "Nous choisissons nos premiers clients fondateurs",
    emptyBody:
      "Vous voulez être l'une des premières études de cas de NorthSail ? Nos premiers clients bénéficient de conditions spéciales : site en ligne en 48h et installation offerte. Nous présenterons votre entreprise ici (avec votre accord) une fois en ligne.",
    emptyCta: "Je veux être client fondateur",
  },
  de: {
    metaTitle: "Fallstudien & Beispiele — NorthSail",
    metaDescription:
      "Beispiele für Websites und Web-Apps, die NorthSail für kleine Unternehmen erstellt: Buchungen, Menüs, Portale und mehr, mit konkreten Ergebnissen.",
    h1: "Unternehmen, die bereits upgegradet haben",
    intro:
      "Beispiele für Sites und Mini-Apps, die wir bauen — und was sich im Alltag jedes Unternehmens verändert.",
    resultLabel: "Ergebnis",
    viewLabel: "Website ansehen",
    illustrativeBadge: "Illustratives Beispiel",
    illustrativeNote:
      "Illustrative Beispiele dafür, was wir bauen. Wir gewinnen gerade unsere ersten Gründungskunden — echte Fallstudien erscheinen hier, sobald sie live sind.",
    foundingTitle: "Möchten Sie eine unserer ersten echten Fallstudien sein?",
    foundingBody:
      "Unsere ersten Betriebe erhalten besondere Konditionen: Website in 48h online und kostenlose Einrichtung. Wir präsentieren Ihr Unternehmen hier (mit Ihrer Zustimmung), sobald es online ist.",
    foundingCta: "Ich möchte Gründungskunde sein",
    emptyTitle: "Wir wählen unsere ersten Gründungskunden aus",
    emptyBody:
      "Möchten Sie eine der ersten Fallstudien von NorthSail sein? Unsere ersten Betriebe erhalten besondere Konditionen: Website in 48h online und kostenlose Einrichtung. Wir präsentieren Ihr Unternehmen hier (mit Ihrer Zustimmung), sobald es online ist.",
    emptyCta: "Ich möchte Gründungskunde sein",
  },
};

export function casesMeta(locale: Locale): {
  title: string;
  description: string;
} {
  const c = COPY[locale];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function CasesTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = COPY[locale];
  const path = localePath(locale, "cases");
  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-14 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <h1 className="text-display-sm text-brand md:text-display-lg">
              {c.h1}
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted">{c.intro}</p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {CASES.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface-low p-10 text-center shadow-card">
              <h2 className="text-headline-md text-brand">{c.emptyTitle}</h2>
              <p className="mx-auto mt-3 max-w-xl text-body-md text-ink-muted">
                {c.emptyBody}
              </p>
              <div className="mt-6">
                <CtaLink
                  href={localePath(locale, "contact")}
                  variant="primary"
                  size="lg"
                >
                  {c.emptyCta}
                  <ArrowRight className="h-4 w-4" />
                </CtaLink>
              </div>
            </div>
          ) : (
            <>
              {CASES.some((cs) => cs.illustrative) && (
                <p className="text-body-sm mx-auto mb-8 max-w-2xl text-center text-ink-subtle">
                  {c.illustrativeNote}
                </p>
              )}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CASES.map((cs) => (
                  <article
                    key={cs.businessName}
                    className="flex flex-col rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-label-sm text-ink-subtle">
                      <span className="rounded-full bg-surface-low px-2 py-0.5">
                        {cs.sector[locale]}
                      </span>
                      <span>{cs.location[locale]}</span>
                      {cs.illustrative && (
                        <span className="rounded-full border border-line px-2 py-0.5 text-ink-subtle">
                          {c.illustrativeBadge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-headline-sm text-brand">
                      {cs.businessName}
                    </h3>
                    <p className="mt-2 flex-1 text-body-md text-ink-muted">
                      {cs.summary[locale]}
                    </p>
                    <p className="mt-4 rounded-lg bg-teal-surface px-3 py-2 text-label-md text-teal-ink">
                      <span className="font-semibold">{c.resultLabel}:</span>{" "}
                      {cs.result[locale]}
                    </p>
                    {cs.href && (
                      <a
                        href={cs.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-label-md font-medium text-brand-accent hover:underline"
                      >
                        {c.viewLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </article>
                ))}
              </div>

              <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-line bg-surface-low p-10 text-center shadow-card">
                <h2 className="text-headline-md text-brand">
                  {c.foundingTitle}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-body-md text-ink-muted">
                  {c.foundingBody}
                </p>
                <div className="mt-6">
                  <CtaLink
                    href={localePath(locale, "contact")}
                    variant="primary"
                    size="lg"
                  >
                    {c.foundingCta}
                    <ArrowRight className="h-4 w-4" />
                  </CtaLink>
                </div>
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
