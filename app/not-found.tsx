import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Home, LifeBuoy } from "lucide-react";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { getNotFoundCopy } from "@/lib/content/not-found";

export default function NotFound() {
  // `not-found.tsx` doesn't receive route params, so the locale comes from the
  // `x-locale` header that the middleware stamps on every request.
  const headerLocale = headers().get("x-locale");
  const locale: Locale = isLocale(headerLocale ?? "")
    ? (headerLocale as Locale)
    : DEFAULT_LOCALE;
  const t = getNotFoundCopy(locale);

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="sticky top-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-2 px-6">
          <Image
            src="/logo.png"
            alt="NorthSail"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-headline-sm font-bold text-brand">
            NorthSail
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center p-6 md:p-16">
        <div className="flex w-full max-w-2xl flex-col items-center rounded-2xl border border-line bg-surface-lowest p-8 text-center shadow-card md:p-16">
          <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-line bg-surface-low md:h-40 md:w-40">
            <Image
              src="/logo.png"
              alt="NorthSail"
              width={96}
              height={96}
              className="h-20 w-20 opacity-90 md:h-24 md:w-24"
            />
          </div>

          <h1 className="text-display-sm font-bold text-brand md:text-display-lg">
            {t.title}
          </h1>
          <p className="mt-3 max-w-md text-body-lg text-ink-muted">
            {t.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-container px-6 py-3 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
            >
              <Home className="h-5 w-5" />
              {t.home}
            </Link>
            <a
              href="mailto:ajuda@north-sail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface-lowest px-6 py-3 text-label-md font-medium text-brand transition-colors hover:bg-surface-low"
            >
              <LifeBuoy className="h-5 w-5" />
              {t.help}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
