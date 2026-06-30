/**
 * Canonical site configuration. The canonical domain is
 * https://www.north-sail.com — change SITE_URL here (or via NEXT_PUBLIC_SITE_URL)
 * if the canonical host changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.north-sail.com"
).replace(/\/$/, "");

export const SITE_NAME = "NorthSail";

export const CONTACT_EMAIL = "hello@north-sail.com";

/** Absolute URL helper from a site-root path (e.g. `/en/pricing`). */
export function absUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/** Default social share image (Open Graph / Twitter). */
export const OG_IMAGE = "/logo.png";

/**
 * Public social / profile URLs. Fill these in as each goes live — they power
 * BOTH the footer links and the Organization `sameAs` schema, which is a primary
 * authority and brand-disambiguation signal for Google and AI assistants
 * (helps separate NorthSail the software company from the nautical brands).
 * Leave a value as "" to hide it.
 */
export const SOCIAL_LINKS = {
  linkedin: "", // e.g. "https://www.linkedin.com/company/northsail"
  instagram: "", // e.g. "https://www.instagram.com/northsail"
  facebook: "", // e.g. "https://www.facebook.com/northsail"
  github: "", // e.g. "https://github.com/northsail"
  googleBusiness: "", // your Google Business Profile share URL
} as const;

/** Non-empty social URLs, used by both the footer and the `sameAs` schema. */
export function activeSocialUrls(): string[] {
  return Object.values(SOCIAL_LINKS).filter((u) => u.trim().length > 0);
}
