import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { Container } from "./container";
import { PoweredByBadge } from "@/app/components/PoweredByBadge";
import { CONTACT_EMAIL } from "@/lib/seo/site";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Produto",
    links: [
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/#setores", label: "Setores" },
      { href: "/#planos", label: "Preços" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/contacto", label: "Contacto" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidade", label: "Privacidade" },
      { href: "/termos", label: "Termos" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-background">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-headline-sm font-bold text-brand">
              NorthSail
            </span>
            <p className="max-w-xs text-center text-body-md text-ink-muted md:text-left">
              O site do seu negócio, sem complicações.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 text-label-sm text-ink-muted transition-colors hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5" />
              {CONTACT_EMAIL}
            </a>
            <span className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-label-sm text-ink-muted">
              <Globe className="h-3.5 w-3.5" />
              pt-PT
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <span className="text-label-md font-semibold text-brand">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-label-sm text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <PoweredByBadge align="center" />
      </Container>
    </footer>
  );
}
