"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, User } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Navbar({ onMenuClick, showMenuButton }: NavbarProps) {
  const { data: session } = useSession();
  const homeHref = session?.user?.role === "ADMIN" ? "/admin" : "/dashboard";

  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-background/95 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        {showMenuButton && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-4 md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <Link
          href={session ? homeHref : "/"}
          aria-label="NorthSail"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="NorthSail"
            width={140}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="ml-auto flex items-center space-x-4">
          {session ? (
            <>
              <div className="hidden items-center gap-2 text-ink-muted sm:flex">
                <User className="h-4 w-4" />
                <span className="text-label-md">
                  {session.user?.name || session.user?.email}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Entrar
                </Button>
              </Link>
              <Link href="/comecar">
                <Button size="sm">Começar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
