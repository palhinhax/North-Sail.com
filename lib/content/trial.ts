/**
 * Single source of truth for the free-trial offer.
 *
 * The trial lasts {@link TRIAL_DAYS} days (the technical/real value). To
 * customers we always present it as "1 mês" / "um mês" — never mix the two
 * framings. The real dashboard counter may still show the actual days left,
 * but every marketing surface uses the canonical copy below.
 */

/** Canonical trial length in days. Presented to customers as "1 mês". */
export const TRIAL_DAYS = 30;

/**
 * Canonical pt-PT trial copy. Imported by the pt dictionary, the onboarding
 * flow and the dashboard so the wording stays byte-identical everywhere.
 */
export const TRIAL_COPY_PT = {
  /** Short badge / pill copy (selos). */
  badge: "1 mês grátis · sem cartão",
  /** Muted reassurance line that travels with every CTA. */
  reassurance: "Sem cartão, sem compromisso.",
  /** Primary CTA label. */
  ctaStart: "Começar 1 mês grátis",
  /** Full canonical sentence. */
  headline: "Experimente 1 mês grátis. Sem cartão, sem compromisso.",
  /** Factual reinforcement where it fits. */
  reinforce:
    "O seu site fica online durante um mês. Se não gostar, não paga nada.",
  /** Informal variant for the onboarding/dashboard (tone: "tu"). */
  onboarding:
    "Começas com 1 mês grátis (30 dias), sem cartão. Só pagas se decidires continuar.",
} as const;
