import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  AdminRequestsBoard,
  type AdminRequest,
} from "./_components/admin-requests-board";

export default async function AdminRequestsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const requests = await prisma.serviceRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      business: { include: { owner: { select: { name: true, email: true } } } },
    },
  });

  const data: AdminRequest[] = requests.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    status: r.status,
    type: r.type,
    estimatedHours: r.estimatedHours,
    businessId: r.businessId,
    businessName: r.business.name,
    ownerName: r.business.owner?.name ?? null,
    ownerEmail: r.business.owner?.email ?? null,
  }));

  return <AdminRequestsBoard requests={data} />;
}
