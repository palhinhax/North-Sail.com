import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";

/**
 * Testimonials section. Renders ONLY when there is at least one real
 * testimonial — an empty section is better than invented quotes.
 *
 * Add entries to TESTIMONIALS as you collect real ones (ask permission to use
 * the name and business). Keep them concrete: a sentence the owner actually
 * said, plus their name and business.
 */
type Testimonial = {
  quote: string;
  name: string;
  business: string;
};

const TESTIMONIALS: Testimonial[] = [
  // {
  //   quote: "Deixei de andar a responder a mensagens o dia todo. As pessoas marcam sozinhas.",
  //   name: "Ana",
  //   business: "Studio Norte, Braga",
  // },
];

const TITLE: Record<Locale, string> = {
  pt: "O que dizem os nossos clientes",
  en: "What our clients say",
  es: "Lo que dicen nuestros clientes",
  fr: "Ce que disent nos clients",
  de: "Was unsere Kunden sagen",
};

export function TestimonialsSection({ locale }: { locale: Locale }) {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="muted" bordered>
      <SectionHeader title={TITLE[locale]} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={`${t.name}-${t.business}`}
            className="flex flex-col rounded-2xl border border-line bg-surface-lowest p-6 shadow-card"
          >
            <Quote className="h-6 w-6 text-brand-accent" aria-hidden />
            <blockquote className="mt-3 flex-1 text-body-md text-brand">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-label-md text-ink-muted">
              <span className="font-semibold text-brand">{t.name}</span> ·{" "}
              {t.business}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
