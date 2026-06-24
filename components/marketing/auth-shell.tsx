import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex min-h-screen items-center justify-center bg-surface-low px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/" aria-label="NorthSail" className="flex items-center">
            <Image
              src="/logo.png"
              alt="NorthSail"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="rounded-xl border border-line bg-surface-lowest p-8 shadow-card">
          <div className="mb-6 text-center">
            <h1 className="mb-1 text-headline-md font-semibold text-brand">
              {title}
            </h1>
            {subtitle && (
              <p className="text-body-md text-ink-muted">{subtitle}</p>
            )}
          </div>
          {children}
        </div>
        {footer && (
          <p className="mt-6 text-center text-body-md text-ink-muted">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
}
