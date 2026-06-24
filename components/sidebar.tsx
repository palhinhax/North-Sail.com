"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  ClipboardList,
  Building2,
  Receipt,
  Inbox,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const clientNav = [
  { title: "Visão geral", href: "/dashboard", icon: LayoutDashboard },
  { title: "Subscrição", href: "/dashboard/subscription", icon: CreditCard },
  { title: "Pedidos", href: "/dashboard/requests", icon: ClipboardList },
  { title: "Negócio", href: "/dashboard/business", icon: Building2 },
];

const adminNav = [
  { title: "Visão geral", href: "/admin", icon: LayoutDashboard },
  { title: "Clientes", href: "/admin/clients", icon: Users },
  { title: "Subscrições", href: "/admin/subscriptions", icon: CreditCard },
  { title: "Pedidos", href: "/admin/requests", icon: ClipboardList },
  { title: "Leads", href: "/admin/leads", icon: Inbox },
  { title: "Planos", href: "/admin/plans", icon: Receipt },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const navItems = session?.user?.role === "ADMIN" ? adminNav : clientNav;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-line bg-surface-low transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4 md:hidden">
          <span className="font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="space-y-1 p-4">
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
                  "flex items-center gap-3 rounded-md px-3 py-2 text-label-md font-medium transition-colors",
                  isActive
                    ? "bg-brand-container text-white"
                    : "text-ink-muted hover:bg-surface-high hover:text-brand"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
