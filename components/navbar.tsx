"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu, Bell } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Navbar({ onMenuClick, showMenuButton }: NavbarProps) {
  const { data: session } = useSession();
  const homeHref = session?.user?.role === "ADMIN" ? "/admin" : "/dashboard";
  const initial = (session?.user?.name || session?.user?.email || "?")
    .charAt(0)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b border-line bg-background/95 px-4 backdrop-blur-md md:px-6">
      {showMenuButton && (
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      {/* Brand (mobile only — desktop brand lives in the sidebar) */}
      <Link href={homeHref} className="flex items-center gap-2 md:hidden">
        <Image
          src="/logo.png"
          alt="NorthSail"
          width={28}
          height={28}
          className="h-7 w-7"
        />
        <span className="font-bold text-brand">NorthSail</span>
      </Link>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          aria-label="Notificações"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:bg-surface-high hover:text-brand"
        >
          <Bell className="h-4 w-4" />
        </button>
        {session && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-container text-sm font-bold text-white">
            {initial}
          </div>
        )}
      </div>
    </header>
  );
}
