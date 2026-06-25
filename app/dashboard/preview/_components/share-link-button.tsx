"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ShareLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: "O meu site", url });
        return;
      }
    } catch {
      // user cancelled native share — fall through to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copiado", description: url });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Não foi possível copiar",
        description: url,
        variant: "destructive",
      });
    }
  }

  return (
    <Button onClick={share} className="gap-2">
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      Partilhar link
    </Button>
  );
}
