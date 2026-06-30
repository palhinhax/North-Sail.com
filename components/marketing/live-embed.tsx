"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds a same-origin HTML page (e.g. a design export in /public) in an
 * iframe. The embedded pages render client-side (dc-runtime + React), so to
 * show a specific section we poll for the anchor element after it mounts and
 * scroll the iframe to it.
 *
 * `interactive={false}` makes it a non-clickable preview (good for the hero).
 */
export function LiveEmbed({
  src,
  anchor,
  title,
  className,
  interactive = true,
}: {
  src: string;
  anchor?: string;
  title: string;
  className?: string;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!anchor) return;
    const iframe = ref.current;
    if (!iframe) return;

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      try {
        const doc = iframe.contentWindow?.document;
        const el = doc?.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ block: "start" });
          clearInterval(timer);
        }
      } catch {
        // ignore until the embedded document is ready
      }
      if (tries > 50) clearInterval(timer); // give up after ~10s
    }, 200);

    return () => clearInterval(timer);
  }, [anchor]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      className={className}
      style={interactive ? undefined : { pointerEvents: "none" }}
    />
  );
}
