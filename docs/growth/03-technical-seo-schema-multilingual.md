# Technical SEO, Structured Data & Multilingual — Audit + Code

Audited against the real codebase. Your technical foundation is **strong** — this is a delta list, not a rebuild.

---

## 1. What's already correct (keep)

- ✅ **next-intl i18n** with `/en` default, root `/` → `/en`, localized slugs per page (`lib/i18n/routes.ts`).
- ✅ **Metadata API** with correct **canonical** + full **hreflang** alternates + **x-default → /en** (`lib/seo/metadata.ts`). This is textbook-correct.
- ✅ **Open Graph + Twitter** cards, dynamic OG image (`app/opengraph-image.tsx`).
- ✅ **Sitemap** with per-page hreflang `alternates.languages`, content-aware (skips locales without content) — `app/sitemap.ts`.
- ✅ **robots.ts** allows AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended) and blocks private routes. `host` + `sitemap` set.
- ✅ **JSON-LD** helpers: Organization, WebSite, Breadcrumb, FAQPage, Service, SoftwareApplication, Product/Offers (`lib/seo/jsonld.tsx`); templates inject Service+FAQ+Breadcrumb.
- ✅ **llms.txt** present (now rewritten).

---

## 2. Deltas to implement (prioritised)

### 2.1 Root title → category-paired (disambiguation) — _high impact, 2 min_

`app/layout.tsx`, the default title currently reads "NorthSail — affordable websites & mini web apps for small business". Change the **default** to pair the brand with the agency category and surface the dual axis:

```ts
title: {
  default: "NorthSail — Web Design & Custom Web App Development",
  template: "%s | NorthSail",
},
description:
  "NorthSail is a web design and software company. We build and manage affordable websites, booking systems and custom web apps — client portals, dashboards and automation — for small businesses and companies. From €15/month or a custom build.",
```

Also set `applicationName: "NorthSail"`, `category: "technology"`, and `keywords` (root): `["web design company","custom web app development","website with booking system","client portal development","website for small business"]`.

### 2.2 Populate `organizationSchema().sameAs` — _highest disambiguation lever_

Empty today. After creating the profiles (doc 00 §3), add:

```ts
sameAs: [
  "https://www.linkedin.com/company/northsail",
  "https://github.com/palhinhax",
  "https://www.crunchbase.com/organization/northsail",
  // Google Business Profile, Clutch/Sortlist, X/Twitter as they go live
],
```

### 2.3 Add a `relatedLinks` block to `CompareTemplate` — _fixes orphan/hub-spoke_

The web-apps hub should link to its spokes. Minimal approach: add an optional `related?: { label: string; target: PageKey }[]` to `ComparePageContent` and render a small list before the final CTA. Then on `compare:web-apps-for-business` set `related` to portals/dashboards/custom-software/automation/law-firms. Zero risk, big internal-link win.

### 2.4 ProfessionalService node with `areaServed` (local SEO) — _medium_

When you create a Google Business Profile, also emit a richer node on `/about` and the enterprise hub. The Organization is now typed `["Organization","ProfessionalService"]` (done) — add `address`/`telephone` once you have them. For purely online service, `areaServed` (already added) is enough; don't fake a physical `address`.

### 2.5 Per-page `Service`/`SoftwareApplication` price accuracy

`CompareTemplate` injects `serviceSchema(... priceFrom: PLAN_PRICES.MINI_APP)` (=15) for **all** compare pages — but the enterprise pages (web-apps, portals, dashboards) are **custom-quoted**, not €15. For those, either omit the `offers`/price or use a `priceSpecification` with `"price": "0"` removed and a `"description": "Custom quote"`. Recommended: branch in the template — if the page is an enterprise `compare:` key, emit `Service` **without** an `offers.price` (avoids a misleading €15 rich result on a custom-software page).

### 2.6 404 & redirects

- `app/not-found.tsx` exists ✅ — make it useful: links to home, pricing, top industries, web-apps hub, and a search/contact CTA (reduces bounce, keeps crawl).
- **Redirects:** enforce a single canonical host. `north-sail.com` 301 → `www.north-sail.com` (your robots `host` says www) — confirm this is at the DNS/host (Vercel) level. Add `next.config` redirects for any legacy paths when you migrate clients' old sites (preserve their equity → relevant to `/website-redesign` promise).

### 2.7 `llms-full.txt` — _medium_

Create `public/llms-full.txt`: a longer, fully-expanded version concatenating the AI-summary + each page's `aiSummary` block + FAQs as plain prose. Answer engines that fetch the "full" variant get quotable, structured facts. Generate it from the content registry (a small script) so it stays in sync.

---

## 3. JSON-LD reference (copy-paste targets)

Your helpers already produce most of these. Reference shapes for review/extension:

### Organization (enhanced — implemented)

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.north-sail.com/#organization",
  "name": "NorthSail",
  "alternateName": ["North Sail", "NorthSail Studio"],
  "url": "https://www.north-sail.com",
  "logo": "https://www.north-sail.com/logo.png",
  "description": "NorthSail is a web design and software development company ...",
  "disambiguatingDescription": "NorthSail is a digital agency for websites and custom web applications. It is not a sailmaker and is unrelated to sails, sailing or nautical equipment brands.",
  "slogan": "Websites, bookings and custom web apps on one simple subscription.",
  "knowsAbout": [
    "Web design",
    "Web development",
    "Custom web application development",
    "Client portals",
    "Internal dashboards",
    "Business process automation",
    "Local SEO"
  ],
  "serviceType": [
    "Website design",
    "Web application development",
    "Custom software development"
  ],
  "areaServed": [
    { "@type": "Country", "name": "Portugal" },
    { "@type": "Place", "name": "Europe" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "knowsLanguage": ["pt-PT", "en", "es-ES", "fr-FR", "de-DE"],
  "sameAs": ["…LinkedIn…", "…GitHub…", "…Crunchbase…"]
}
```

### WebSite (with SearchAction — optional add)

```json
{
  "@type": "WebSite",
  "@id": "…/#website",
  "name": "NorthSail",
  "url": "https://www.north-sail.com",
  "publisher": { "@id": "…/#organization" },
  "inLanguage": ["en", "pt-PT", "es-ES", "fr-FR", "de-DE"]
}
```

### Service (per solution page — branch out price for custom)

```json
{
  "@type": "Service",
  "name": "Custom web app development",
  "serviceType": "Web application development",
  "provider": { "@id": "…/#organization" },
  "areaServed": "Worldwide",
  "url": "https://www.north-sail.com/en/web-apps-for-business",
  "description": "NorthSail designs, builds and maintains custom web apps — client portals, dashboards and automation — on a subscription."
}
```

### ProfessionalService for law firms vertical

```json
{
  "@type": "Service",
  "serviceType": "Legal practice web application development",
  "name": "Web apps and client portals for law firms",
  "provider": { "@id": "…/#organization" },
  "audience": { "@type": "Audience", "audienceType": "Law firms" }
}
```

### FAQPage / BreadcrumbList — already generated per page via `faqSchema()` + `breadcrumbSchema()`. ✅

### Product + Offers — pricing page via `pricingOffersSchema()`. ✅ (keep prices in sync with `PLAN_PRICES`).

---

## 4. robots.txt — your generated output is good

`app/robots.ts` already emits the right policy. Two optional hardening tweaks:

- Add `Disallow: /site/` if the multi-tenant client sites at `/site/[slug]` should not be crawled under the NorthSail domain (they should live on the client's own domain; if they ever render under north-sail.com, block them to avoid duplicate/thin content diluting your authority).
- Keep AI crawlers **allowed** — this is a deliberate GEO/AEO choice (memory confirms it). Don't let a future "block AI" default creep in.

---

## 5. Performance & Core Web Vitals (Next.js 14 / App Router)

- **Fonts:** Geist via `localFont` ✅ (self-hosted, no layout shift). Keep `display: swap` behavior.
- **Images:** use `next/image` everywhere (the logo already does). For galleries/industry hero images: set `sizes`, use `priority` only on the LCP image, lazy-load the rest (default), serve AVIF/WebP. Compress before upload (target < 150 KB hero).
- **JS:** marketing templates are Server Components (good — `CompareTemplate`, `IndustryTemplate` are server). Keep `LocaleNav` the only client component in the shell (it already is, for scroll state). Don't add client JS to content pages.
- **CWV targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1. Reserve image dimensions, avoid late-injected banners.
- **Caching:** static generation via `generateStaticParams` + `dynamicParams=false` ✅ → pages are static/CDN-cached. Verify cache headers at the edge (Vercel handles this).

---

## 6. Accessibility (WCAG 2.1 AA) — quick wins that also help SEO

- One `<h1>` per page ✅ (templates enforce). Logical H2/H3 order.
- Color contrast: navy `#0A2540` on white passes; check muted text `#7A8699` on white (≈ 3.6:1 — **fails AA for body text**; use it only for ≥18.66px/bold or darken to `#5A6677` for small text).
- All images need real `alt` (industry galleries especially). The logo alt "NorthSail" ✅.
- Interactive elements: the FAQ accordion (`FaqItem`) must be keyboard-operable and use `aria-expanded`. Verify.
- Forms (`LeadForm`): every input needs a `<label>`; error messages tied via `aria-describedby`.
- Touch targets ≥ 44×44px (nav buttons look fine).

---

## 7. Multilingual strategy (PT, EN, ES, FR, DE)

- **URL structure:** `/{locale}/{localized-slug}` ✅ — already implemented and ideal (clearer than query params or cookies).
- **hreflang:** emitted per page incl. `x-default` ✅. Ensure every translated page exists or is omitted from alternates (your content-aware sitemap handles omission; the metadata builder currently lists all locales — see note below).
- **Duplicate-content avoidance:** localized slugs + correct canonical-per-locale + hreflang = no duplication risk. EN and other locales are _adaptations_, not copies.
- **⚠️ One inconsistency to fix:** `buildMetadata()` lists **all** locales in `alternates.languages` even for pages that only have EN/PT content. If `/es/web-apps-para-empresas` 404s, you shouldn't advertise it as an `hreflang` alternate. **Fix:** pass the set of _available_ locales for the page into `buildMetadata` (derive from the content registry like the sitemap does) and only emit alternates for those. Until ES/FR/DE content lands, the new pages should list only `en`,`pt` (+ x-default=en) in their hreflang.
- **Authority in English:** to win international answer-engine citations ("custom client portal for law firm Europe"), concentrate EN backlinks and the EN web-apps cluster. EN is the x-default and your global authority locale.
- **Build order:** PT (all) → EN (web-apps + tourism sectors) → ES → FR/DE (hotels, web-apps, law firms). Adapt copy per market (doc 02 §8).

---

## 8. Indexing & crawl hygiene

- Submit `sitemap.xml` to **GSC** and **Bing Webmaster Tools**; request indexing for new URLs.
- Watch GSC "Pages" report for: _Discovered – not indexed_ (thin content → beef up), _Duplicate without canonical_ (hreflang/canonical bug), _Crawled – not indexed_ (low value → improve links).
- No orphan pages: every indexable URL must be linked from nav, footer, a sibling, or at minimum the sitemap. The web-apps footer column (done) covers the enterprise hub; add restaurant-subpage links from the restaurants page (doc 06).
- `dynamicParams=false` means only known slugs render; unknown → 404 (good, no infinite crawl).
