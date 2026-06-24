"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { LOCALE_LABELS, LOCALES } from "@/lib/i18n/config";
import { INDUSTRY_KEYS, type IndustryKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";

/** Localized labels for the business-type select. */
const INDUSTRY_LABELS: Record<Locale, Record<IndustryKey, string>> = {
  en: {
    restaurants: "Restaurant / cafe",
    hairdressers: "Hairdresser / barber",
    hotels: "Hotel / accommodation",
    gyms: "Gym / studio",
    clinics: "Clinic / local service",
    "local-services": "Local trade / services",
  },
  pt: {
    restaurants: "Restaurante / café",
    hairdressers: "Cabeleireiro / barbearia",
    hotels: "Hotel / alojamento",
    gyms: "Ginásio / estúdio",
    clinics: "Clínica / serviço local",
    "local-services": "Serviços / ofícios locais",
  },
  es: {
    restaurants: "Restaurante / cafetería",
    hairdressers: "Peluquería / barbería",
    hotels: "Hotel / alojamiento",
    gyms: "Gimnasio / estudio",
    clinics: "Clínica / servicio local",
    "local-services": "Oficios / servicios locales",
  },
  fr: {
    restaurants: "Restaurant / café",
    hairdressers: "Coiffeur / barbier",
    hotels: "Hôtel / hébergement",
    gyms: "Salle de sport / studio",
    clinics: "Clinique / service local",
    "local-services": "Artisan / services locaux",
  },
  de: {
    restaurants: "Restaurant / Café",
    hairdressers: "Friseur / Barbier",
    hotels: "Hotel / Unterkunft",
    gyms: "Fitnessstudio / Studio",
    clinics: "Klinik / lokaler Dienst",
    "local-services": "Handwerk / lokale Dienste",
  },
};

export function LeadForm({
  locale,
  defaultIndustry,
}: {
  locale: Locale;
  defaultIndustry?: IndustryKey;
}) {
  const dict = getDictionary(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-surface-lowest p-8 text-center shadow-card">
        <p className="text-body-lg text-brand">{dict.leadSuccess}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-md border border-line bg-surface-lowest px-3 py-2.5 text-body-md text-ink outline-none transition-colors focus:border-brand-accent";
  const labelCls = "mb-1.5 block text-label-md text-ink-muted";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-surface-lowest p-6 shadow-card md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="businessName" className={labelCls}>
            {dict.leadBusinessName}
          </label>
          <input
            id="businessName"
            name="businessName"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="businessType" className={labelCls}>
            {dict.leadBusinessType}
          </label>
          <select
            id="businessType"
            name="businessType"
            defaultValue={defaultIndustry ?? ""}
            required
            className={inputCls}
          >
            <option value="" disabled>
              —
            </option>
            {INDUSTRY_KEYS.map((k) => (
              <option key={k} value={k}>
                {INDUSTRY_LABELS[locale][k]}
              </option>
            ))}
            <option value="other">{dict.leadOther}</option>
          </select>
        </div>
        <div>
          <label htmlFor="country" className={labelCls}>
            {dict.leadCountry}
          </label>
          <input id="country" name="country" className={inputCls} />
        </div>
        <div>
          <label htmlFor="preferredLanguage" className={labelCls}>
            {dict.leadLanguage}
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue={locale}
            className={inputCls}
          >
            {LOCALES.map((l) => (
              <option key={l} value={l}>
                {LOCALE_LABELS[l]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {dict.leadEmail}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            {dict.leadPhone}{" "}
            <span className="text-ink-subtle">({dict.leadOptional})</span>
          </label>
          <input id="phone" name="phone" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="currentSite" className={labelCls}>
          {dict.leadCurrentSite}{" "}
          <span className="text-ink-subtle">({dict.leadOptional})</span>
        </label>
        <input id="currentSite" name="currentSite" className={inputCls} />
      </div>
      <div>
        <label htmlFor="need" className={labelCls}>
          {dict.leadNeed}
        </label>
        <textarea
          id="need"
          name="need"
          rows={3}
          required
          className={inputCls}
        />
      </div>
      {status === "error" && (
        <p className="text-label-md text-destructive">{dict.leadError}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand-accent-hover disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {dict.leadSubmit}
      </button>
    </form>
  );
}
