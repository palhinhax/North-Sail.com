import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";

/**
 * Homepage band that introduces the consulting / digital-transformation axis
 * and links to the full /consulting page. Inline copy, self-contained.
 */
const COPY: Record<
  Locale,
  { kicker: string; title: string; body: string; tags: string[]; cta: string }
> = {
  pt: {
    kicker: "Consultoria",
    title: "Precisas de mais do que um site? Também fazemos consultoria.",
    body: "Transformação digital, gestão de projetos de IT e consultores alocados à tua equipa. Do plano à entrega, sob orçamento.",
    tags: [
      "Transformação digital",
      "Consultores dedicados",
      "Gestão de projetos",
      "Auditoria e modernização",
    ],
    cta: "Conhecer a consultoria",
  },
  en: {
    kicker: "Consulting",
    title: "Need more than a website? We also consult.",
    body: "Digital transformation, IT project management and consultants embedded in your team. From plan to delivery, quoted per project.",
    tags: [
      "Digital transformation",
      "Dedicated consultants",
      "Project management",
      "Audit & modernisation",
    ],
    cta: "Explore consulting",
  },
  es: {
    kicker: "Consultoría",
    title: "¿Necesitas más que una web? También asesoramos.",
    body: "Transformación digital, gestión de proyectos de IT y consultores integrados en tu equipo. Del plan a la entrega, a presupuesto.",
    tags: [
      "Transformación digital",
      "Consultores dedicados",
      "Gestión de proyectos",
      "Auditoría y modernización",
    ],
    cta: "Ver la consultoría",
  },
  fr: {
    kicker: "Conseil",
    title: "Besoin de plus qu'un site ? Nous conseillons aussi.",
    body: "Transformation numérique, gestion de projets IT et consultants intégrés à votre équipe. Du plan à la livraison, sur devis.",
    tags: [
      "Transformation numérique",
      "Consultants dédiés",
      "Gestion de projet",
      "Audit & modernisation",
    ],
    cta: "Découvrir le conseil",
  },
  de: {
    kicker: "Beratung",
    title: "Mehr als eine Website nötig? Wir beraten auch.",
    body: "Digitale Transformation, IT-Projektmanagement und Berater in Ihrem Team. Vom Plan zur Lieferung, pro Projekt.",
    tags: [
      "Digitale Transformation",
      "Dedizierte Berater",
      "Projektmanagement",
      "Audit & Modernisierung",
    ],
    cta: "Beratung entdecken",
  },
};

export function ConsultingBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="border-y border-line bg-brand py-16 text-white">
      <Container>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-label-sm font-bold uppercase tracking-wider text-brand-accent">
              {c.kicker}
            </span>
            <h2 className="mt-3 text-display-sm font-bold">{c.title}</h2>
            <p className="mt-3 text-body-lg text-white/80">{c.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 px-3 py-1 text-label-sm text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={localePath(locale, "consulting")}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-6 py-3.5 text-label-md font-semibold text-brand shadow-sm transition-transform hover:scale-[1.02]"
          >
            {c.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
