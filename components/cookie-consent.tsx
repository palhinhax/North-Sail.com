"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/routes";

const STORAGE_KEY = "ns-cookie-consent"; // "granted" | "denied"

type Consent = "granted" | "denied";

interface ConsentCopy {
  aria: string;
  before: string;
  privacy: string;
  after: string;
  accept: string;
  reject: string;
}

const COPY: Record<Locale, ConsentCopy> = {
  en: {
    aria: "Cookie consent",
    before:
      "We use measurement cookies (Google Analytics) to understand how the site is used and improve it. You can accept or decline. See our ",
    privacy: "privacy policy",
    after: ".",
    accept: "Accept",
    reject: "Decline",
  },
  pt: {
    aria: "Consentimento de cookies",
    before:
      "Usamos cookies de medição (Google Analytics) para perceber como o site é utilizado e melhorá-lo. Pode aceitar ou recusar. Consulte a nossa ",
    privacy: "política de privacidade",
    after: ".",
    accept: "Aceitar",
    reject: "Recusar",
  },
  es: {
    aria: "Consentimiento de cookies",
    before:
      "Usamos cookies de medición (Google Analytics) para entender cómo se usa el sitio y mejorarlo. Puedes aceptar o rechazar. Consulta nuestra ",
    privacy: "política de privacidad",
    after: ".",
    accept: "Aceptar",
    reject: "Rechazar",
  },
  fr: {
    aria: "Consentement aux cookies",
    before:
      "Nous utilisons des cookies de mesure (Google Analytics) pour comprendre comment le site est utilisé et l'améliorer. Vous pouvez accepter ou refuser. Consultez notre ",
    privacy: "politique de confidentialité",
    after: ".",
    accept: "Accepter",
    reject: "Refuser",
  },
  de: {
    aria: "Cookie-Einwilligung",
    before:
      "Wir verwenden Mess-Cookies (Google Analytics), um zu verstehen, wie die Website genutzt wird, und sie zu verbessern. Sie können zustimmen oder ablehnen. Siehe unsere ",
    privacy: "Datenschutzerklärung",
    after: ".",
    accept: "Zustimmen",
    reject: "Ablehnen",
  },
};

function applyConsent(consent: Consent) {
  // gtag is defined by the Google tag scripts in the root layout.
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: consent,
      ad_storage: consent,
      ad_user_data: consent,
      ad_personalization: consent,
    });
  }
}

/**
 * Minimal, multilingual GDPR cookie-consent banner wired to Google Consent
 * Mode v2. Consent defaults to "denied" (set in the root layout); this banner
 * lets the user grant it. The choice is remembered in localStorage and
 * re-applied on every load. The language follows the current locale in the URL.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const segment = pathname?.split("/").filter(Boolean)[0];
  const locale: Locale =
    segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
  const t = COPY[locale];

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === "granted") {
      applyConsent("granted");
    } else if (stored !== "denied") {
      setVisible(true);
    }
  }, []);

  function choose(consent: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      /* ignore */
    }
    applyConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.aria}
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          {t.before}
          <Link
            href={localePath(locale, "legal:privacy")}
            className="font-medium text-[#2F6BFF] underline underline-offset-2"
          >
            {t.privacy}
          </Link>
          {t.after}
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-[#0A2540] transition-colors hover:bg-gray-50"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-[#2F6BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2558d6]"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
