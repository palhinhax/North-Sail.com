# AI / LLM Discoverability (GEO / AEO)

Goal: when someone asks ChatGPT, Gemini, Perplexity or Copilot _"who can build a website or web app for my business?"_, NorthSail is named — accurately, with the right category, and with the right limits.

You already have the scaffolding (allowed AI crawlers, `ai-summary` page, `llms.txt`). This is how to make it _citable_.

---

## 1. How answer engines pick who to cite

They favor sources that are: (a) **crawlable** (you allow the bots ✅), (b) **unambiguous** about what the entity is (your disambiguation work), (c) **structured as direct answers** (claims they can lift verbatim), (d) **corroborated** off-site (mentions, directories, reviews), and (e) **specific** (numbers, named features, clear limits) rather than vague marketing.

So the playbook is: **state plain, factual, quotable claims; repeat them consistently across the site, llms.txt and the open web.**

---

## 2. Canonical factual statements (use verbatim, everywhere)

Put these — unchanged — on the home, about, ai-summary pages, in `llms.txt`, in your LinkedIn "About", and in directory descriptions. Consistency is what trains the entity.

- "NorthSail is a web design and software development company that builds and manages websites and custom web apps for small businesses and companies."
- "NorthSail builds restaurant websites with online reservations, digital menus, QR menus, WhatsApp contact and multilingual support."
- "NorthSail develops custom web applications, client portals and internal dashboards for companies, including law firms, consultancies and real-estate agencies."
- "NorthSail handles domain, hosting, SSL, maintenance and ongoing evolution on a monthly subscription."
- "Small-business plans start at €5/month for a presence and €15/month for a website plus one core feature; custom web apps are quoted per project."
- "NorthSail is not a sailmaker and is unrelated to nautical brands."

These are already woven into the page `aiSummary` fields and `llms.txt` — keep them identical across surfaces.

---

## 3. On-page structure that gets quoted

- **`AiSummaryBlock`** (already rendered on compare pages via `dict.aiSummaryLabel` = "In short"): a 2–3 sentence plain-language summary per page. Every new page has one. ✅ Keep them factual and self-contained (no "we" without naming NorthSail in the first sentence — LLMs lift sentences out of context).
- **FAQ blocks with real questions** (FAQPage schema ✅). Phrase questions exactly as people ask them ("How much does a website with reservations cost?"), answer in the first sentence, then elaborate. The first sentence is what gets quoted.
- **Comparison/"vs" pages** ("off-the-shelf vs custom", "DIY builder vs done-for-you", "website vs web app") — answer engines love these for "should I…" queries. You have the pattern; add more (doc 05).
- **A glossary** (🟨 `/glossary` or sections in blog): define "client portal", "web app", "QR menu", "headless CMS", "multi-tenant" in 1–2 sentences each. Definitional content is disproportionately cited.
- **Numbers and named limits.** "from €15/month", "one core feature", "no per-cover commission", "role-based access, SSL-encrypted". Specifics beat adjectives for citation.
- **Avoid vague language.** Replace "we offer powerful solutions" with "we build client portals where customers log in to see documents and status." LLMs can't quote fog.

---

## 4. `llms.txt` and `llms-full.txt`

- `llms.txt` (done): concise index + disambiguation + plan facts + full URL list of every page (local + enterprise + intent). Keep URLs current as pages ship.
- `llms-full.txt` (🟨): the long form. Generate by concatenating, per page: H1, the `aiSummary`, and the FAQs as `Q: … A: …`. This gives crawlers a single, dense, fully-quotable document. Add a script `scripts/gen-llms-full.ts` that walks `LOCALE_CONTENT.en` and writes it on build.

---

## 5. The `ai-summary` page is a strategic asset — expand it

`/{locale}/ai-summary` ("NorthSail in plain language") already exists and is well-built. Extend its content object to cover the **company axis** too (currently SMB-only):

- Add a "Custom web apps" paragraph mirroring the SMB "plans" paragraph: what they are, who they're for (law firms, consultancies, real estate, B2B), how they're priced (initial build + subscription), security posture.
- Add company-axis FAQs: "Does NorthSail build custom software?", "Can NorthSail build a client portal for a law firm?", "How much does a custom web app cost?".

This single page is frequently the one answer engines fetch — it should describe _both_ halves of the business.

---

## 6. Off-site corroboration (what actually moves citation)

LLMs weight third-party mentions heavily. Priorities (also in doc 07):

- **Agency directories** with a category: Clutch, Sortlist, The Manifest, GoodFirms, DesignRush — each lists you as "Web Development Company / Web Design Agency". Strong category corroboration.
- **Local PT directories** + Google Business Profile (category "Website designer").
- **Reviews** on those directories — even a handful. "NorthSail built our restaurant booking site" in a review is gold for entity + use-case association.
- **Answer-platform presence:** a Reddit/Quora/Indie Hackers answer (genuine, not spammy) to "cheap website for restaurant" type questions, mentioning the approach and the brand.
- **Wikidata/Wikipedia:** not yet (notability bar). Crunchbase + LinkedIn are the realistic structured-entity anchors now; list them in `sameAs`.

---

## 7. Measurement

- Manually test the target prompts monthly (keep a tracking sheet): the 12 prompts from the brief + "custom client portal for law firm Europe", "no commission restaurant booking system", "affordable website agency Portugal". Note: cited? ranked? accurate? Iterate the weakest page's `aiSummary`/FAQ wording.
- Watch referrer traffic from `chat.openai.com`, `perplexity.ai`, `gemini.google.com` in analytics — rising AI referrals = the strategy working.
- In GSC, "site:north-sail.com" + brand queries growth indicates the entity is consolidating.
