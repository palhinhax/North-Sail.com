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
