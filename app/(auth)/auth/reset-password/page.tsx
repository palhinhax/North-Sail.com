import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { authPath } from "@/lib/i18n/routes";

/**
 * Legacy entry point. Now lives at `/{locale}/auth/reset-password`. Reset emails
 * sent before localization point here, so we preserve the `token` query param
 * when redirecting to the localized page.
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

export default function LegacyResetPasswordRedirect({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const base = authPath(detectLocale(), "reset-password");
  const token = searchParams.token;
  redirect(token ? `${base}?token=${encodeURIComponent(token)}` : base);
}
