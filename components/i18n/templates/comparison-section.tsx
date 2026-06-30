import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/marketing";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * "NorthSail vs Wix/WordPress vs traditional agency" comparison — the direct
 * comparison ChatGPT flagged as missing. Inline copy, self-contained, no
 * dependency on the content registry. Honest by design: each column states a
 * fair trade-off, with NorthSail highlighted where it genuinely wins.
 */
type Row = { label: string; northsail: string; diy: string; agency: string };

type ComparisonCopy = {
  title: string;
  subtitle: string;
  colNorthsail: string;
  colDiy: string;
  colAgency: string;
  rows: Row[];
};

const COPY: Record<Locale, ComparisonCopy> = {
  pt: {
    title: "NorthSail vs Wix/WordPress vs agência",
    subtitle:
      "Onde encaixamos: o profissionalismo de uma agência, sem o preço — e sem o trabalho de fazeres tudo sozinho.",
    colNorthsail: "NorthSail",
    colDiy: "Wix / WordPress (faz tu)",
    colAgency: "Agência tradicional",
    rows: [
      {
        label: "Quem constrói",
        northsail: "Nós, por ti",
        diy: "Tu, sozinho",
        agency: "A agência",
      },
      {
        label: "Pronto em",
        northsail: "Dias",
        diy: "Depende do teu tempo",
        agency: "Semanas a meses",
      },
      {
        label: "Custo",
        northsail: "Mensalidade baixa",
        diy: "Baixo, mas dá trabalho",
        agency: "Elevado (milhares)",
      },
      {
        label: "Manutenção e segurança",
        northsail: "Incluída",
        diy: "Por tua conta",
        agency: "Extra / avença",
      },
      {
        label: "Reservas e marcações",
        northsail: "Incluído no plano",
        diy: "Plugins / extras",
        agency: "À medida",
      },
      {
        label: "Parceiro contínuo",
        northsail: "Sim, mês após mês",
        diy: "Não",
        agency: "Depende do contrato",
      },
    ],
  },
  en: {
    title: "NorthSail vs Wix/WordPress vs agency",
    subtitle:
      "Where we fit: the professionalism of an agency, without the price — and without doing it all yourself.",
    colNorthsail: "NorthSail",
    colDiy: "Wix / WordPress (DIY)",
    colAgency: "Traditional agency",
    rows: [
      {
        label: "Who builds it",
        northsail: "We do, for you",
        diy: "You, on your own",
        agency: "The agency",
      },
      {
        label: "Ready in",
        northsail: "Days",
        diy: "Depends on your time",
        agency: "Weeks to months",
      },
      {
        label: "Cost",
        northsail: "Low monthly fee",
        diy: "Low, but it's work",
        agency: "High (thousands)",
      },
      {
        label: "Maintenance & security",
        northsail: "Included",
        diy: "On you",
        agency: "Extra / retainer",
      },
      {
        label: "Bookings & appointments",
        northsail: "Included in plan",
        diy: "Plugins / add-ons",
        agency: "Custom build",
      },
      {
        label: "Ongoing partner",
        northsail: "Yes, month after month",
        diy: "No",
        agency: "Depends on contract",
      },
    ],
  },
  es: {
    title: "NorthSail vs Wix/WordPress vs agencia",
    subtitle:
      "Dónde encajamos: el profesionalismo de una agencia, sin el precio — y sin hacerlo todo tú.",
    colNorthsail: "NorthSail",
    colDiy: "Wix / WordPress (hazlo tú)",
    colAgency: "Agencia tradicional",
    rows: [
      {
        label: "Quién lo construye",
        northsail: "Nosotros, por ti",
        diy: "Tú, solo",
        agency: "La agencia",
      },
      {
        label: "Listo en",
        northsail: "Días",
        diy: "Según tu tiempo",
        agency: "Semanas a meses",
      },
      {
        label: "Coste",
        northsail: "Cuota mensual baja",
        diy: "Bajo, pero da trabajo",
        agency: "Alto (miles)",
      },
      {
        label: "Mantenimiento y seguridad",
        northsail: "Incluido",
        diy: "Por tu cuenta",
        agency: "Extra / cuota",
      },
      {
        label: "Reservas y citas",
        northsail: "Incluido en el plan",
        diy: "Plugins / extras",
        agency: "A medida",
      },
      {
        label: "Socio continuo",
        northsail: "Sí, mes a mes",
        diy: "No",
        agency: "Según el contrato",
      },
    ],
  },
  fr: {
    title: "NorthSail vs Wix/WordPress vs agence",
    subtitle:
      "Notre place : le professionnalisme d'une agence, sans le prix — et sans tout faire vous-même.",
    colNorthsail: "NorthSail",
    colDiy: "Wix / WordPress (vous-même)",
    colAgency: "Agence traditionnelle",
    rows: [
      {
        label: "Qui le construit",
        northsail: "Nous, pour vous",
        diy: "Vous, seul",
        agency: "L'agence",
      },
      {
        label: "Prêt en",
        northsail: "Quelques jours",
        diy: "Selon votre temps",
        agency: "Semaines à mois",
      },
      {
        label: "Coût",
        northsail: "Abonnement mensuel bas",
        diy: "Bas, mais du travail",
        agency: "Élevé (milliers)",
      },
      {
        label: "Maintenance et sécurité",
        northsail: "Incluses",
        diy: "À votre charge",
        agency: "Extra / forfait",
      },
      {
        label: "Réservations et rendez-vous",
        northsail: "Inclus dans l'offre",
        diy: "Plugins / extras",
        agency: "Sur mesure",
      },
      {
        label: "Partenaire continu",
        northsail: "Oui, mois après mois",
        diy: "Non",
        agency: "Selon le contrat",
      },
    ],
  },
  de: {
    title: "NorthSail vs Wix/WordPress vs Agentur",
    subtitle:
      "Wo wir passen: die Professionalität einer Agentur, ohne den Preis — und ohne alles selbst zu machen.",
    colNorthsail: "NorthSail",
    colDiy: "Wix / WordPress (selbst)",
    colAgency: "Klassische Agentur",
    rows: [
      {
        label: "Wer es baut",
        northsail: "Wir, für Sie",
        diy: "Sie, allein",
        agency: "Die Agentur",
      },
      {
        label: "Fertig in",
        northsail: "Tagen",
        diy: "Je nach Ihrer Zeit",
        agency: "Wochen bis Monaten",
      },
      {
        label: "Kosten",
        northsail: "Niedrige Monatsgebühr",
        diy: "Niedrig, aber Aufwand",
        agency: "Hoch (Tausende)",
      },
      {
        label: "Wartung & Sicherheit",
        northsail: "Inklusive",
        diy: "Ihre Sache",
        agency: "Extra / Pauschale",
      },
      {
        label: "Buchungen & Termine",
        northsail: "Im Plan enthalten",
        diy: "Plugins / Extras",
        agency: "Maßgeschneidert",
      },
      {
        label: "Laufender Partner",
        northsail: "Ja, Monat für Monat",
        diy: "Nein",
        agency: "Je nach Vertrag",
      },
    ],
  },
};

export function ComparisonSection({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <Section>
      <SectionHeader title={c.title} subtitle={c.subtitle} />
      <div className="mx-auto max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="p-4 text-label-md text-ink-subtle" />
              <th className="rounded-t-xl bg-brand-accent/5 p-4 text-center text-label-md font-bold text-brand-accent">
                {c.colNorthsail}
              </th>
              <th className="p-4 text-center text-label-md font-semibold text-ink-muted">
                {c.colDiy}
              </th>
              <th className="p-4 text-center text-label-md font-semibold text-ink-muted">
                {c.colAgency}
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row, i) => (
              <tr
                key={row.label}
                className={cn(
                  "border-b border-line",
                  i === c.rows.length - 1 && "border-b-0"
                )}
              >
                <th className="p-4 text-label-md font-medium text-brand">
                  {row.label}
                </th>
                <td className="bg-brand-accent/5 p-4 text-center text-label-md text-brand">
                  <span className="inline-flex items-center gap-1.5">
                    <Check
                      className="h-4 w-4 shrink-0 text-teal"
                      aria-hidden
                    />
                    {row.northsail}
                  </span>
                </td>
                <td className="p-4 text-center text-label-md text-ink-muted">
                  {row.diy}
                </td>
                <td className="p-4 text-center text-label-md text-ink-muted">
                  {row.agency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
