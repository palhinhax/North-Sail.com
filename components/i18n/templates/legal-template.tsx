import { Container, Section } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { localePath, type LegalKey } from "@/lib/i18n/routes";
import { getDictionary } from "@/lib/content/dictionary";
import { getLegalContent } from "@/lib/content/legal";
import { breadcrumbSchema, JsonLd } from "@/lib/seo/jsonld";
import { Breadcrumbs } from "../breadcrumbs";

export function LegalTemplate({
  locale,
  which,
}: {
  locale: Locale;
  which: LegalKey;
}) {
  const dict = getDictionary(locale);
  const c = getLegalContent(locale, which);
  const pageKey = `legal:${which}` as const;
  const path = localePath(locale, pageKey);

  const crumbs = [
    { name: dict.breadcrumbHome, href: localePath(locale, "home") },
    { name: c.h1, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="hero-gradient ambient-glow relative overflow-hidden border-b border-line pb-14 pt-28 md:pt-32">
        <Container className="relative z-10">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl">
            <h1 className="text-display-sm text-brand md:text-display-lg">
              {c.h1}
            </h1>
            <p className="mt-4 text-label-md text-ink-subtle">{c.updated}</p>
            <p className="mt-5 text-body-lg text-ink-muted">{c.intro}</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-headline-md text-brand">{s.heading}</h2>
              <div className="flex flex-col gap-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-body-md text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <p className="rounded-2xl border border-line bg-surface-low p-6 text-label-md text-ink-subtle">
            {c.note}
          </p>
        </div>
      </Section>
    </>
  );
}
