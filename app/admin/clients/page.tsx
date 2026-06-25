import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ClientsList, type AdminClient } from "./_components/clients-list";

export default async function AdminClientsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const businesses = await prisma.business.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      owner: { select: { id: true, name: true, email: true } },
      subscription: { include: { plan: true } },
    },
  });

  const clients: AdminClient[] = businesses.map((b) => ({
    id: b.id,
    name: b.name,
    ownerEmail: b.owner?.email ?? null,
    planName: b.subscription?.plan.name ?? null,
    status: b.subscription?.status ?? null,
  }));

  return <ClientsList clients={clients} />;
}
