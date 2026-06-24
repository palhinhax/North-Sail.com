"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#setores", label: "Setores" },
  { href: "/#planos", label: "Planos" },
  { href: "/#faq", label: "FAQ" },
];

export function MarketingNav() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = session?.user?.role === "ADMIN" ? "/admin" : "/dashboard";

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md transition-all duration-200",
        scrolled ? "border-line bg-background/95 shadow-sm" : "bg-background/90"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="NorthSail" className="flex items-center">
            <Image
              src="/logo.png"
              alt="NorthSail"
              width={36}
              height={36}
              priority
              className="h-9 w-9"
            />
          </Link>
          <div className="hidden gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-label-md text-ink-muted transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <Link
              href={homeHref}
              className="rounded-md bg-brand-container px-6 py-2.5 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
            >
              Painel
            </Link>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="hidden rounded-md border border-transparent px-6 py-2.5 text-label-md font-medium text-brand transition-colors hover:border-line hover:bg-surface-low md:inline-block"
              >
                Entrar
              </Link>
              <Link
                href="/comecar"
                className="rounded-md bg-brand-container px-6 py-2.5 text-label-md font-medium text-white shadow-sm transition-colors hover:bg-brand"
              >
                Começar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
