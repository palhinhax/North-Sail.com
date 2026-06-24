import * as React from "react";
import Link from "next/link";
import { Container } from "./container";

interface AuthShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  /** Link rendered under the form (e.g. "Não tens conta? Criar"). */
  footer?: React.ReactNode;
}

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: AuthShellProps) {
  return (
    <div className="hero-gradient ambient-glow relative flex min-h-screen flex-col overflow-hidden">
      <header className="relative z-10 border-b border-line/60 bg-background/70 backdrop-blur-md">
        <Container className="flex h-16 items-center">
          <Link href="/" className="text-headline-md font-bold text-brand">
            NorthSail
          </Link>
        </Container>
      </header>
      <Container className="relative z-10 flex flex-1 items-center justify-center py-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-display-sm text-brand">{title}</h1>
            {subtitle && (
              <p className="text-body-md text-ink-muted">{subtitle}</p>
            )}
          </div>
          <div className="rounded-2xl border border-line bg-surface-lowest p-8 shadow-card">
            {children}
          </div>
          {footer && (
            <p className="mt-6 text-center text-body-md text-ink-muted">
              {footer}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
