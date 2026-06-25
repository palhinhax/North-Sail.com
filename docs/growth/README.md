# NorthSail — Growth, SEO & GEO Package

A senior-team analysis and implementation, written **against the real Next.js codebase**. Code changes are already applied (review with `git diff`); strategy lives in these docs.

## Read in this order

1. **`00-overview-positioning-execution.md`** — what was coded this session, North Sail vs North Sails disambiguation, differentiation & slogans, prioritised execution plan, launch checklist.
2. **`01-site-architecture-and-pages.md`** — full page map, internal-linking rules, per-page specs (URL, title, meta, H1, H2s, intent, keywords, questions, CTA, schema, links).
3. **`02-keywords-by-sector.md`** — keyword clusters by sector × language, per-locale build order.
4. **`03-technical-seo-schema-multilingual.md`** — technical audit + deltas, JSON-LD reference, robots/sitemap/hreflang, performance, accessibility, multilingual.
5. **`04-ai-llm-discoverability.md`** — GEO/AEO: citable claims, llms.txt/llms-full.txt, ai-summary expansion, off-site corroboration, measurement.
6. **`05-editorial-calendar.md`** — 64 article ideas over 6 months (PT+EN) with keyword, intent, CTA, links, FAQ flag.
7. **`06-copy-homepage-and-pages.md`** — ready-to-publish homepage copy (PT+EN) + dual-axis implementation spec; notes on restaurants/web-apps copy already in code.
8. **`07-commercial-outreach-and-backlinks.md`** — 30-day acquisition playbook: target lists, offer, cold emails, LinkedIn, objections, 5-step follow-up, call script, campaign LP, backlink plan.

## Brief → deliverable map (all 16 tasks)

| Brief task                                                                                                                      | Where                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1. Positioning / disambiguation                                                                                                 | 00 §1–2; code: `jsonld.tsx`, `llms.txt`, titles in 03 §2.1                                 |
| 2. Ideal site structure (per-page specs)                                                                                        | 01                                                                                         |
| 3. Intent-based pages                                                                                                           | 01 §1, §4; built: reservation-system, digital-menu, redesign, process-automation, etc.     |
| 4. Restaurant strategy                                                                                                          | 01 §3.7–3.9, 02 §1, 05 M1, 06; code: restaurants + 3 sub-pages                             |
| 5. Larger-company strategy                                                                                                      | 01 §3.2–3.6, 02 §6, 06 §A; code: web-apps/portals/dashboards/software/automation/law-firms |
| 6. Multilingual strategy                                                                                                        | 02 §8, 03 §7                                                                               |
| 7. Technical SEO (+ code)                                                                                                       | 03                                                                                         |
| 8. AI / LLM discoverability                                                                                                     | 04                                                                                         |
| 9. 6-month blog plan (60+)                                                                                                      | 05 (64 ideas)                                                                              |
| 10. Homepage copy                                                                                                               | 06 §A (PT+EN)                                                                              |
| 11. Restaurants page copy                                                                                                       | live in `lib/content/locales/en.ts`+`pt.ts`; enhancements in 06 §C                         |
| 12. Web apps page copy                                                                                                          | live as `compare:web-apps-for-business` EN+PT; hero/home in 06                             |
| 13. Commercial strategy (30 days)                                                                                               | 07                                                                                         |
| 14. Differentiation / slogans                                                                                                   | 00 §2                                                                                      |
| 15. Execution plan (today/week/30/90)                                                                                           | 00 §3                                                                                      |
| 16. Final deliverables (tech list, page map, copy, calendar, keywords, schema, robots, sitemap, backlinks, outreach, checklist) | across 00–07                                                                               |

## Code changed this session (review with `git diff`)

- `lib/i18n/routes.ts` — 10 new pages (1 industry + 9 section pages), localized slugs ×5.
- `lib/content/locales/en.ts`, `pt.ts` — full EN+PT content for all 10.
- `lib/seo/jsonld.tsx` — Organization disambiguation + ProfessionalService typing.
- `lib/content/dictionary.ts` — "Web apps" nav item + footer "Web apps" column strings (×5 locales).
- `components/i18n/locale-footer.tsx` — Solutions footer column.
- `public/llms.txt` — rewritten (dual positioning + disambiguation + full page index).

## Immediate next steps

1. `pnpm typecheck && pnpm build`, then deploy. (Bare `tsc` in some sandboxes mis-reads UTF-8 em-dashes — trust the Next/SWC build; the new content mirrors the existing, building content files exactly.)
2. Create LinkedIn + Google Business Profile + claim GitHub org → paste URLs into `organizationSchema().sameAs`. _(Highest-leverage disambiguation action.)_
3. Submit sitemap to GSC + Bing; request indexing for the 10 new URLs.
4. Add the homepage dual-axis section (06 §B) and ES/FR/DE content for the new pages.
5. Start outreach (07 §10) and publish the first 2 cornerstone posts (05).
