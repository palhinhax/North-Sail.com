/**
 * Resolves the public-facing URL of a client's site.
 *
 * Client sites are separate deployments (e.g. on Vercel). To give each client a
 * clean address that hides the underlying deployment URL, we serve them on
 * their own host:
 *   - a custom domain (the client's own), or
 *   - a NorthSail subdomain  {slug}.north-sail.com
 *
 * That host must be added as a domain on the client's deployment (+ DNS). The
 * internal `siteUrl` (e.g. *.vercel.app) is never shown to the client.
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.north-sail.com";

/** Bare root domain, e.g. "north-sail.com" (no scheme, no www). */
export const ROOT_DOMAIN = SITE_URL.replace(/^https?:\/\//, "").replace(
  /^www\./,
  ""
);

export interface SiteAddressable {
  slug: string;
  customDomain: string | null;
  siteUrl?: string | null;
  sitePublished?: boolean;
}

export function hasOwnDomain(business: Pick<SiteAddressable, "customDomain">) {
  return !!business.customDomain && business.customDomain.trim().length > 0;
}

/** The clean, client-facing host (no scheme). */
export function getPublicSiteHost(
  business: Pick<SiteAddressable, "slug" | "customDomain">
): string {
  if (hasOwnDomain(business)) {
    return business
      .customDomain!.replace(/^https?:\/\//, "")
      .replace(/\/$/, "");
  }
  return `${business.slug}.${ROOT_DOMAIN}`;
}

/** Full public URL shown to the client and used publicly. */
export function getPublicSiteUrl(
  business: Pick<SiteAddressable, "slug" | "customDomain">
): string {
  return `https://${getPublicSiteHost(business)}`;
}

/** Display version without the scheme (nicer in the UI). */
export function getPublicSiteLabel(
  business: Pick<SiteAddressable, "slug" | "customDomain">
): string {
  return getPublicSiteHost(business);
}
