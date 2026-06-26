import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { onboardingPath } from "@/lib/i18n/routes";

/**
 * Legacy entry point. The onboarding wizard now lives at `/{locale}/comecar`;
 * this route only resolves a best-guess locale (from the `Accept-Language`
 * header) and redirects there, so older links — login, dashboard and the
 * non-localized marketing nav — keep working.
 */
function detectLocale(): Locale {
  const accept = headers().get("accept-language");
  if (!accept) return DEFAULT_LOCALE;
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0]?.trim().slice(0, 2).toLowerCase();
    if (tag && isLocale(tag)) return tag;
  }
  return DEFAULT_LOCALE;
}

export default function LegacyComecarRedirect() {
  redirect(onboardingPath(detectLocale()));
}
