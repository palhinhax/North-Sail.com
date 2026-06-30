import { Section, SectionHeader } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";

/**
 * "Inside the platform" gallery — a few framed screenshots that give the
 * marketing pages real product life. Add/replace entries in IMAGES; captions
 * are positional (one per image, per locale).
 */
const IMAGES = [
  "/Business%20Management%20Platform%20Design/screenshots/01-dash.png",
  "/Business%20Management%20Platform%20Design/screenshots/02-feat.png",
  "/Business%20Management%20Platform%20Design/screenshots/02-dash.png",
  "/Business%20Management%20Platform%20Design/screenshots/03-feat.png",
];

const COPY: Record<
  Locale,
  { title: string; subtitle: string; captions: string[] }
> = {
  pt: {
    title: "Dentro da plataforma",
    subtitle: "Exemplos reais do tipo de painéis e fluxos que construímos.",
    captions: [
      "Visão geral da empresa",
      "Compras e fornecedores",
      "Vendas e recrutamento",
      "Vista executiva",
    ],
  },
  en: {
    title: "Inside the platform",
    subtitle: "Real examples of the dashboards and flows we build.",
    captions: [
      "Company overview",
      "Purchases & suppliers",
      "Sales & recruitment",
      "Executive view",
    ],
  },
  es: {
    title: "Dentro de la plataforma",
    subtitle: "Ejemplos reales del tipo de paneles y flujos que construimos.",
    captions: [
      "Visión general",
      "Compras y proveedores",
      "Ventas y contratación",
      "Vista ejecutiva",
    ],
  },
  fr: {
    title: "Au cœur de la plateforme",
    subtitle: "Des exemples réels des tableaux de bord et flux que nous créons.",
    captions: [
      "Vue d'ensemble",
      "Achats et fournisseurs",
      "Ventes et recrutement",
      "Vue exécutive",
    ],
  },
  de: {
    title: "Ein Blick in die Plattform",
    subtitle: "Echte Beispiele der Dashboards und Abläufe, die wir bauen.",
    captions: [
      "Unternehmensüberblick",
      "Einkauf & Lieferanten",
      "Vertrieb & Recruiting",
      "Executive-Ansicht",
    ],
  },
};

export function PlatformGallery({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Section tone="muted" bordered>
      <SectionHeader title={c.title} subtitle={c.subtitle} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {IMAGES.map((src, i) => (
          <figure
            key={src}
            className="overflow-hidden rounded-2xl border border-line bg-surface-lowest shadow-card"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-surface-low px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-highest" />
              <figcaption className="ml-2 truncate text-label-sm text-ink-subtle">
                {c.captions[i]}
              </figcaption>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={c.captions[i]}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
