"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateBusiness } from "@/features/businesses/hooks";

interface Props {
  business: {
    id: string;
    name: string;
    description: string | null;
    phone: string | null;
    whatsapp: string | null;
    address: string | null;
    domainDesired: string | null;
  };
}

export function BusinessForm({ business }: Props) {
  const [name, setName] = useState(business.name);
  const [description, setDescription] = useState(business.description ?? "");
  const [phone, setPhone] = useState(business.phone ?? "");
  const [whatsapp, setWhatsapp] = useState(business.whatsapp ?? "");
  const [address, setAddress] = useState(business.address ?? "");
  const [domainDesired, setDomainDesired] = useState(
    business.domainDesired ?? ""
  );
  const update = useUpdateBusiness();
  const { toast } = useToast();
  const router = useRouter();

  async function submit() {
    try {
      await update.mutateAsync({
        id: business.id,
        data: {
          name,
          description: description || null,
          phone: phone || null,
          whatsapp: whatsapp || null,
          address: address || null,
          domainDesired: domainDesired || null,
        },
      });
      toast({ title: "Atualizado" });
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível guardar.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-4">
      <Field label="Nome" id="name" value={name} onChange={setName} />
      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>
      <Field label="Telefone" id="phone" value={phone} onChange={setPhone} />
      <Field
        label="WhatsApp"
        id="whatsapp"
        value={whatsapp}
        onChange={setWhatsapp}
      />
      <Field
        label="Morada"
        id="address"
        value={address}
        onChange={setAddress}
      />
      <Field
        label="Domínio desejado"
        id="domain"
        value={domainDesired}
        onChange={setDomainDesired}
      />
      <div>
        <Button onClick={submit} disabled={update.isPending}>
          {update.isPending && <Spinner size="sm" className="mr-2" />}
          Guardar
        </Button>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
