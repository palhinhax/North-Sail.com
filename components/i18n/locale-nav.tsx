"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import { localePath, onboardingPath, type PageKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { LanguageSwitcher } from "./language-switcher";

/**
 * Locale-aware marketing navigation. `pageKey` is the current page so the
 * language switcher can keep the user on the same logical page.
 */
export function LocaleNav({
  locale,
  pageKey,
}: {
  locale: Locale;
  pageKey: PageKey;
}) {
  const dict = getDictionary(locale);
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashHref = session?.user?.role === "ADMIN" ? "/admin" : "/dashboard";

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md transition-all duration-200",
        scrolled ? "border-line bg-background/95 shadow-sm" : "bg-background/90"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link
            href={localePath(locale, "home")}
            aria-label="NorthSail"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="NorthSail"
              width={140}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <div className="hidden gap-8 md:flex">
            {dict.nav.map((l) => (
              <Link
                key={l.target}
                href={localePath(locale, l.target)}
                className="text-label-md text-ink-muted transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} pageKey={pageKey} />
          {session ? (
            <Link
              href={dashHref}
              className="rounded-md bg-brand-container px-6 py-2.5 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
            >
              {dict.navDashboard}
            </Link>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="hidden rounded-md border border-transparent px-6 py-2.5 text-label-md font-medium text-brand transition-colors hover:border-line hover:bg-surface-low md:inline-block"
              >
                {dict.navLogin}
              </Link>
              <Link
                href={onboardingPath(locale)}
                className="rounded-md bg-brand-container px-6 py-2.5 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
              >
                {dict.navStart}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
