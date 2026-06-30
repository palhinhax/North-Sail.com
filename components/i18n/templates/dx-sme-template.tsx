import { Check, ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  SectionHeader,
  CtaLink,
  FaqItem,
} from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";

/**
 * Long-tail SEO landing page: "digital transformation for small/medium
 * businesses". Targets a winnable, qualified query (vs the hyper-competitive
 * head term) and ships FAQ structured data for rich results + AI answers.
 */
type Faq = { question: string; answer: string };
type DxCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problemTitle: string;
  problems: string[];
  approachTitle: string;
  approach: { title: string; body: string }[];
  outcomesTitle: string;
  outcomes: string[];
  faqTitle: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const COPY: Record<Locale, DxCopy> = {
  pt: {
    metaTitle: "Transformação digital para PME — NorthSail",
    metaDescription:
      "Transformação digital simples e acessível para PME e pequenos negócios: do Excel e do papel para ferramentas web, com consultores dedicados e preço sob orçamento.",
    h1: "Transformação digital para PME, sem complicar",
    intro:
      "Não precisas de uma grande consultora nem de um orçamento de milhares para modernizar o teu negócio. Ajudamos PME e pequenos negócios a sair dos processos manuais e a trabalhar melhor online — passo a passo.",
    problemTitle: "Reconheces algum destes?",
    problems: [
      "Geres tudo com Excel, papel, telefone e WhatsApp — e perde-se informação.",
      "Tarefas repetitivas roubam horas que deviam ir para o cliente.",
      "Não há um sítio único que mostre como está o negócio.",
    ],
    approachTitle: "Como fazemos",
    approach: [
      {
        title: "1. Diagnóstico",
        body: "Olhamos para os teus processos e dizemos o que vale a pena digitalizar primeiro.",
      },
      {
        title: "2. Plano claro",
        body: "Um roadmap simples, por ordem de impacto, sem jargão e sem compromissos antecipados.",
      },
      {
        title: "3. Execução",
        body: "Construímos e implementamos — site, reservas, portais, automações — e alocamos um consultor à tua equipa se precisares.",
      },
    ],
    outcomesTitle: "O que ganhas",
    outcomes: [
      "Menos trabalho manual e menos erros.",
      "Tudo organizado e acessível num só sítio.",
      "Um negócio mais profissional e preparado para crescer.",
    ],
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        question: "Quanto custa a transformação digital para uma PME?",
        answer:
          "Depende do âmbito. Trabalhamos sob orçamento, à medida de cada projeto, e começamos sempre por um diagnóstico antes de qualquer compromisso. Para presença e ferramentas simples, temos planos mensais a partir de poucos euros.",
      },
      {
        question: "Quanto tempo demora?",
        answer:
          "Um site ou uma ferramenta essencial fica pronto em dias. Projetos maiores são faseados por ordem de impacto, para veres resultados cedo.",
      },
      {
        question: "Preciso de equipa técnica?",
        answer:
          "Não. Tratamos da parte técnica por ti — alojamento, segurança e manutenção incluídos — e, se precisares, alocamos um consultor à tua equipa.",
      },
      {
        question: "Os dados são meus?",
        answer:
          "Sim. Os teus dados são teus e podes exportá-los. Explicamos tudo de forma simples, sem letras pequenas.",
      },
    ],
    ctaTitle: "Damos o primeiro passo juntos?",
    ctaBody:
      "Conta-nos como geres o negócio hoje e dizemos-te, com franqueza, por onde começar.",
    ctaButton: "Falar connosco",
  },
  en: {
    metaTitle: "Digital transformation for small business — NorthSail",
    metaDescription:
      "Simple, affordable digital transformation for SMEs and small businesses: from spreadsheets and paper to web tools, with dedicated consultants and pricing per quote.",
    h1: "Digital transformation for small business, made simple",
    intro:
      "You don't need a big consultancy or a budget of thousands to modernise your business. We help SMEs and small businesses move off manual processes and work better online — step by step.",
    problemTitle: "Recognise any of these?",
    problems: [
      "You run everything on spreadsheets, paper, phone and WhatsApp — and things slip.",
      "Repetitive tasks steal hours that should go to your customers.",
      "There's no single place that shows how the business is doing.",
    ],
    approachTitle: "How we do it",
    approach: [
      {
        title: "1. Diagnosis",
        body: "We look at your processes and tell you what's worth digitising first.",
      },
      {
        title: "2. Clear plan",
        body: "A simple roadmap, ordered by impact, no jargon and no upfront commitment.",
      },
      {
        title: "3. Execution",
        body: "We build and roll it out — website, bookings, portals, automation — and embed a consultant in your team if you need one.",
      },
    ],
    outcomesTitle: "What you get",
    outcomes: [
      "Less manual work and fewer errors.",
      "Everything organised and reachable in one place.",
      "A more professional business, ready to grow.",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How much does digital transformation for an SME cost?",
        answer:
          "It depends on the scope. We quote per project, tailored to each case, and always start with a diagnosis before any commitment. For a presence and simple tools, monthly plans start at a few euros.",
      },
      {
        question: "How long does it take?",
        answer:
          "A website or one essential tool is ready in days. Larger projects are phased by impact so you see results early.",
      },
      {
        question: "Do I need a technical team?",
        answer:
          "No. We handle the technical side — hosting, security and maintenance included — and embed a consultant in your team if needed.",
      },
      {
        question: "Do I own the data?",
        answer:
          "Yes. Your data is yours and you can export it. We explain everything plainly, no small print.",
      },
    ],
    ctaTitle: "Shall we take the first step together?",
    ctaBody:
      "Tell us how you run your business today and we'll tell you honestly where to start.",
    ctaButton: "Get in touch",
  },
  es: {
    metaTitle: "Transformación digital para pymes — NorthSail",
    metaDescription:
      "Transformación digital simple y asequible para pymes y pequeños negocios: del Excel y el papel a herramientas web, con consultores dedicados y precio a presupuesto.",
    h1: "Transformación digital para pymes, sin complicaciones",
    intro:
      "No necesitas una gran consultora ni un presupuesto de miles para modernizar tu negocio. Ayudamos a pymes y pequeños negocios a salir de los procesos manuales y a trabajar mejor online — paso a paso.",
    problemTitle: "¿Te suena alguno de estos?",
    problems: [
      "Gestionas todo con Excel, papel, teléfono y WhatsApp — y se pierde información.",
      "Las tareas repetitivas roban horas que deberían ir al cliente.",
      "No hay un único lugar que muestre cómo va el negocio.",
    ],
    approachTitle: "Cómo lo hacemos",
    approach: [
      {
        title: "1. Diagnóstico",
        body: "Miramos tus procesos y te decimos qué conviene digitalizar primero.",
      },
      {
        title: "2. Plan claro",
        body: "Una hoja de ruta simple, por orden de impacto, sin jerga ni compromisos previos.",
      },
      {
        title: "3. Ejecución",
        body: "Construimos e implementamos — web, reservas, portales, automatizaciones — e integramos un consultor en tu equipo si lo necesitas.",
      },
    ],
    outcomesTitle: "Qué ganas",
    outcomes: [
      "Menos trabajo manual y menos errores.",
      "Todo organizado y accesible en un solo lugar.",
      "Un negocio más profesional y listo para crecer.",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Cuánto cuesta la transformación digital para una pyme?",
        answer:
          "Depende del alcance. Trabajamos a presupuesto, a medida de cada proyecto, y empezamos siempre con un diagnóstico antes de cualquier compromiso. Para presencia y herramientas simples, hay planes mensuales desde pocos euros.",
      },
      {
        question: "¿Cuánto tarda?",
        answer:
          "Una web o una herramienta esencial está lista en días. Los proyectos mayores se hacen por fases según el impacto.",
      },
      {
        question: "¿Necesito equipo técnico?",
        answer:
          "No. Nos encargamos de la parte técnica — alojamiento, seguridad y mantenimiento incluidos — e integramos un consultor en tu equipo si hace falta.",
      },
      {
        question: "¿Los datos son míos?",
        answer:
          "Sí. Tus datos son tuyos y puedes exportarlos. Lo explicamos todo de forma clara, sin letra pequeña.",
      },
    ],
    ctaTitle: "¿Damos el primer paso juntos?",
    ctaBody:
      "Cuéntanos cómo gestionas tu negocio hoy y te diremos con franqueza por dónde empezar.",
    ctaButton: "Contactar",
  },
  fr: {
    metaTitle: "Transformation numérique pour PME — NorthSail",
    metaDescription:
      "Transformation numérique simple et abordable pour PME et petites entreprises : d'Excel et du papier aux outils web, avec des consultants dédiés et un prix sur devis.",
    h1: "Transformation numérique pour PME, sans complications",
    intro:
      "Pas besoin d'une grande agence ni d'un budget de milliers d'euros pour moderniser votre entreprise. Nous aidons les PME et petites entreprises à quitter les processus manuels et à mieux travailler en ligne — étape par étape.",
    problemTitle: "Vous reconnaissez l'un de ces points ?",
    problems: [
      "Vous gérez tout avec Excel, papier, téléphone et WhatsApp — et des choses se perdent.",
      "Les tâches répétitives volent des heures qui devraient aller au client.",
      "Aucun endroit unique ne montre l'état de l'entreprise.",
    ],
    approachTitle: "Comment nous procédons",
    approach: [
      {
        title: "1. Diagnostic",
        body: "Nous examinons vos processus et vous disons quoi numériser d'abord.",
      },
      {
        title: "2. Plan clair",
        body: "Une feuille de route simple, par ordre d'impact, sans jargon ni engagement préalable.",
      },
      {
        title: "3. Exécution",
        body: "Nous construisons et déployons — site, réservations, portails, automatisation — et intégrons un consultant à votre équipe si besoin.",
      },
    ],
    outcomesTitle: "Ce que vous gagnez",
    outcomes: [
      "Moins de travail manuel et moins d'erreurs.",
      "Tout organisé et accessible au même endroit.",
      "Une entreprise plus professionnelle, prête à croître.",
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "Combien coûte la transformation numérique pour une PME ?",
        answer:
          "Cela dépend du périmètre. Nous établissons un devis, sur mesure, et commençons toujours par un diagnostic avant tout engagement. Pour une présence et des outils simples, les forfaits mensuels démarrent à quelques euros.",
      },
      {
        question: "Combien de temps cela prend-il ?",
        answer:
          "Un site ou un outil essentiel est prêt en quelques jours. Les projets plus grands sont réalisés par phases selon l'impact.",
      },
      {
        question: "Ai-je besoin d'une équipe technique ?",
        answer:
          "Non. Nous gérons la partie technique — hébergement, sécurité et maintenance inclus — et intégrons un consultant à votre équipe si nécessaire.",
      },
      {
        question: "Les données m'appartiennent-elles ?",
        answer:
          "Oui. Vos données sont les vôtres et vous pouvez les exporter. Nous expliquons tout clairement, sans petits caractères.",
      },
    ],
    ctaTitle: "Faisons le premier pas ensemble ?",
    ctaBody:
      "Dites-nous comment vous gérez votre entreprise aujourd'hui et nous vous dirons honnêtement par où commencer.",
    ctaButton: "Nous contacter",
  },
  de: {
    metaTitle: "Digitale Transformation für KMU — NorthSail",
    metaDescription:
      "Einfache, bezahlbare digitale Transformation für KMU und kleine Betriebe: von Excel und Papier zu Web-Tools, mit dedizierten Beratern und Preis pro Projekt.",
    h1: "Digitale Transformation für KMU, ganz einfach",
    intro:
      "Sie brauchen weder eine große Beratung noch ein Budget von Tausenden, um Ihr Unternehmen zu modernisieren. Wir helfen KMU und kleinen Betrieben, manuelle Prozesse hinter sich zu lassen und online besser zu arbeiten — Schritt für Schritt.",
    problemTitle: "Kommt Ihnen etwas davon bekannt vor?",
    problems: [
      "Sie steuern alles mit Excel, Papier, Telefon und WhatsApp — und es geht etwas verloren.",
      "Wiederkehrende Aufgaben rauben Stunden, die dem Kunden gehören sollten.",
      "Es gibt keinen einzigen Ort, der zeigt, wie es dem Unternehmen geht.",
    ],
    approachTitle: "So gehen wir vor",
    approach: [
      {
        title: "1. Diagnose",
        body: "Wir sehen uns Ihre Prozesse an und sagen, was sich zuerst zu digitalisieren lohnt.",
      },
      {
        title: "2. Klarer Plan",
        body: "Eine einfache Roadmap, nach Wirkung geordnet, ohne Fachjargon und ohne Vorab-Verpflichtung.",
      },
      {
        title: "3. Umsetzung",
        body: "Wir bauen und führen ein — Website, Buchungen, Portale, Automatisierung — und binden bei Bedarf einen Berater in Ihr Team ein.",
      },
    ],
    outcomesTitle: "Was Sie gewinnen",
    outcomes: [
      "Weniger manuelle Arbeit und weniger Fehler.",
      "Alles organisiert und an einem Ort erreichbar.",
      "Ein professionelleres Unternehmen, bereit zu wachsen.",
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Was kostet digitale Transformation für ein KMU?",
        answer:
          "Das hängt vom Umfang ab. Wir erstellen ein Angebot pro Projekt und beginnen immer mit einer Diagnose vor jeder Verpflichtung. Für Präsenz und einfache Tools starten Monatspläne bei wenigen Euro.",
      },
      {
        question: "Wie lange dauert es?",
        answer:
          "Eine Website oder ein essenzielles Tool ist in Tagen fertig. Größere Projekte werden nach Wirkung in Phasen umgesetzt.",
      },
      {
        question: "Brauche ich ein technisches Team?",
        answer:
          "Nein. Wir übernehmen die Technik — Hosting, Sicherheit und Wartung inklusive — und binden bei Bedarf einen Berater in Ihr Team ein.",
      },
      {
        question: "Gehören mir die Daten?",
        answer:
          "Ja. Ihre Daten gehören Ihnen und Sie können sie exportieren. Wir erklären alles klar, ohne Kleingedrucktes.",
      },
    ],
    ctaTitle: "Machen wir den ersten Schritt gemeinsam?",
    ctaBody:
      "Erzählen Sie uns, wie Sie Ihr Unternehmen heute führen, und wir sagen Ihnen ehrlich, wo Sie anfangen sollten.",
    ctaButton: "Kontakt aufnehmen",
  },
};

export function dxSmeMeta(locale: Locale): {
  title: string;
  description: string;
} {
  const c = COPY[locale];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function DxSmeTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = COPY[locale];
  const path = localePath(locale, "dx-sme");
  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(c.faqs)]} />
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

      {/* Problem + outcomes */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-headline-md text-brand">{c.problemTitle}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {c.problems.map((p) => (
                  <li key={p} className="text-body-md text-ink-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-headline-md text-brand">{c.outcomesTitle}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="text-body-md text-ink-muted">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section tone="muted" bordered>
        <SectionHeader title={c.approachTitle} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {c.approach.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
            >
              <h3 className="text-headline-sm text-brand">{step.title}</h3>
              <p className="mt-2 text-body-md text-ink-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title={c.faqTitle} />
        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {c.faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="muted" bordered>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface-low p-8 text-center shadow-card">
            <h2 className="text-headline-md text-brand">{c.ctaTitle}</h2>
            <p className="mx-auto mt-2 max-w-xl text-body-md text-ink-muted">
              {c.ctaBody}
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
