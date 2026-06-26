"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  ClipboardList,
  Building2,
  Receipt,
  Inbox,
  Eye,
  Ticket,
  HelpCircle,
  LogOut,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const clientNav = [
  { title: "Visão geral", href: "/dashboard", icon: LayoutDashboard },
  { title: "Pré-visualização", href: "/dashboard/preview", icon: Eye },
  { title: "Pedidos", href: "/dashboard/requests", icon: ClipboardList },
  { title: "Subscrição", href: "/dashboard/subscription", icon: CreditCard },
  { title: "Negócio", href: "/dashboard/business", icon: Building2 },
];

const adminNav = [
  { title: "Visão geral", href: "/admin", icon: LayoutDashboard },
  { title: "Clientes", href: "/admin/clients", icon: Users },
  { title: "Subscrições", href: "/admin/subscriptions", icon: CreditCard },
  { title: "Pedidos", href: "/admin/requests", icon: ClipboardList },
  { title: "Leads", href: "/admin/leads", icon: Inbox },
  { title: "Planos", href: "/admin/plans", icon: Receipt },
  { title: "Descontos", href: "/admin/discounts", icon: Ticket },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";
  const navItems = isAdmin ? adminNav : clientNav;
  const homeHref = isAdmin ? "/admin" : "/dashboard";
  const newRequestHref = isAdmin ? "/admin/requests" : "/dashboard/requests";

  const displayName = session?.user?.name || session?.user?.email || "Conta";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-screen w-64 transform flex-col border-r border-line bg-surface-low p-3 transition-transform duration-200 ease-in-out md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand */}
        <div className="flex items-center justify-between px-2 pb-4 pt-2">
          <Link
            href={homeHref}
            className="flex items-center gap-2"
            onClick={onClose}
          >
            <Image
              src="/logo.png"
              alt="NorthSail"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="leading-tight">
              <span className="block font-bold text-brand">NorthSail</span>
              <span className="block text-label-sm text-ink-muted">
                Gestão de Negócio
              </span>
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Primary action — clients create requests; admins don't. */}
        {!isAdmin && (
          <Link href={newRequestHref} onClick={onClose}>
            <Button className="mb-4 w-full gap-2">
              <Plus className="h-4 w-4" />
              Novo pedido
            </Button>
          </Link>
        )}

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                item.href !== "/admin" &&
                pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-label-md font-medium transition-all hover:scale-[1.01]",
                  isActive
                    ? "bg-brand-container text-white shadow-sm"
                    : "text-ink-muted hover:bg-surface-high hover:text-brand"
                )}
              >
                <item.icon className="h-[18px] w-[18px]" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="mt-auto flex flex-col gap-1 border-t border-line pt-2">
          <a
            href="mailto:ajuda@north-sail.com"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-label-md font-medium text-ink-muted transition-colors hover:bg-surface-high hover:text-brand"
          >
            <HelpCircle className="h-[18px] w-[18px]" />
            Ajuda
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-label-md font-medium text-ink-muted transition-colors hover:bg-surface-high hover:text-brand"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Sair
          </button>

          <div className="mt-1 flex items-center gap-3 rounded-lg border border-line/60 bg-surface-lowest px-3 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-container font-bold text-white">
              {initial}
            </div>
            <div className="min-w-0">
              <span className="block truncate text-label-md text-brand">
                {displayName}
              </span>
              <span className="block text-label-sm text-ink-muted">
                {isAdmin ? "Administrador" : "Cliente"}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
