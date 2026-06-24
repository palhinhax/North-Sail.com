import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FaqItem({ question, answer, defaultOpen }: FaqItemProps) {
  return (
    <details
      className="group overflow-hidden rounded-lg border border-line bg-surface-lowest"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-headline-sm text-brand transition-colors hover:bg-surface-low">
        {question}
        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="border-t border-line p-4 text-body-md text-ink-muted">
        {answer}
      </div>
    </details>
  );
}
