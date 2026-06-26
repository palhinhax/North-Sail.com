import type { Locale } from "@/lib/i18n/config";

/** Localized copy for the global 404 page (`app/not-found.tsx`). */
export interface NotFoundCopy {
  title: string;
  description: string;
  home: string;
  help: string;
}

const NOT_FOUND_COPY: Record<Locale, NotFoundCopy> = {
  en: {
    title: "Page not found",
    description: "The screen you're looking for doesn't exist or has moved.",
    home: "Back to home",
    help: "Get help",
  },
  pt: {
    title: "Página não encontrada",
    description: "O ecrã que procuras não existe ou foi movido.",
    home: "Voltar ao início",
    help: "Pedir ajuda",
  },
  es: {
    title: "Página no encontrada",
    description: "La pantalla que buscas no existe o se ha movido.",
    home: "Volver al inicio",
    help: "Pedir ayuda",
  },
  fr: {
    title: "Page introuvable",
    description: "L'écran que vous cherchez n'existe pas ou a été déplacé.",
    home: "Retour à l'accueil",
    help: "Obtenir de l'aide",
  },
  de: {
    title: "Seite nicht gefunden",
    description: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    home: "Zurück zur Startseite",
    help: "Hilfe anfordern",
  },
};

export function getNotFoundCopy(locale: Locale): NotFoundCopy {
  return NOT_FOUND_COPY[locale];
}
