import { MapPin, Mail, Sparkles } from "lucide-react";
import { Container, Section, CtaLink } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { CONTACT_EMAIL } from "@/lib/seo/site";
import { Breadcrumbs } from "../breadcrumbs";

/**
 * About page — the "human" page ChatGPT flagged as missing. Copy is inline
 * (not in the content registry) so it is easy to edit and low-risk.
 *
 * These concrete trust signals (founder name, city) are exactly what makes an
 * unknown brand credible. Add the registered company name / NIF here too once
 * available.
 */
const FOUNDER = "João Duarte";
const CITY = "Lisboa, Portugal";

type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  storyTitle: string;
  story: string[];
  valuesTitle: string;
  values: { title: string; body: string }[];
  locationLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  disambiguation: string;
};

const COPY: Record<Locale, AboutCopy> = {
  pt: {
    metaTitle: "Sobre a NorthSail — quem somos",
    metaDescription:
      "Conhece a NorthSail: a equipa, a missão e a forma como ajudamos pequenos negócios e PME a dar o upgrade digital com websites, web apps e automações por uma mensalidade acessível.",
    h1: "Pessoas reais a modernizar negócios reais",
    intro:
      "A NorthSail nasceu de uma ideia simples: a tecnologia que torna um negócio mais profissional não devia custar uma fortuna nem exigir uma equipa técnica.",
    storyTitle: "A nossa história",
    story: [
      `A NorthSail é liderada por ${FOUNDER}, a partir de ${CITY}. Trabalhamos com restaurantes, cabeleireiros, alojamentos, ginásios, clínicas e empresas de serviços que querem um site profissional, reservas online e processos mais simples — sem a complexidade e o preço das grandes agências.`,
      "Em vez de entregar um site e desaparecer, ficamos como parceiro mês após mês: alojamento, domínio, segurança, manutenção e melhorias contínuas estão incluídos. O negócio cresce, o site acompanha.",
    ],
    valuesTitle: "Como trabalhamos",
    values: [
      {
        title: "Próximos e diretos",
        body: "Falas diretamente com quem faz. Sem call centers, sem intermediários.",
      },
      {
        title: "Preço honesto",
        body: "Mensalidades baixas e claras. Dizemos sempre o que está incluído e o que não está.",
      },
      {
        title: "Rápidos",
        body: "Colocamos negócios online em dias, não em meses.",
      },
    ],
    locationLabel: "Sediados em",
    ctaTitle: "Vamos falar?",
    ctaBody:
      "Conta-nos o teu negócio e dizemos-te, com franqueza, se somos a escolha certa para ti.",
    ctaButton: "Falar connosco",
    disambiguation:
      "Nota: a NorthSail é uma empresa de websites e software. Não temos relação com marcas de velas, vela ou náutica de nome parecido.",
  },
  en: {
    metaTitle: "About NorthSail — who we are",
    metaDescription:
      "Meet NorthSail: the team, the mission and how we help small businesses and SMEs get their digital upgrade with websites, web apps and automation on an affordable monthly subscription.",
    h1: "Real people modernising real businesses",
    intro:
      "NorthSail started from a simple idea: the technology that makes a business look professional shouldn't cost a fortune or require a technical team.",
    storyTitle: "Our story",
    story: [
      `NorthSail is led by ${FOUNDER}, based in ${CITY}. We work with restaurants, hairdressers, accommodation, gyms, clinics and service businesses that want a professional website, online bookings and simpler processes — without the complexity and price of large agencies.`,
      "Instead of shipping a site and disappearing, we stay as a partner month after month: hosting, domain, security, maintenance and continuous improvements are included. As the business grows, the site keeps up.",
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Close and direct",
        body: "You talk straight to the person doing the work. No call centres, no middlemen.",
      },
      {
        title: "Honest pricing",
        body: "Low, clear monthly fees. We always say what's included and what isn't.",
      },
      {
        title: "Fast",
        body: "We get businesses online in days, not months.",
      },
    ],
    locationLabel: "Based in",
    ctaTitle: "Let's talk",
    ctaBody:
      "Tell us about your business and we'll tell you honestly whether we're the right fit.",
    ctaButton: "Get in touch",
    disambiguation:
      "Note: NorthSail is a websites and software company. We are unrelated to similarly named sail, sailing or nautical brands.",
  },
  es: {
    metaTitle: "Sobre NorthSail — quiénes somos",
    metaDescription:
      "Conoce NorthSail: el equipo, la misión y cómo ayudamos a pequeños negocios y pymes a dar su salto digital con webs, web apps y automatizaciones por una cuota mensual asequible.",
    h1: "Personas reales modernizando negocios reales",
    intro:
      "NorthSail nació de una idea simple: la tecnología que hace que un negocio parezca profesional no debería costar una fortuna ni exigir un equipo técnico.",
    storyTitle: "Nuestra historia",
    story: [
      `NorthSail está liderada por ${FOUNDER}, desde ${CITY}. Trabajamos con restaurantes, peluquerías, alojamientos, gimnasios, clínicas y empresas de servicios que quieren una web profesional, reservas online y procesos más simples — sin la complejidad ni el precio de las grandes agencias.`,
      "En lugar de entregar una web y desaparecer, nos quedamos como socio mes a mes: alojamiento, dominio, seguridad, mantenimiento y mejoras continuas están incluidos.",
    ],
    valuesTitle: "Cómo trabajamos",
    values: [
      {
        title: "Cercanos y directos",
        body: "Hablas directamente con quien hace el trabajo. Sin call centers ni intermediarios.",
      },
      {
        title: "Precio honesto",
        body: "Cuotas mensuales bajas y claras. Siempre decimos qué está incluido y qué no.",
      },
      {
        title: "Rápidos",
        body: "Ponemos negocios online en días, no en meses.",
      },
    ],
    locationLabel: "Con sede en",
    ctaTitle: "¿Hablamos?",
    ctaBody:
      "Cuéntanos tu negocio y te diremos con franqueza si somos la opción adecuada.",
    ctaButton: "Contactar",
    disambiguation:
      "Nota: NorthSail es una empresa de webs y software. No tenemos relación con marcas de velas, vela o náutica de nombre parecido.",
  },
  fr: {
    metaTitle: "À propos de NorthSail — qui nous sommes",
    metaDescription:
      "Découvrez NorthSail : l'équipe, la mission et comment nous aidons les petites entreprises et PME à passer au numérique avec des sites, web apps et automatisations pour un abonnement mensuel abordable.",
    h1: "De vraies personnes qui modernisent de vraies entreprises",
    intro:
      "NorthSail est née d'une idée simple : la technologie qui rend une entreprise professionnelle ne devrait pas coûter une fortune ni exiger une équipe technique.",
    storyTitle: "Notre histoire",
    story: [
      `NorthSail est dirigée par ${FOUNDER}, depuis ${CITY}. Nous travaillons avec des restaurants, coiffeurs, hébergements, salles de sport, cliniques et entreprises de services qui veulent un site professionnel, des réservations en ligne et des processus plus simples — sans la complexité et le prix des grandes agences.`,
      "Au lieu de livrer un site et de disparaître, nous restons partenaires mois après mois : hébergement, domaine, sécurité, maintenance et améliorations continues sont inclus.",
    ],
    valuesTitle: "Comment nous travaillons",
    values: [
      {
        title: "Proches et directs",
        body: "Vous parlez directement à la personne qui réalise le travail. Pas de centres d'appels, pas d'intermédiaires.",
      },
      {
        title: "Prix honnête",
        body: "Des abonnements mensuels bas et clairs. Nous disons toujours ce qui est inclus et ce qui ne l'est pas.",
      },
      {
        title: "Rapides",
        body: "Nous mettons les entreprises en ligne en jours, pas en mois.",
      },
    ],
    locationLabel: "Basés à",
    ctaTitle: "Parlons-en",
    ctaBody:
      "Parlez-nous de votre entreprise et nous vous dirons honnêtement si nous sommes le bon choix.",
    ctaButton: "Nous contacter",
    disambiguation:
      "Note : NorthSail est une entreprise de sites web et de logiciels. Nous n'avons aucun lien avec des marques de voiles, de voile ou de nautisme au nom similaire.",
  },
  de: {
    metaTitle: "Über NorthSail — wer wir sind",
    metaDescription:
      "Lernen Sie NorthSail kennen: das Team, die Mission und wie wir kleinen Unternehmen und KMU mit Websites, Web-Apps und Automatisierung zum digitalen Upgrade verhelfen — zu einem erschwinglichen Monatsabo.",
    h1: "Echte Menschen, die echte Unternehmen modernisieren",
    intro:
      "NorthSail entstand aus einer einfachen Idee: Technik, die ein Unternehmen professionell macht, sollte kein Vermögen kosten und kein technisches Team erfordern.",
    storyTitle: "Unsere Geschichte",
    story: [
      `NorthSail wird von ${FOUNDER} aus ${CITY} geleitet. Wir arbeiten mit Restaurants, Friseuren, Unterkünften, Fitnessstudios, Kliniken und Dienstleistern, die eine professionelle Website, Online-Buchungen und einfachere Abläufe wollen — ohne die Komplexität und den Preis großer Agenturen.`,
      "Statt eine Website zu liefern und zu verschwinden, bleiben wir Monat für Monat Partner: Hosting, Domain, Sicherheit, Wartung und laufende Verbesserungen sind inklusive.",
    ],
    valuesTitle: "Wie wir arbeiten",
    values: [
      {
        title: "Nah und direkt",
        body: "Sie sprechen direkt mit der Person, die die Arbeit macht. Keine Callcenter, keine Mittelsmänner.",
      },
      {
        title: "Ehrliche Preise",
        body: "Niedrige, klare Monatsgebühren. Wir sagen immer, was inklusive ist und was nicht.",
      },
      {
        title: "Schnell",
        body: "Wir bringen Unternehmen in Tagen online, nicht in Monaten.",
      },
    ],
    locationLabel: "Ansässig in",
    ctaTitle: "Sprechen wir",
    ctaBody:
      "Erzählen Sie uns von Ihrem Unternehmen und wir sagen Ihnen ehrlich, ob wir die richtige Wahl sind.",
    ctaButton: "Kontakt aufnehmen",
    disambiguation:
      "Hinweis: NorthSail ist ein Website- und Softwareunternehmen. Wir stehen in keiner Verbindung zu ähnlich benannten Segel-, Segelsport- oder Nautikmarken.",
  },
};

export function aboutMeta(locale: Locale): {
  title: string;
  description: string;
} {
  const c = COPY[locale];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function AboutTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = COPY[locale];
  const path = localePath(locale, "about");
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
            <p className="mt-4 inline-flex items-center gap-2 text-label-md text-ink-muted">
              <MapPin className="h-4 w-4 text-brand-accent" />
              {c.locationLabel} {CITY}
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-headline-md text-brand">{c.storyTitle}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {c.story.map((p, i) => (
                <p key={i} className="text-body-md text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-headline-md text-brand">{c.valuesTitle}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
                >
                  <Sparkles className="h-5 w-5 text-brand-accent" aria-hidden />
                  <h3 className="mt-3 text-headline-sm text-brand">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-body-md text-ink-muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-surface-low p-8 text-center shadow-card">
            <h2 className="text-headline-md text-brand">{c.ctaTitle}</h2>
            <p className="mx-auto mt-2 max-w-xl text-body-md text-ink-muted">
              {c.ctaBody}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink
                href={localePath(locale, "contact")}
                variant="primary"
                size="lg"
              >
                {c.ctaButton}
              </CtaLink>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-label-md font-medium text-brand-accent hover:underline"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-label-sm text-ink-subtle">
            {c.disambiguation}
          </p>
        </Container>
      </Section>
    </>
  );
}
