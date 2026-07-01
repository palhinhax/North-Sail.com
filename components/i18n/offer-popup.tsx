"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Gift, X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";

/**
 * Welcome pop-up promoting the launch offer. Shows once per visitor (a flag is
 * stored in localStorage) after a short delay. Mounted only on the homepage.
 */
const STORAGE_KEY = "ns_offer_popup_seen_v1";

type PopupCopy = {
  badge: string;
  title: string;
  body: string;
  cta: string;
  dismiss: string;
  close: string;
};

const COPY: Record<Locale, PopupCopy> = {
  pt: {
    badge: "Vagas limitadas",
    title: "1 ano de modernização digital. Grátis.",
    body: "Para as primeiras PME. No valor de 449€ — website, reservas, painel e suporte incluídos.",
    cta: "Ver a oferta",
    dismiss: "Agora não",
    close: "Fechar",
  },
  en: {
    badge: "Limited spots",
    title: "1 year of digital modernization. Free.",
    body: "For our first businesses. Worth €449 — website, bookings, dashboard and support included.",
    cta: "See the offer",
    dismiss: "Not now",
    close: "Close",
  },
  es: {
    badge: "Plazas limitadas",
    title: "1 año de modernización digital. Gratis.",
    body: "Para los primeros negocios. Valorado en 449€ — web, reservas, panel y soporte incluidos.",
    cta: "Ver la oferta",
    dismiss: "Ahora no",
    close: "Cerrar",
  },
  fr: {
    badge: "Places limitées",
    title: "1 an de modernisation numérique. Offert.",
    body: "Pour nos premières entreprises. D'une valeur de 449€ — site, réservations, tableau de bord et support inclus.",
    cta: "Voir l'offre",
    dismiss: "Pas maintenant",
    close: "Fermer",
  },
  de: {
    badge: "Begrenzte Plätze",
    title: "1 Jahr digitale Modernisierung. Gratis.",
    body: "Für unsere ersten Unternehmen. Im Wert von 449€ — Website, Buchungen, Dashboard und Support inklusive.",
    cta: "Angebot ansehen",
    dismiss: "Jetzt nicht",
    close: "Schließen",
  },
};

export function OfferPopup({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const c = COPY[locale];

  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage blocked — treat as not seen */
    }
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 1600);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
    >
      <button
        type="button"
        aria-label={c.close}
        onClick={dismiss}
        className="absolute inset-0 bg-brand/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-line bg-background p-7 shadow-card">
        <button
          type="button"
          aria-label={c.close}
          onClick={dismiss}
          className="absolute right-4 top-4 text-ink-subtle transition-colors hover:text-brand"
        >
          <X className="h-5 w-5" />
        </button>

        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label-sm font-semibold"
          style={{ backgroundColor: "#FCEBEA", color: "#E5484D" }}
        >
          <Gift className="h-4 w-4" />
          {c.badge}
        </span>

        <h2 className="mt-4 text-headline-md text-brand">{c.title}</h2>
        <p className="mt-2 text-body-md text-ink-muted">{c.body}</p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={localePath(locale, "offer")}
            onClick={dismiss}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3.5 text-label-md font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-hover"
          >
            {c.cta}
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="text-label-md font-medium text-ink-subtle transition-colors hover:text-brand"
          >
            {c.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
