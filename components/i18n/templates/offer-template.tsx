import { ArrowRight, Check } from "lucide-react";
import { Container, Section, CtaLink } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath, onboardingPath } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";
import { CopyCode } from "../copy-code";

/**
 * Launch-offer landing page (`/oferta-1-ano-gratis`). Communicates the
 * "1 year free" promo (worth €449) and shows the discount code to apply at
 * checkout. The Instagram story ad links here.
 *
 * The code must exist as an active DiscountCode (type FREE_PERIOD,
 * durationMonths = 12) for it to actually apply — see prisma seed / admin.
 */
export const OFFER_CODE = "NS-Q54Z-3464";

type Step = { title: string; body: string };

type OfferCopy = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  eyebrow: string;
  h1: string;
  intro: string;
  valuePrefix: string;
  value: string;
  free: string;
  codeLabel: string;
  copy: string;
  copied: string;
  codeHint: string;
  includesTitle: string;
  includes: string[];
  stepsTitle: string;
  steps: Step[];
  ctaButton: string;
  finePrint: string;
};

const COPY: Record<Locale, OfferCopy> = {
  pt: {
    metaTitle: "1 ano de modernização digital grátis — NorthSail",
    metaDescription:
      "Oferta de lançamento: 1 ano completo de modernização digital para a sua PME, no valor de 449€. Website, reservas, painel e suporte incluídos. Vagas limitadas.",
    badge: "Vagas limitadas",
    eyebrow: "Oferta de lançamento · para as primeiras PME",
    h1: "1 ano de modernização digital. Grátis.",
    intro:
      "Website, reservas, painel e automações — montados, alojados e mantidos por nós durante um ano inteiro.",
    valuePrefix: "Oferta no valor de",
    value: "449€",
    free: "GRÁTIS",
    codeLabel: "O seu código",
    copy: "Copiar",
    copied: "Copiado!",
    codeHint:
      "Guarde este código. No checkout, clique em «Tem um código de desconto?» e cole-o.",
    includesTitle: "O que está incluído",
    includes: [
      "Website profissional",
      "Reservas / marcações online",
      "Painel de gestão",
      "Domínio incluído",
      "Alojamento + SSL",
      "Suporte e melhorias todos os meses",
    ],
    stepsTitle: "Como funciona",
    steps: [
      {
        title: "1. Comece em 2 minutos",
        body: "Crie a sua conta e diga-nos como é o seu negócio.",
      },
      {
        title: "2. Escolha o seu plano",
        body: "Recomendamos o plano mínimo que resolve o seu caso.",
      },
      {
        title: "3. Aplique o código",
        body: "No checkout, cole o código e o 1.º ano fica por nossa conta.",
      },
    ],
    ctaButton: "Quero a minha oferta",
    finePrint: "1 ano grátis · tudo incluído · vagas limitadas.",
  },
  en: {
    metaTitle: "1 year of digital modernization, free — NorthSail",
    metaDescription:
      "Launch offer: a full year of digital modernization for your business, worth €449. Website, bookings, dashboard and support included. Limited spots.",
    badge: "Limited spots",
    eyebrow: "Launch offer · for our first businesses",
    h1: "1 year of digital modernization. Free.",
    intro:
      "Website, bookings, dashboard and automations — built, hosted and maintained by us for a whole year.",
    valuePrefix: "Worth",
    value: "€449",
    free: "FREE",
    codeLabel: "Your code",
    copy: "Copy",
    copied: "Copied!",
    codeHint:
      "Save this code. At checkout, click “Have a discount code?” and paste it.",
    includesTitle: "What's included",
    includes: [
      "Professional website",
      "Online bookings / appointments",
      "Management dashboard",
      "Domain included",
      "Hosting + SSL",
      "Support and improvements every month",
    ],
    stepsTitle: "How it works",
    steps: [
      {
        title: "1. Start in 2 minutes",
        body: "Create your account and tell us about your business.",
      },
      {
        title: "2. Choose your plan",
        body: "We recommend the smallest plan that solves your case.",
      },
      {
        title: "3. Apply the code",
        body: "Paste the code at checkout and your first year is on us.",
      },
    ],
    ctaButton: "Claim my offer",
    finePrint: "1 year free · everything included · limited spots.",
  },
  es: {
    metaTitle: "1 año de modernización digital gratis — NorthSail",
    metaDescription:
      "Oferta de lanzamiento: un año completo de modernización digital para tu negocio, valorado en 449€. Web, reservas, panel y soporte incluidos. Plazas limitadas.",
    badge: "Plazas limitadas",
    eyebrow: "Oferta de lanzamiento · para los primeros negocios",
    h1: "1 año de modernización digital. Gratis.",
    intro:
      "Web, reservas, panel y automatizaciones — montados, alojados y mantenidos por nosotros durante un año entero.",
    valuePrefix: "Valorado en",
    value: "449€",
    free: "GRATIS",
    codeLabel: "Tu código",
    copy: "Copiar",
    copied: "¡Copiado!",
    codeHint:
      "Guarda este código. En el checkout, haz clic en «¿Tienes un código de descuento?» y pégalo.",
    includesTitle: "Qué incluye",
    includes: [
      "Web profesional",
      "Reservas / citas online",
      "Panel de gestión",
      "Dominio incluido",
      "Alojamiento + SSL",
      "Soporte y mejoras cada mes",
    ],
    stepsTitle: "Cómo funciona",
    steps: [
      {
        title: "1. Empieza en 2 minutos",
        body: "Crea tu cuenta y cuéntanos cómo es tu negocio.",
      },
      {
        title: "2. Elige tu plan",
        body: "Recomendamos el plan mínimo que resuelve tu caso.",
      },
      {
        title: "3. Aplica el código",
        body: "Pega el código en el checkout y el primer año corre de nuestra cuenta.",
      },
    ],
    ctaButton: "Quiero mi oferta",
    finePrint: "1 año gratis · todo incluido · plazas limitadas.",
  },
  fr: {
    metaTitle: "1 an de modernisation numérique offert — NorthSail",
    metaDescription:
      "Offre de lancement : une année complète de modernisation numérique pour votre entreprise, d'une valeur de 449€. Site, réservations, tableau de bord et support inclus. Places limitées.",
    badge: "Places limitées",
    eyebrow: "Offre de lancement · pour nos premières entreprises",
    h1: "1 an de modernisation numérique. Offert.",
    intro:
      "Site, réservations, tableau de bord et automatisations — conçus, hébergés et maintenus par nous pendant une année entière.",
    valuePrefix: "D'une valeur de",
    value: "449€",
    free: "OFFERT",
    codeLabel: "Votre code",
    copy: "Copier",
    copied: "Copié !",
    codeHint:
      "Gardez ce code. Au paiement, cliquez sur « Vous avez un code promo ? » et collez-le.",
    includesTitle: "Ce qui est inclus",
    includes: [
      "Site web professionnel",
      "Réservations / rendez-vous en ligne",
      "Tableau de bord de gestion",
      "Nom de domaine inclus",
      "Hébergement + SSL",
      "Support et améliorations chaque mois",
    ],
    stepsTitle: "Comment ça marche",
    steps: [
      {
        title: "1. Commencez en 2 minutes",
        body: "Créez votre compte et parlez-nous de votre entreprise.",
      },
      {
        title: "2. Choisissez votre offre",
        body: "Nous recommandons l'offre minimale qui résout votre cas.",
      },
      {
        title: "3. Appliquez le code",
        body: "Collez le code au paiement et votre première année est offerte.",
      },
    ],
    ctaButton: "Je veux mon offre",
    finePrint: "1 an offert · tout inclus · places limitées.",
  },
  de: {
    metaTitle: "1 Jahr digitale Modernisierung gratis — NorthSail",
    metaDescription:
      "Einführungsangebot: ein ganzes Jahr digitale Modernisierung für Ihr Unternehmen im Wert von 449€. Website, Buchungen, Dashboard und Support inklusive. Begrenzte Plätze.",
    badge: "Begrenzte Plätze",
    eyebrow: "Einführungsangebot · für unsere ersten Unternehmen",
    h1: "1 Jahr digitale Modernisierung. Gratis.",
    intro:
      "Website, Buchungen, Dashboard und Automatisierungen — von uns gebaut, gehostet und ein ganzes Jahr lang gepflegt.",
    valuePrefix: "Im Wert von",
    value: "449€",
    free: "GRATIS",
    codeLabel: "Ihr Code",
    copy: "Kopieren",
    copied: "Kopiert!",
    codeHint:
      "Bewahren Sie diesen Code auf. Klicken Sie beim Checkout auf „Haben Sie einen Rabattcode?“ und fügen Sie ihn ein.",
    includesTitle: "Was enthalten ist",
    includes: [
      "Professionelle Website",
      "Online-Buchungen / Termine",
      "Management-Dashboard",
      "Domain inklusive",
      "Hosting + SSL",
      "Support und Verbesserungen jeden Monat",
    ],
    stepsTitle: "So funktioniert's",
    steps: [
      {
        title: "1. In 2 Minuten starten",
        body: "Erstellen Sie Ihr Konto und erzählen Sie uns von Ihrem Unternehmen.",
      },
      {
        title: "2. Wählen Sie Ihren Plan",
        body: "Wir empfehlen den kleinsten Plan, der Ihren Fall löst.",
      },
      {
        title: "3. Code anwenden",
        body: "Fügen Sie den Code beim Checkout ein — das erste Jahr geht auf uns.",
      },
    ],
    ctaButton: "Ich will mein Angebot",
    finePrint: "1 Jahr gratis · alles inklusive · begrenzte Plätze.",
  },
};

export function offerMeta(locale: Locale): {
  title: string;
  description: string;
} {
  const c = COPY[locale];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function OfferTemplate({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = COPY[locale];
  const path = localePath(locale, "offer");
  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-16 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-label-sm font-semibold"
                style={{ backgroundColor: "#FCEBEA", color: "#E5484D" }}
              >
                {c.badge}
              </span>
              <span className="text-label-md font-semibold text-brand-accent">
                {c.eyebrow}
              </span>
            </div>
            <h1 className="mt-5 text-display-sm text-brand md:text-display-lg">
              {c.h1}
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted">{c.intro}</p>
          </div>

          {/* Offer + code card */}
          <div className="mt-10 max-w-3xl rounded-2xl bg-brand p-8 shadow-card md:p-10">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-display-sm font-extrabold text-white md:text-display-lg">
                {c.free}
              </span>
              <span className="text-body-md text-white/70">
                {c.valuePrefix}{" "}
                <span className="text-white/60 line-through">{c.value}</span>
              </span>
            </div>
            <p className="mt-2 text-label-md font-medium text-white/80">
              {c.codeLabel}
            </p>
            <div className="mt-3">
              <CopyCode
                code={OFFER_CODE}
                copyLabel={c.copy}
                copiedLabel={c.copied}
              />
            </div>
            <p className="text-body-sm mt-4 text-white/70">{c.codeHint}</p>
            <div className="mt-6">
              <CtaLink
                href={onboardingPath(locale)}
                variant="outline"
                size="lg"
              >
                {c.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
            <p className="text-body-sm mt-4 text-white/60">{c.finePrint}</p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Includes */}
            <div>
              <h2 className="text-headline-md text-brand">{c.includesTitle}</h2>
              <ul className="mt-6 space-y-3">
                {c.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-md text-ink-muted"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-teal-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <h2 className="text-headline-md text-brand">{c.stepsTitle}</h2>
              <ol className="mt-6 space-y-5">
                {c.steps.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-line bg-surface-lowest p-5 shadow-card"
                  >
                    <p className="text-body-lg font-semibold text-brand">
                      {step.title}
                    </p>
                    <p className="mt-1 text-body-md text-ink-muted">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <CtaLink href={onboardingPath(locale)} variant="primary" size="lg">
              {c.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
