import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";

/**
 * The bare root redirects to the default / global locale (English).
 * Localized homepages live at `/en`, `/pt`, `/es`, `/fr`, `/de`.
 */
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
