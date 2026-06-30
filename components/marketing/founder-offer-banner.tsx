import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";

/**
 * Slim "founding customer" offer band shown at the top of every public
 * marketing page (below the fixed nav). It links to the contact page so the
 * visitor starts a conversation — the fastest path to the first clients.
 *
 * Edit the copy below freely. Keep the offer concrete and time/scarcity-bound
 * (e.g. "first businesses", "48h", "free setup") — that is what removes the
 * fear of an unknown brand.
 */
const COPY: Record<Locale, { text: string; cta: string }> = {
  pt: {
    text: "Oferta de fundador: para os primeiros negócios, site no ar em 48h e setup grátis.",
    cta: "Quero saber mais",
  },
  en: {
    text: "Founding offer: for our first businesses, site live in 48h and free setup.",
    cta: "Tell me more",
  },
  es: {
    text: "Oferta de fundador: para los primeros negocios, web online en 48h y configuración gratis.",
    cta: "Quiero saber más",
  },
  fr: {
    text: "Offre de lancement : pour nos premiers clients, site en ligne en 48h et installation offerte.",
    cta: "En savoir plus",
  },
  de: {
    text: "Gründerangebot: für die ersten Betriebe, Website in 48h online und kostenlose Einrichtung.",
    cta: "Mehr erfahren",
  },
};

export function FounderOfferBanner({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Link
      href={localePath(locale, "contact")}
      className="group block border-b border-line bg-brand text-white"
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2.5 text-center text-label-md">
        <Sparkles className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
        <span className="font-medium">{c.text}</span>
        <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
          {c.cta}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
