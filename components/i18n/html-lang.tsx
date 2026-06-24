"use client";

import { useEffect } from "react";
import { HREFLANG, type Locale } from "@/lib/i18n/config";

/**
 * The root layout owns the <html> element, so localized subtrees set the
 * document language on the client to keep `<html lang>` correct per locale.
 * Server-rendered SEO signals (hreflang alternates, canonical, og:locale) are
 * emitted independently via metadata, so crawlers get correct language data
 * regardless of JS execution.
 */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = HREFLANG[locale];
  }, [locale]);
  return null;
}
