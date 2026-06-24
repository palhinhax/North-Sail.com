import { absUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "./site";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Json = Record<string, any>;

/**
 * Renders a JSON-LD script tag. `data` may be a single node or an array of
 * nodes; an array is wrapped in an @graph.
 */
export function JsonLd({ data }: { data: Json | Json[] }) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; no user HTML is injected.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absUrl("/logo.png"),
    email: CONTACT_EMAIL,
    description:
      "NorthSail builds and manages affordable websites and mini web apps for small businesses worldwide — domain, hosting, SSL, maintenance and sector-specific booking tools included.",
    sameAs: [],
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
  priceFrom: number;
  currency?: string;
}): Json {
  return {
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: absUrl(args.url),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: args.priceFrom,
      priceCurrency: args.currency ?? "EUR",
      url: absUrl(args.url),
    },
  };
}

export function softwareApplicationSchema(args: {
  name: string;
  description: string;
  url: string;
  priceFrom: number;
  currency?: string;
}): Json {
  return {
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    url: absUrl(args.url),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: args.priceFrom,
      priceCurrency: args.currency ?? "EUR",
    },
  };
}

/**
 * Offer catalog for the pricing page. Each plan becomes an Offer attached to
 * the NorthSail service. Prices are entry ("from") prices in EUR.
 */
export function pricingOffersSchema(args: {
  name: string;
  description: string;
  url: string;
  plans: { name: string; price: number; description: string }[];
  currency?: string;
}): Json {
  return {
    "@type": "Product",
    name: args.name,
    description: args.description,
    url: absUrl(args.url),
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: args.plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.description,
      price: p.price,
      priceCurrency: args.currency ?? "EUR",
      url: absUrl(args.url),
      availability: "https://schema.org/InStock",
    })),
  };
}
