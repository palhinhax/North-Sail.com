import { Container } from "./container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-16 pt-32 md:pb-20 md:pt-36">
      <Container className="relative z-10 flex flex-col items-center gap-3 text-center">
        {eyebrow && (
          <span className="text-label-md uppercase tracking-wider text-ink-muted">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-display-sm text-brand md:text-display-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-body-lg text-ink-muted">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
