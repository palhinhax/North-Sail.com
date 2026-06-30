# NorthSail Growth & SEO Strategy — Overview, Positioning & Execution

_Senior-team deliverable (SEO, GEO/AEO, B2B copy, product marketing, front-end, schema, performance, sales). Written against the **real Next.js codebase**, not generic advice._

---

## 0. What was already implemented in code (this session)

These changes are live in the repo (review with `git diff`) and unblock most of the strategy below. Run `pnpm typecheck && pnpm build` locally before deploying.

| Area                  | File(s)                                                          | Change                                                                                                                                                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New routing           | `lib/i18n/routes.ts`                                             | Added `industry:cafes` + 9 `compare:*` pages (web-apps-for-business, client-portals, internal-dashboards, custom-software, process-automation, web-apps-for-law-firms, restaurant-reservation-system, digital-menu-for-restaurants, website-redesign), with localized slugs in all 5 locales. |
| New content (EN + PT) | `lib/content/locales/en.ts`, `pt.ts`                             | Full page content for all 10 new pages, matching existing voice and the honest "clear limits" tone.                                                                                                                                                                                           |
| Dual positioning      | `lib/seo/jsonld.tsx`                                             | Organization typed as `["Organization","ProfessionalService"]`, `alternateName`, `disambiguatingDescription`, `slogan`, `knowsAbout`, `serviceType`, `areaServed`, `knowsLanguage`.                                                                                                           |
| Nav + footer          | `lib/content/dictionary.ts`, `components/i18n/locale-footer.tsx` | Added "Web apps" top-nav item and a "Web apps" footer column (web-apps, client portals, dashboards, law firms) in all 5 locales — prevents orphan pages.                                                                                                                                      |
| AI discoverability    | `public/llms.txt`                                                | Rewritten with dual positioning, explicit disambiguation block, and a full page index including the new enterprise + restaurant pages.                                                                                                                                                        |

**Still to do in code (specs in this folder):** ES/FR/DE content for the 10 new pages; homepage dual-axis section; blog/case-study/about/demos routes; `llms-full.txt`; a few schema additions. See doc 03 and 06.

---

## 1. Positioning diagnosis — "North Sail" vs "North Sails" (nautical)

**The problem.** `north-sail.com` is one character from **North Sails**, a large global sailmaking/apparel brand. Google and LLMs use entity signals to decide what "North Sail" _is_. With weak signals, you get classified near the nautical entity and lose the "web agency" intent. The current site also only says "affordable websites & mini web apps for small business" — which (a) caps you at the cheap end and (b) gives almost no signal that you build serious software.

**The fix is signal, not slogans.** Make every machine-readable surface say, repeatedly and consistently, that NorthSail is a _web design & software development company_:

1. **Entity schema (done).** `disambiguatingDescription` literally states "NorthSail is a digital agency for websites and custom web applications. It is not a sailmaker and is unrelated to sails, sailing or nautical equipment brands." This is the canonical schema.org field for entity separation. `knowsAbout` + `serviceType` reinforce the software domain.
2. **`sameAs` is your strongest lever — currently empty.** Create and link, from the Organization schema, profiles that name the category: LinkedIn company page ("Web Design Company / Software Company"), GitHub org (`palhinhax`), Crunchbase, Clutch/Sortlist agency listings, a Google Business Profile categorized as "Website designer / Software company". Each is an independent corroboration that NorthSail = software. Add the URLs to the `sameAs: []` array in `lib/seo/jsonld.tsx`.
3. **Title/description discipline.** Never ship a title that reads only "NorthSail". Always pair the brand with the category: "NorthSail — Web Design & Custom Web App Development". (Recommended root title change in doc 03.)
4. **Anchor-text consistency off-site.** When you get directory listings, guest posts and citations, the anchor/description should say "web design and web app company", never just "North Sail". Consistency across the web is what re-trains the entity.
5. **`llms.txt` disambiguation block (done).** Gives answer engines an explicit, quotable statement of what you are and are not.

**Do NOT** rename to literally "NorthSail Studio" yet — the project guardrails say the name is provisional and domain/trademark are unvalidated. Until then, lean on category-pairing in titles and the `alternateName` field rather than committing to a new legal name. Validate the `north-sail.com` domain/trademark vs North Sails before any rebrand spend.

---

## 2. Differentiation & value proposition

NorthSail must not read as "another cheap-site mill." The defensible position is the **range on one subscription**: from a €5 presence to a custom client portal, built and _kept running_ by the same team.

**Primary positioning line (recommended hero H1 direction):**

> **Websites, bookings and custom web apps — built, hosted and evolved on one simple subscription.**

**Supporting one-liners (use across hero subtitles, meta, outreach, social bios):**

- "From a simple website to a client portal — we build the digital side of your business and keep it running."
- "Affordable websites and custom web apps for businesses that want to sell more and work better."
- "We build it, handle the technical side, and improve it with you — no agency invoice that ends the day it ships."
- "Real digital presence and automation for real businesses."

**Two audiences, one brand — keep them visibly distinct:**

|       | Local / SMB axis                                                 | Company / web-apps axis                                                                                                                     |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Hook  | Cheap, fast, done-for-you, bookings                              | Confidence, security, scalability, less Excel                                                                                               |
| Proof | €5–€59 plans, 1-month free trial                                 | Senior engineering, confidentiality, ownership, maintenance                                                                                 |
| CTA   | "Start your website" / free trial                                | "Discuss your web app" / book a consultation                                                                                                |
| Pages | `industry:*`, `compare:cheap-*`, `compare:website-with-bookings` | `compare:web-apps-for-business`, `client-portals`, `internal-dashboards`, `custom-software`, `process-automation`, `web-apps-for-law-firms` |

The homepage must make both visible "above the fold scroll" so a law-firm visitor doesn't bounce thinking you only do café sites (see doc 06 homepage copy).

---

## 3. Execution plan (prioritised by impact × effort)

### High impact / low effort — do this week

1. **Ship the code already written** (10 pages, schema, llms.txt, nav/footer). Run `pnpm build`, deploy, then **request indexing** in Google Search Console for the new URLs.
2. **Fill `sameAs`**: create LinkedIn company page + Google Business Profile (category "Website designer") + claim GitHub org; add all URLs to `organizationSchema().sameAs`. _Single highest-leverage disambiguation action._
3. **Root title/description** → category-paired (doc 03).
4. **Submit `sitemap.xml`** in GSC + Bing Webmaster Tools; verify both.
5. **Internal links**: the footer "Web apps" column is done; also link the restaurant sub-pages from the restaurants industry page intro (small template tweak, doc 06).

### High impact / medium effort — next 30 days

6. **Homepage dual-axis section** (web-apps block) + new hero line (doc 06).
7. **ES/FR/DE content** for the 10 new pages (translate-and-adapt, not literal — doc 03 §multilingual). Until then those locale URLs 404 by design (sitemap correctly omits them).
8. **Publish 8 cornerstone blog posts** (2/week) from the calendar (doc 05), each with FAQ schema and internal links.
9. **Launch outreach**: 20 cold emails/day to restaurants + 10 LinkedIn touches/day to law firms/agencies with old sites (doc 07).
10. **Case studies**: even 2–3 "illustrative example" builds with metrics; add a `case-studies` route.

### High impact / high effort — 90 days

11. Full per-sector page set for the enterprise axis (consultancies, real estate, B2B) + 2 more local sectors.
12. Backlink campaign: agency directories (Clutch, Sortlist, The Manifest), local PT business directories, 4–6 guest posts (doc 07).
13. Programmatic local pages (`/pt/restaurantes/lisboa`) once the sector pages convert — only after the core ranks.
14. `demos` interactive previews + `about` (E-E-A-T: who builds this, why trust them).

---

## 4. Launch checklist (run before & after deploy)

**Pre-deploy**

- [ ] `pnpm typecheck` and `pnpm build` pass locally (bare `tsc` in some sandboxes mis-reads UTF-8; trust the Next build).
- [ ] New pages render in all locales that have content (EN, PT); ES/FR/DE intentionally pending.
- [ ] `/sitemap.xml` lists the 10 new EN+PT URLs with hreflang alternates.
- [ ] `/robots.txt` still allows AI crawlers and blocks `/admin`, `/dashboard`, `/account`, `/client`, `/api/`, `/auth/`.
- [ ] `/llms.txt` reachable and current.
- [ ] Organization JSON-LD validates (Rich Results Test) and `sameAs` is populated.
- [ ] OG image renders for new pages (uses branded `opengraph-image.tsx` fallback — good).

**Post-deploy**

- [ ] GSC: submit sitemap, request indexing for the 10 new URLs + homepage.
- [ ] Bing Webmaster Tools: same.
- [ ] Test in ChatGPT/Perplexity/Gemini: "who can build a website with reservations for my restaurant in Portugal", "custom client portal for a law firm Europe" — track whether NorthSail is cited; iterate `llms.txt` and AI-summary page wording.
- [ ] Core Web Vitals check (PageSpeed Insights) on home + 2 new pages.
- [ ] Confirm no orphan pages (every new URL linked from nav/footer/sibling page or sitemap-only is acceptable but linked is better).

---

_Continued in:_ `01-site-architecture-and-pages.md`, `02-keywords-by-sector.md`, `03-technical-seo-and-schema.md`, `04-ai-llm-discoverability.md`, `05-editorial-calendar.md`, `06-copy-homepage-and-pages.md`, `07-commercial-outreach-and-backlinks.md`.
