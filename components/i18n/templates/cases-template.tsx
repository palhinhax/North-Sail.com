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
 * IMPORTANT: keep this REAL. Add an entry to CASES only for a business you have
 * actually built for, ideally with permission to use the name and a live link.
 * Until then the page shows an honest "founding clients" invitation instead of
 * fake projects — empty is more credible than invented.
 *
 * Each case: { businessName, location, sector, summary, result, href? }.
 */
type CaseStudy = {
  businessName: string;
  location: string;
  sector: string;
  summary: string;
  result: string;
  href?: string;
};

const CASES: CaseStudy[] = [
  // Example shape (delete and replace with real ones):
  // {
  //   businessName: "Restaurante O Cais",
  //   location: "Sesimbra",
  //   sector: "Restaurante",
  //   summary: "Site novo com reservas online, menu digital e botão de WhatsApp.",
  //   result: "~30% das reservas passaram a ser feitas online, fora de horário.",
  //   href: "https://ocais.exemplo.pt",
  // },
];

type CasesCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  resultLabel: string;
  viewLabel: string;
  emptyTitle: string;
  emptyBody: string;
  emptyCta: string;
};

const COPY: Record<Locale, CasesCopy> = {
  pt: {
    metaTitle: "Casos e exemplos — NorthSail",
    metaDescription:
      "Exemplos reais de websites e web apps que a NorthSail criou para pequenos negócios: reservas, menus, portais e mais, com resultados concretos.",
    h1: "Negócios que já deram o upgrade",
    intro:
      "Exemplos reais de sites e mini apps que construímos — com o que mudou no dia a dia de cada negócio.",
    resultLabel: "Resultado",
    viewLabel: "Ver site",
    emptyTitle: "Estamos a escolher os primeiros clientes fundadores",
    emptyBody:
      "Queres ser um dos primeiros casos da NorthSail? Para os primeiros negócios temos condições especiais: site no ar em 48h e setup grátis. Mostramos o teu negócio aqui (com a tua autorização) quando estiver no ar.",
    emptyCta: "Quero ser cliente fundador",
  },
  en: {
    metaTitle: "Case studies & examples — NorthSail",
    metaDescription:
      "Real examples of websites and web apps NorthSail built for small businesses: bookings, menus, portals and more, with concrete results.",
    h1: "Businesses that already upgraded",
    intro:
      "Real examples of sites and mini apps we've built — and what changed in each business's day-to-day.",
    resultLabel: "Result",
    viewLabel: "View site",
    emptyTitle: "We're picking our first founding clients",
    emptyBody:
      "Want to be one of NorthSail's first case studies? Our first businesses get special terms: site live in 48h and free setup. We'll feature your business here (with your permission) once it's live.",
    emptyCta: "I want to be a founding client",
  },
  es: {
    metaTitle: "Casos y ejemplos — NorthSail",
    metaDescription:
      "Ejemplos reales de webs y web apps que NorthSail creó para pequeños negocios: reservas, menús, portales y más, con resultados concretos.",
    h1: "Negocios que ya dieron el salto",
    intro:
      "Ejemplos reales de webs y mini apps que hemos construido — y qué cambió en el día a día de cada negocio.",
    resultLabel: "Resultado",
    viewLabel: "Ver web",
    emptyTitle: "Estamos eligiendo a los primeros clientes fundadores",
    emptyBody:
      "¿Quieres ser uno de los primeros casos de NorthSail? Los primeros negocios tienen condiciones especiales: web online en 48h y configuración gratis. Mostraremos tu negocio aquí (con tu permiso) cuando esté online.",
    emptyCta: "Quiero ser cliente fundador",
  },
  fr: {
    metaTitle: "Études de cas & exemples — NorthSail",
    metaDescription:
      "Exemples réels de sites et web apps que NorthSail a créés pour des petites entreprises : réservations, menus, portails et plus, avec des résultats concrets.",
    h1: "Des entreprises déjà passées au numérique",
    intro:
      "Exemples réels de sites et mini apps que nous avons réalisés — et ce qui a changé au quotidien pour chaque entreprise.",
    resultLabel: "Résultat",
    viewLabel: "Voir le site",
    emptyTitle: "Nous choisissons nos premiers clients fondateurs",
    emptyBody:
      "Vous voulez être l'une des premières études de cas de NorthSail ? Nos premiers clients bénéficient de conditions spéciales : site en ligne en 48h et installation offerte. Nous présenterons votre entreprise ici (avec votre accord) une fois en ligne.",
    emptyCta: "Je veux être client fondateur",
  },
  de: {
    metaTitle: "Fallstudien & Beispiele — NorthSail",
    metaDescription:
      "Echte Beispiele für Websites und Web-Apps, die NorthSail für kleine Unternehmen erstellt hat: Buchungen, Menüs, Portale und mehr, mit konkreten Ergebnissen.",
    h1: "Unternehmen, die bereits upgegradet haben",
    intro:
      "Echte Beispiele für Sites und Mini-Apps, die wir gebaut haben — und was sich im Alltag jedes Unternehmens verändert hat.",
    resultLabel: "Ergebnis",
    viewLabel: "Website ansehen",
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CASES.map((cs) => (
                <article
                  key={cs.businessName}
                  className="flex flex-col rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
                >
                  <div className="flex items-center gap-2 text-label-sm text-ink-subtle">
                    <span className="rounded-full bg-surface-low px-2 py-0.5">
                      {cs.sector}
                    </span>
                    <span>{cs.location}</span>
                  </div>
                  <h3 className="mt-3 text-headline-sm text-brand">
                    {cs.businessName}
                  </h3>
                  <p className="mt-2 flex-1 text-body-md text-ink-muted">
                    {cs.summary}
                  </p>
                  <p className="mt-4 rounded-lg bg-teal-surface px-3 py-2 text-label-md text-teal-ink">
                    <span className="font-semibold">{c.resultLabel}:</span>{" "}
                    {cs.result}
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
          )}
        </Container>
      </Section>
    </>
  );
}
