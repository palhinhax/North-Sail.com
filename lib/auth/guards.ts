import { NextResponse } from "next/server";
import type { Session } from "next-auth";
import { Role } from "@prisma/client";
import { auth } from "./config";

export async function requireAuth() {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    } as const;
  }
  return { session } as const;
}

export async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    } as const;
  }
  if (session.user.role !== Role.ADMIN) {
    return {
      error: NextResponse.json({ message: "Forbidden" }, { status: 403 }),
    } as const;
  }
  return { session } as const;
}

export function isAdmin(session: Session | null | undefined): boolean {
  return session?.user?.role === Role.ADMIN;
}
