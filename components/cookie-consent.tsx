"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ns-cookie-consent"; // "granted" | "denied"

type Consent = "granted" | "denied";

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
 * Minimal GDPR cookie-consent banner wired to Google Consent Mode v2.
 * Consent defaults to "denied" (set in the root layout); this banner lets the
 * user grant it. The choice is remembered in localStorage and re-applied on
 * every load.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

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
      // No choice yet — show the banner.
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
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          Usamos cookies de medição (Google Analytics) para perceber como o site
          é utilizado e melhorá-lo. Pode aceitar ou recusar. Consulte a nossa{" "}
          <a
            href="/pt/privacidade"
            className="font-medium text-[#2F6BFF] underline underline-offset-2"
          >
            política de privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-[#0A2540] transition-colors hover:bg-gray-50"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-[#2F6BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2558d6]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
