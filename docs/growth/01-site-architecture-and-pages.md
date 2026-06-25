# Site Architecture & Page Specifications

Status legend: ✅ live · 🟦 built this session (EN+PT) · 🟨 to build.
URLs shown for `/en`; swap the localized slug for `/pt`, `/es`, `/fr`, `/de` (slugs defined in `lib/i18n/routes.ts`).

---

## 1. Page map (information architecture)

```
/                         → redirects to /en  ✅
/{locale}                 Home  ✅
  /pricing                Pricing  ✅
  /ai-summary             AI summary (AEO/GEO)  ✅
  /contact                Contact / lead form  ✅
  ── Industries (local SMB axis) ──
  /restaurants            ✅   /cafes            🟦
  /hairdressers           ✅   /hotels           ✅
  /gyms                   ✅   /clinics          ✅
  /local-services         ✅
  /real-estate            🟨   /law-firms*        (see web-apps axis)
  ── Intent / comparison (local) ──
  /website-with-bookings              ✅
  /cheap-website-for-small-business   ✅
  /restaurant-reservation-system      🟦
  /digital-menu-for-restaurants       🟦
  /website-redesign                   🟦
  /restaurant-online-orders           🟨
  /whatsapp-orders                    🟨
  /domain-email-website               🟨
  /get-found-on-google                🟨
  ── Web-apps / company axis ──
  /web-apps-for-business     🟦   /client-portals        🟦
  /internal-dashboards       🟦   /custom-software       🟦
  /process-automation        🟦   /web-apps-for-law-firms 🟦
  /web-apps-for-consultancies 🟨  /web-apps-for-real-estate 🟨
  ── Trust / content ──
  /pricing  ✅   /case-studies 🟨   /demos 🟨
  /blog 🟨       /about 🟨          /faq 🟨
  /privacy ✅    /terms ✅
```

**Why this shape.** Two clear axes (local SMB, company) sharing one brand. Industry pages target "[business] website" queries; intent pages target the _job to be done_ ("website with reservations", "replace spreadsheets"); the AI-summary + llms.txt feed answer engines. Trust pages (case studies, about, demos) are the missing E-E-A-T layer that converts the company axis.

---

## 2. Internal-linking rules (avoid orphans, pass authority)

- **Home** links to: pricing, top 3 industries, the web-apps hub, ai-summary. (Add the web-apps block — doc 06.)
- **Nav** (done): Pricing · Restaurants · Hotels · AI summary · **Web apps**.
- **Footer** (done): Product · **Web apps** (web-apps, portals, dashboards, law firms) · Company · Legal.
- **Hub-and-spoke**: `/web-apps-for-business` is the hub; it should link down to portals, dashboards, custom-software, automation, law-firms, and each of those links back up. (Add 1–2 contextual links per page in the `sections` body, or extend `CompareTemplate` with a "related" block — doc 03.)
- **Restaurants** industry page → links to `/restaurant-reservation-system`, `/digital-menu-for-restaurants`, `/restaurant-online-orders`.
- **Every blog post** links to its money page (industry or intent) + one sibling post.
- **Pricing** linked from every page CTA (already wired in templates).

---

## 3. Per-page specification (key pages)

Each spec: **URL · intent · title · meta · H1 · H2s · primary keywords · questions answered · CTA · schema · links in/out**.

### 3.1 Home — `/{locale}` ✅ (enhance)

- **Intent:** navigational + broad commercial ("web design company", "website for my business", "web app developer").
- **Title:** `NorthSail — Web Design & Custom Web App Development` (category-paired for disambiguation).
- **Meta:** "NorthSail builds and manages affordable websites, booking systems and custom web apps — client portals, dashboards, automation — for small businesses and companies. From €15/month or a custom build."
- **H1:** "Websites, bookings and custom web apps on one simple subscription." **H2s:** Built for your business type · For companies: web apps, portals & dashboards · How it works · Plans · Trust · FAQ.
- **Keywords:** web design company, website for small business, custom web app development, website with booking system.
- **CTA:** Start free trial (primary) · See pricing (secondary) · Discuss a web app (tertiary).
- **Schema:** Organization, WebSite, FAQPage. **Links out:** pricing, industries, web-apps hub, ai-summary. **Links in:** everything.

### 3.2 Web apps for business — `/web-apps-for-business` 🟦

- **Intent:** commercial, company axis ("custom web app development company", "build a web app for my business").
- **Title (live):** "Custom web app development for businesses | NorthSail".
- **H1:** "Custom web apps for businesses that want to work better."
- **H2s:** When a website isn't enough · What we build · A subscription, not a one-off · Security, ownership & confidentiality.
- **Keywords:** custom web app development, web application development company, bespoke business software, web app on subscription.
- **Questions answered:** How is a web app different from a website? How much does it cost? Who owns the software? Is my data secure?
- **CTA:** "Discuss your web app" → contact. **Schema:** Service, FAQPage, Breadcrumb (live via `CompareTemplate`). **Links:** hub → portals, dashboards, custom-software, automation, law-firms.

### 3.3 Client portals — `/client-portals` 🟦

- **Intent:** "client portal development", "secure customer login portal".
- **H1:** "Client portals that give your customers a place to log in."
- **Keywords:** client portal development, customer portal software, secure document sharing portal.
- **Questions:** Is it secure for confidential docs? Can clients upload/sign? How long to launch? **CTA:** Discuss your client portal.

### 3.4 Internal dashboards — `/internal-dashboards` 🟦

- **Intent:** "internal dashboard / admin panel development", "replace spreadsheets with software".
- **Keywords:** internal dashboard development, admin panel, custom business dashboard, spreadsheet replacement.
- **Questions:** Can it replace spreadsheets? Role-based views? Export? **CTA:** Discuss your dashboard.

### 3.5 Process automation — `/process-automation` 🟦

- **Intent:** "automate business processes", "replace Excel/manual processes".
- **Keywords:** business process automation, replace spreadsheets, workflow automation, custom internal tool.
- **Questions:** Can you replace our spreadsheet? Where do we start? Integrations? **CTA:** Automate a process.

### 3.6 Web apps for law firms — `/web-apps-for-law-firms` 🟦

- **Intent:** high-value vertical ("law firm client portal", "legal practice web app").
- **Keywords:** law firm client portal, legal case management web app, secure document portal for lawyers.
- **Questions:** Is client data confidential? Secure document sharing? Do you build the website too? **CTA:** Discuss your firm's web app. **Note:** confidentiality-first copy already written — strongest enterprise trust page.

### 3.7 Restaurant reservation system — `/restaurant-reservation-system` 🟦

- **Intent:** "restaurant booking system on own website", "table reservations no commission".
- **Keywords:** restaurant reservation system, online table booking, no-commission reservations, restaurant website with bookings.
- **Questions:** Do I pay commission? Real-time or request? Deposits? **CTA:** Get your reservation system. **Links:** ← restaurants industry page; → digital-menu, online-orders.

### 3.8 Digital menu for restaurants — `/digital-menu-for-restaurants` 🟦

- **Keywords:** digital menu, QR menu for restaurants, online menu, contactless menu. **CTA:** Get your digital menu.

### 3.9 Website redesign — `/website-redesign` 🟦

- **Intent:** migration ("redesign old website", "modernise website").
- **Keywords:** website redesign, modernise old website, website not mobile friendly, slow website fix.
- **Questions:** Will I lose ranking? Keep my content? After launch? **CTA:** Redesign my website.

### 3.10 Cafés — `/cafes` 🟦

- **Intent:** "website for coffee shop / café". **Keywords:** café website, coffee shop website, digital menu café. Mirrors restaurants. **CTA:** Start your café website.

---

## 4. Specs for the pages still to build (🟨)

| Page                     | URL (`/en`)                   | Intent        | Title                                                       | Primary keywords                                                    | CTA                       | Schema                           |
| ------------------------ | ----------------------------- | ------------- | ----------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| Real estate              | `/real-estate`                | sector        | "Websites & web apps for real-estate agencies \| NorthSail" | real estate website, property listing portal, agency website        | Discuss your agency site  | Service, FAQ                     |
| Consultancies            | `/web-apps-for-consultancies` | sector        | "Web apps & client portals for consultancies \| NorthSail"  | consultancy client portal, professional services web app            | Discuss your web app      | Service, FAQ                     |
| Restaurant online orders | `/restaurant-online-orders`   | intent        | "Online ordering on your own restaurant website"            | restaurant online ordering, takeaway website no commission          | Get online ordering       | Service, FAQ                     |
| WhatsApp orders          | `/whatsapp-orders`            | intent        | "Take orders via WhatsApp from your website"                | whatsapp ordering, receive orders on whatsapp                       | Set up WhatsApp orders    | Service, FAQ                     |
| Domain + email + site    | `/domain-email-website`       | intent        | "Domain, professional email and website in one plan"        | domain email website bundle, business email + website               | Get domain + email + site | Service, FAQ                     |
| Get found on Google      | `/get-found-on-google`        | intent        | "Get your business found on Google"                         | appear on google, local seo for small business, google maps listing | Get found on Google       | Service, FAQ                     |
| Case studies             | `/case-studies`               | trust         | "Case studies — websites & web apps we built \| NorthSail"  | (brand + proof)                                                     | Start your project        | CollectionPage + CaseStudy items |
| Demos                    | `/demos`                      | trust         | "Live demos — see a NorthSail site & web app"               | (brand)                                                             | Get one like this         | —                                |
| About                    | `/about`                      | trust/E-E-A-T | "About NorthSail — web design & software company"           | about northsail, who builds northsail                               | Work with us              | AboutPage, Organization          |
| FAQ                      | `/faq`                        | informational | "NorthSail FAQ — plans, web apps, domains, support"         | northsail faq, how northsail works                                  | Contact us                | FAQPage                          |
| Blog index               | `/blog`                       | content hub   | "NorthSail blog — websites, web apps & local growth"        | (long-tail hub)                                                     | Subscribe / contact       | Blog, ItemList                   |

**Implementation note:** the 🟨 _intent/sector_ pages slot into the existing `compare:`/`industry:` machinery exactly like the 🟦 ones — add a PageKey + slugs + a content object, no template work. `case-studies`, `demos`, `about`, `blog`, `faq` need new routes/templates (doc 03).

---

## 5. Content minimums (quality bar per page type)

- **Industry page:** ≥600 words; audience, problems, solution, included/excluded, minimum plan + reason, upgrade path, AI-summary block, ≥3 FAQs, 1 CTA. (Template enforces the shape.)
- **Intent/compare page:** ≥500 words; intro, 3 sections, AI-summary, ≥3 FAQs, CTA, 1–2 internal links.
- **Enterprise page:** add explicit security/ownership/confidentiality section + a consultation CTA (not free-trial).
- **Blog post:** ≥900 words, 1 question-style H1, ≥3 H2s, FAQ block (with schema), links to 1 money page + 1 sibling.
- **Case study:** problem → what we built → result (even illustrative) → "get one like this" CTA. Mark illustrative examples clearly (project guardrail).
