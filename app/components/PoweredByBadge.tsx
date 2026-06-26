import Image from "next/image";

type Variant = "light" | "dark";
type Align = "left" | "center" | "right";

interface PoweredByBadgeProps {
  variant?: Variant;
  align?: Align;
}

const ALIGN_CLASS: Record<Align, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

// Brand-gradient wordmark, tuned per surface for contrast.
const GRADIENT: Record<Variant, string> = {
  light:
    "linear-gradient(110deg,#0A2540 0%,#2F6BFF 35%,#19B5A7 50%,#2F6BFF 65%,#0A2540 100%)",
  dark: "linear-gradient(110deg,#C2CCDA 0%,#5B8DEF 35%,#19B5A7 50%,#5B8DEF 65%,#C2CCDA 100%)",
};

export function PoweredByBadge({
  variant = "light",
  align = "center",
}: PoweredByBadgeProps) {
  return (
    <div className={`flex w-full ${ALIGN_CLASS[align]}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes nsBadgeShimmer { to { background-position: -200% center; } }
            .ns-badge { transition: transform .25s ease; }
            .ns-badge:hover { transform: translateY(-1px); }
            .ns-badge__word {
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              background-size: 200% auto;
              background-position: 0% center;
              font-weight: 600;
              letter-spacing: -0.01em;
              transition: letter-spacing .3s ease;
            }
            .ns-badge:hover .ns-badge__word {
              letter-spacing: .015em;
              animation: nsBadgeShimmer 2.4s linear infinite;
            }
            .ns-badge__logo { transition: transform .3s ease; }
            .ns-badge:hover .ns-badge__logo { transform: scale(1.06) rotate(-2deg); }
            @media (prefers-reduced-motion: reduce) {
              .ns-badge, .ns-badge:hover, .ns-badge__word, .ns-badge:hover .ns-badge__word,
              .ns-badge__logo, .ns-badge:hover .ns-badge__logo {
                animation: none !important;
                transform: none !important;
                transition: none !important;
              }
            }
          `,
        }}
      />
      <a
        href="https://north-sail.com"
        target="_blank"
        rel="noopener"
        aria-label="NorthSail — north-sail.com"
        className="ns-badge inline-flex items-center gap-2 py-2 leading-none"
      >
        <Image
          src="/logo.png"
          alt=""
          width={22}
          height={22}
          aria-hidden
          className="ns-badge__logo h-[22px] w-auto"
        />
        <span
          className="ns-badge__word text-[14px]"
          style={{ backgroundImage: GRADIENT[variant] }}
        >
          NorthSail
        </span>
      </a>
    </div>
  );
}
