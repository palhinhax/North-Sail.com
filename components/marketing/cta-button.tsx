import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-label-md",
  lg: "px-6 py-3.5 text-label-md",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-accent text-white shadow-sm hover:bg-brand-accent-hover",
  secondary: "bg-brand-container text-white shadow-sm hover:bg-brand",
  outline: "border border-line bg-background text-brand hover:bg-surface-low",
};

export function ctaClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(baseClasses, sizeClasses[size], variantClasses[variant], className);
}

interface CtaLinkProps extends BaseProps {
  href: string;
}

export function CtaLink({
  href,
  variant,
  size,
  className,
  children,
}: CtaLinkProps) {
  return (
    <Link href={href} className={ctaClasses({ variant, size, className })}>
      {children}
    </Link>
  );
}

interface CtaButtonProps
  extends
    BaseProps,
    Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "children" | "className"
    > {}

export function CtaButton({
  variant,
  size,
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <button className={ctaClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
