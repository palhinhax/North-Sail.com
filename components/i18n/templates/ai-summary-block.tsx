import { Sparkles } from "lucide-react";
import { Container } from "@/components/marketing";

/**
 * An "AI-friendly summary" block — natural-language, visible (not hidden),
 * designed to be easily understood and quoted by AI search systems.
 */
export function AiSummaryBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <section className="border-y border-line bg-surface-lowest py-12">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface-low p-6 md:p-8">
          <div className="mb-3 flex items-center gap-2 text-label-md uppercase tracking-wider text-brand-accent">
            <Sparkles className="h-4 w-4" />
            {label}
          </div>
          <p className="text-body-lg text-ink">{text}</p>
        </div>
      </Container>
    </section>
  );
}
