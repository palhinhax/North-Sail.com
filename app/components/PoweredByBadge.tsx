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

const TEXT_CLASS: Record<Variant, string> = {
  light: "text-[#7A8699] hover:text-[#0A2540]",
  dark: "text-[#C2CCDA] hover:text-white",
};

export function PoweredByBadge({
  variant = "light",
  align = "center",
}: PoweredByBadgeProps) {
  return (
    <div className={`flex w-full ${ALIGN_CLASS[align]}`}>
      <a
        href="https://north-sail.com"
        target="_blank"
        rel="noopener"
        aria-label="Criado por NorthSail — north-sail.com"
        className={`inline-flex items-center gap-2 py-2 text-[12px] leading-none transition-colors ${TEXT_CLASS[variant]}`}
      >
        <Image
          src="/logo.png"
          alt=""
          width={18}
          height={18}
          aria-hidden
          className="h-[18px] w-auto"
        />
        <span>Criado por NorthSail</span>
      </a>
    </div>
  );
}
