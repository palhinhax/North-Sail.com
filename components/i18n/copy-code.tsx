"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

/**
 * Shows a promo/discount code with a one-click "copy" button. Client component
 * (needs the clipboard API + local "copied" state).
 */
export function CopyCode({
  code,
  copyLabel,
  copiedLabel,
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the code is visible for manual copy */
    }
  }

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <code className="flex-1 rounded-xl border border-dashed border-white/30 bg-white/5 px-5 py-4 text-center font-mono text-2xl font-bold tracking-widest text-white">
        {code}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-label-md font-semibold text-brand transition-colors hover:bg-white/90"
      >
        {copied ? (
          <>
            <Check className="h-5 w-5 text-teal-ink" />
            {copiedLabel}
          </>
        ) : (
          <>
            <Copy className="h-5 w-5" />
            {copyLabel}
          </>
        )}
      </button>
    </div>
  );
}
