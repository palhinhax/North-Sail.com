import {
  Compass,
  Users,
  ClipboardList,
  RefreshCw,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeader,
  CtaLink,
} from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";

/**
 * Consulting / digital-transformation page. The third axis above SMB websites
 * and custom web apps: advisory + embedded IT consultants, priced per quote.
 * Inline copy (no content registry), 5 locales. Honest by design — scale the
 * "dedicated team" language to what you can actually deliver.
 */
const PILLAR_ICONS = [Compass, Users, ClipboardList, RefreshCw];

type Pillar = { title: string; body: string };
type ConsultingCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  galleryTitle: string;
  gallerySubtitle: string;
  pillarsTitle: string;
  pillars: Pillar[];
  howTitle: string;
  howPoints: string[];
  forWhoTitle: string;
  forWho: string[];
  quoteNote: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const COPY: Record<Locale, ConsultingCopy> = {
  pt: {
    metaTitle: "Consultoria e transformação digital — NorthSail",
    metaDescription:
      "Consultoria de transformação digital e IT: estratégia, auditoria, gestão de projetos e consultores alocados à tua equipa. Orçamento à medida de cada projeto.",
    h1: "Consultoria e transformação digital",
    intro:
      "Mais do que construir, ajudamos a decidir e a executar. Alocamos consultores à tua equipa e levamos os teus projetos de IT do plano à entrega — com a mesma linguagem simples e o mesmo preço honesto.",
    galleryTitle: "Dentro da plataforma",
    gallerySubtitle:
      "Pré-visualização ao vivo do tipo de painéis e fluxos que construímos — explora à vontade.",
    pillarsTitle: "Como te ajudamos",
    pillars: [
      {
        title: "Transformação digital",
        body: "Diagnóstico do teu negócio e um roadmap claro: o que digitalizar primeiro, com que ferramentas e por que ordem.",
      },
      {
        title: "Consultores alocados a projetos",
        body: "Colocamos um consultor (ou uma equipa dedicada, conforme o projeto) a trabalhar lado a lado com a tua equipa de IT.",
      },
      {
        title: "Gestão de projetos de IT",
        body: "Geriamos e entregamos o projeto de ponta a ponta — âmbito, prazos, fornecedores e implementação.",
      },
      {
        title: "Auditoria e modernização",
        body: "Avaliamos os sistemas atuais e tiramos-te do Excel e do legado para ferramentas web modernas.",
      },
    ],
    howTitle: "Como trabalhamos",
    howPoints: [
      "Começamos com um diagnóstico curto e um plano claro, antes de qualquer compromisso.",
      "Por projeto ou com um consultor dedicado à tua equipa — conforme o que precisas.",
      "Tudo sob orçamento, à medida do âmbito. Sem surpresas, sem letras pequenas.",
    ],
    forWhoTitle: "Para quem é",
    forWho: [
      "PME e empresas que querem modernizar processos mas não têm equipa de IT suficiente.",
      "Equipas que precisam de reforço pontual de um consultor experiente num projeto.",
      "Negócios presos a Excel, papel e sistemas antigos, que querem dar o salto.",
    ],
    quoteNote:
      "A consultoria é sempre orçamentada à medida do projeto — fala connosco para uma proposta.",
    ctaTitle: "Vamos falar do teu projeto?",
    ctaBody:
      "Conta-nos o desafio e dizemos-te, com franqueza, como te podemos ajudar e o que faz sentido para o teu caso.",
    ctaButton: "Pedir uma conversa",
  },
  en: {
    metaTitle: "Consulting & digital transformation — NorthSail",
    metaDescription:
      "Digital transformation and IT consulting: strategy, audit, project management and consultants embedded in your team. Quoted per project.",
    h1: "Consulting & digital transformation",
    intro:
      "Beyond building, we help you decide and execute. We embed consultants in your team and take your IT projects from plan to delivery — with the same plain language and honest pricing.",
    galleryTitle: "Inside the platform",
    gallerySubtitle:
      "A live preview of the kind of dashboards and flows we build — scroll around.",
    pillarsTitle: "How we help",
    pillars: [
      {
        title: "Digital transformation",
        body: "A diagnosis of your business and a clear roadmap: what to digitise first, with which tools and in what order.",
      },
      {
        title: "Consultants on your projects",
        body: "We place a consultant (or a dedicated team, depending on the project) working alongside your IT team.",
      },
      {
        title: "IT project management",
        body: "We manage and deliver the project end to end — scope, deadlines, vendors and implementation.",
      },
      {
        title: "Audit & modernisation",
        body: "We assess your current systems and move you off spreadsheets and legacy tools onto modern web ones.",
      },
    ],
    howTitle: "How we work",
    howPoints: [
      "We start with a short diagnosis and a clear plan, before any commitment.",
      "Per project or with a consultant dedicated to your team — whatever you need.",
      "Everything quoted to the scope. No surprises, no small print.",
    ],
    forWhoTitle: "Who it's for",
    forWho: [
      "SMEs and companies that want to modernise but lack enough IT capacity.",
      "Teams that need an experienced consultant to reinforce a project.",
      "Businesses stuck on spreadsheets, paper and old systems, ready to move.",
    ],
    quoteNote:
      "Consulting is always quoted to the project — get in touch for a proposal.",
    ctaTitle: "Let's talk about your project",
    ctaBody:
      "Tell us the challenge and we'll tell you honestly how we can help and what makes sense for your case.",
    ctaButton: "Request a call",
  },
  es: {
    metaTitle: "Consultoría y transformación digital — NorthSail",
    metaDescription:
      "Consultoría de transformación digital e IT: estrategia, auditoría, gestión de proyectos y consultores integrados en tu equipo. Presupuesto a medida.",
    h1: "Consultoría y transformación digital",
    intro:
      "Más que construir, te ayudamos a decidir y ejecutar. Integramos consultores en tu equipo y llevamos tus proyectos de IT del plan a la entrega — con el mismo lenguaje claro y precio honesto.",
    galleryTitle: "Dentro de la plataforma",
    gallerySubtitle:
      "Una vista previa en vivo del tipo de paneles y flujos que construimos — explora libremente.",
    pillarsTitle: "Cómo te ayudamos",
    pillars: [
      {
        title: "Transformación digital",
        body: "Un diagnóstico de tu negocio y una hoja de ruta clara: qué digitalizar primero, con qué herramientas y en qué orden.",
      },
      {
        title: "Consultores en tus proyectos",
        body: "Ponemos a un consultor (o un equipo dedicado, según el proyecto) a trabajar junto a tu equipo de IT.",
      },
      {
        title: "Gestión de proyectos de IT",
        body: "Gestionamos y entregamos el proyecto de principio a fin — alcance, plazos, proveedores e implementación.",
      },
      {
        title: "Auditoría y modernización",
        body: "Evaluamos tus sistemas actuales y te sacamos del Excel y lo heredado hacia herramientas web modernas.",
      },
    ],
    howTitle: "Cómo trabajamos",
    howPoints: [
      "Empezamos con un diagnóstico breve y un plan claro, antes de cualquier compromiso.",
      "Por proyecto o con un consultor dedicado a tu equipo — según lo que necesites.",
      "Todo presupuestado al alcance. Sin sorpresas, sin letra pequeña.",
    ],
    forWhoTitle: "Para quién es",
    forWho: [
      "Pymes y empresas que quieren modernizarse pero no tienen suficiente capacidad de IT.",
      "Equipos que necesitan reforzar un proyecto con un consultor experimentado.",
      "Negocios atascados en Excel, papel y sistemas antiguos, listos para dar el salto.",
    ],
    quoteNote:
      "La consultoría siempre se presupuesta al proyecto — contáctanos para una propuesta.",
    ctaTitle: "¿Hablamos de tu proyecto?",
    ctaBody:
      "Cuéntanos el reto y te diremos con franqueza cómo podemos ayudarte y qué tiene sentido para tu caso.",
    ctaButton: "Pedir una llamada",
  },
  fr: {
    metaTitle: "Conseil et transformation numérique — NorthSail",
    metaDescription:
      "Conseil en transformation numérique et IT : stratégie, audit, gestion de projet et consultants intégrés à votre équipe. Devis sur mesure.",
    h1: "Conseil et transformation numérique",
    intro:
      "Au-delà de la construction, nous vous aidons à décider et à exécuter. Nous intégrons des consultants à votre équipe et menons vos projets IT du plan à la livraison — avec le même langage clair et un prix honnête.",
    galleryTitle: "Au cœur de la plateforme",
    gallerySubtitle:
      "Un aperçu en direct des tableaux de bord et flux que nous créons — explorez librement.",
    pillarsTitle: "Comment nous aidons",
    pillars: [
      {
        title: "Transformation numérique",
        body: "Un diagnostic de votre entreprise et une feuille de route claire : quoi numériser d'abord, avec quels outils et dans quel ordre.",
      },
      {
        title: "Consultants sur vos projets",
        body: "Nous plaçons un consultant (ou une équipe dédiée, selon le projet) aux côtés de votre équipe IT.",
      },
      {
        title: "Gestion de projets IT",
        body: "Nous gérons et livrons le projet de bout en bout — périmètre, délais, prestataires et mise en œuvre.",
      },
      {
        title: "Audit et modernisation",
        body: "Nous évaluons vos systèmes actuels et vous faites passer d'Excel et du legacy à des outils web modernes.",
      },
    ],
    howTitle: "Comment nous travaillons",
    howPoints: [
      "Nous commençons par un diagnostic court et un plan clair, avant tout engagement.",
      "Au projet ou avec un consultant dédié à votre équipe — selon vos besoins.",
      "Tout est chiffré selon le périmètre. Pas de surprises, pas de petits caractères.",
    ],
    forWhoTitle: "Pour qui",
    forWho: [
      "PME et entreprises qui veulent se moderniser mais manquent de capacité IT.",
      "Équipes qui ont besoin d'un consultant expérimenté pour renforcer un projet.",
      "Entreprises bloquées sur Excel, papier et anciens systèmes, prêtes à avancer.",
    ],
    quoteNote:
      "Le conseil est toujours chiffré au projet — contactez-nous pour une proposition.",
    ctaTitle: "Parlons de votre projet",
    ctaBody:
      "Présentez-nous le défi et nous vous dirons honnêtement comment nous pouvons aider et ce qui a du sens pour votre cas.",
    ctaButton: "Demander un échange",
  },
  de: {
    metaTitle: "Beratung & digitale Transformation — NorthSail",
    metaDescription:
      "Beratung für digitale Transformation und IT: Strategie, Audit, Projektmanagement und Berater in Ihrem Team. Angebot pro Projekt.",
    h1: "Beratung & digitale Transformation",
    intro:
      "Über das Bauen hinaus helfen wir bei Entscheidung und Umsetzung. Wir binden Berater in Ihr Team ein und bringen Ihre IT-Projekte vom Plan zur Lieferung — mit derselben klaren Sprache und fairem Preis.",
    galleryTitle: "Ein Blick in die Plattform",
    gallerySubtitle:
      "Eine Live-Vorschau der Dashboards und Abläufe, die wir bauen — frei erkundbar.",
    pillarsTitle: "Wie wir helfen",
    pillars: [
      {
        title: "Digitale Transformation",
        body: "Eine Diagnose Ihres Unternehmens und eine klare Roadmap: was zuerst zu digitalisieren ist, mit welchen Tools und in welcher Reihenfolge.",
      },
      {
        title: "Berater für Ihre Projekte",
        body: "Wir stellen einen Berater (oder ein dediziertes Team, je nach Projekt) an die Seite Ihres IT-Teams.",
      },
      {
        title: "IT-Projektmanagement",
        body: "Wir steuern und liefern das Projekt von Anfang bis Ende — Umfang, Termine, Dienstleister und Umsetzung.",
      },
      {
        title: "Audit & Modernisierung",
        body: "Wir bewerten Ihre aktuellen Systeme und holen Sie von Excel und Altsystemen zu modernen Web-Tools.",
      },
    ],
    howTitle: "Wie wir arbeiten",
    howPoints: [
      "Wir beginnen mit einer kurzen Diagnose und einem klaren Plan, vor jeder Verpflichtung.",
      "Pro Projekt oder mit einem Berater, der Ihrem Team zugeordnet ist — ganz wie nötig.",
      "Alles wird nach Umfang angeboten. Keine Überraschungen, kein Kleingedrucktes.",
    ],
    forWhoTitle: "Für wen",
    forWho: [
      "KMU und Unternehmen, die modernisieren wollen, aber zu wenig IT-Kapazität haben.",
      "Teams, die einen erfahrenen Berater zur Verstärkung eines Projekts brauchen.",
      "Unternehmen, die in Excel, Papier und alten Systemen feststecken und vorankommen wollen.",
    ],
    quoteNote:
      "Beratung wird immer pro Projekt angeboten — kontaktieren Sie uns für ein Angebot.",
    ctaTitle: "Sprechen wir über Ihr Projekt",
    ctaBody:
      "Schildern Sie die Herausforderung und wir sagen Ihnen ehrlich, wie wir helfen können und was für Ihren Fall sinnvoll ist.",
    ctaButton: "Gespräch anfragen",
  },
};

export function consultingMeta(locale: Locale): {
  title: string;
  description: string;
} {
  const c = COPY[locale];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function ConsultingTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = COPY[locale];
  const path = localePath(locale, "consulting");
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
            <div className="mt-7">
              <CtaLink
                href={localePath(locale, "contact")}
                variant="primary"
                size="lg"
              >
                {c.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Platform preview — one clean, uncropped image */}
      <Section tone="muted" bordered>
        <SectionHeader title={c.galleryTitle} subtitle={c.gallerySubtitle} />
        <Container>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line shadow-card-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Business%20Management%20Platform%20Design/screenshots/01-dash.png"
              alt="NorthSail business management dashboard"
              loading="lazy"
              className="block w-full"
            />
          </div>
        </Container>
      </Section>

      {/* Pillars */}
      <Section>
        <SectionHeader title={c.pillarsTitle} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {c.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <div
                key={p.title}
                className="flex gap-4 rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-headline-sm text-brand">{p.title}</h3>
                  <p className="mt-1.5 text-body-md text-ink-muted">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How we work + who it's for */}
      <Section tone="muted" bordered>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-headline-md text-brand">{c.howTitle}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {c.howPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="text-body-md text-ink-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-headline-md text-brand">{c.forWhoTitle}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {c.forWho.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="text-body-md text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface-low p-8 text-center shadow-card">
            <h2 className="text-headline-md text-brand">{c.ctaTitle}</h2>
            <p className="mx-auto mt-2 max-w-xl text-body-md text-ink-muted">
              {c.ctaBody}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-label-sm text-ink-subtle">
              {c.quoteNote}
            </p>
            <div className="mt-6">
              <CtaLink
                href={localePath(locale, "contact")}
                variant="primary"
                size="lg"
              >
                {c.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
