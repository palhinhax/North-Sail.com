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
    // Typed as both Organization and ProfessionalService so search engines and
    // AI assistants classify NorthSail as a web design / software development
    // company — never confused with sailmaking or nautical brands.
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: "NorthSail",
    alternateName: ["North Sail", "NorthSail Studio"],
    url: SITE_URL,
    logo: absUrl("/logo.png"),
    image: absUrl("/logo.png"),
    email: CONTACT_EMAIL,
    description:
      "NorthSail is a web design and software development company that builds and manages affordable websites, mini web apps and custom web applications for small businesses, professional services and companies worldwide — domain, hosting, SSL, maintenance, booking systems, client portals and dashboards included.",
    // disambiguatingDescription is the canonical schema.org field for telling
    // entities apart — here, separating NorthSail (software) from nautical brands.
    disambiguatingDescription:
      "NorthSail is a digital agency for websites and custom web applications. It is not a sailmaker and is unrelated to sails, sailing or nautical equipment brands.",
    slogan:
      "Websites, bookings and custom web apps on one simple subscription.",
    knowsAbout: [
      "Web design",
      "Web development",
      "Custom web application development",
      "Website with online booking system",
      "Restaurant reservation systems",
      "Online appointment booking",
      "Client portals",
      "Internal dashboards",
      "Business process automation",
      "Local SEO",
      "Software as a service",
    ],
    serviceType: [
      "Website design",
      "Web application development",
      "Custom software development",
    ],
    areaServed: [
      { "@type": "Country", name: "Portugal" },
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsLanguage: ["pt-PT", "en", "es-ES", "fr-FR", "de-DE"],
    // Add real profile URLs (LinkedIn, GitHub, Crunchbase, etc.) here as they
    // go live — sameAs is a primary entity-disambiguation signal.
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
