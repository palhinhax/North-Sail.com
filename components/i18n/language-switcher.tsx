"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n/config";
import { localePath, type PageKey } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";

/**
 * Language switcher that keeps the user on the same logical page across
 * locales (uses the page key to resolve each locale's slug).
 */
export function LanguageSwitcher({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: PageKey;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-2 text-label-md text-ink-muted transition-colors hover:text-brand"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 w-44 overflow-hidden rounded-md border border-line bg-surface-lowest py-1 shadow-card-lg"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={localePath(l, pageKey)}
                hrefLang={l}
                role="option"
                aria-selected={l === locale}
                className={cn(
                  "block px-4 py-2 text-label-md transition-colors hover:bg-surface-low",
                  l === locale ? "font-semibold text-brand" : "text-ink-muted"
                )}
              >
                {LOCALE_LABELS[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
