import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

/**
 * Floating WhatsApp button shown on every public marketing page.
 *
 * The number is read from the `NEXT_PUBLIC_WHATSAPP_NUMBER` environment
 * variable (international format, digits only — e.g. 351912345678). If the
 * variable is not set, the button renders nothing, so it never shows a broken
 * link. No "use client" needed: it only reads a build-time public env var and
 * renders a static link.
 */
const ARIA_LABEL: Record<Locale, string> = {
  pt: "Falar connosco no WhatsApp",
  en: "Chat with us on WhatsApp",
  es: "Hablar con nosotros por WhatsApp",
  fr: "Discuter avec nous sur WhatsApp",
  de: "Mit uns auf WhatsApp chatten",
};

const PREFILL: Record<Locale, string> = {
  pt: "Olá! Tenho interesse num site/app para o meu negócio.",
  en: "Hi! I'm interested in a website/app for my business.",
  es: "¡Hola! Me interesa una web/app para mi negocio.",
  fr: "Bonjour ! Je suis intéressé par un site/app pour mon entreprise.",
  de: "Hallo! Ich interessiere mich für eine Website/App für mein Unternehmen.",
};

export function WhatsAppFab({ locale }: { locale: Locale }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    PREFILL[locale]
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ARIA_LABEL[locale]}
      title={ARIA_LABEL[locale]}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
