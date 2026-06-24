import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BusinessForm } from "./_components/business-form";

export default async function BusinessPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/login");
  if (session.user.role === "ADMIN") redirect("/admin");

  const business = await prisma.business.findUnique({
    where: { ownerId: session.user.id },
  });
  if (!business) {
    return <p>Sem negócio.</p>;
  }

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">O meu negócio</h1>
      <BusinessForm
        business={{
          id: business.id,
          name: business.name,
          description: business.description,
          phone: business.phone,
          whatsapp: business.whatsapp,
          address: business.address,
          domainDesired: business.domainDesired,
        }}
      />
    </div>
  );
}
