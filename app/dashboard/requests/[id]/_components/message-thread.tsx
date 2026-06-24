"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { useAddRequestMessage } from "@/features/requests/hooks";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  authorId: string;
  body: string;
  createdAt: string;
}

interface Props {
  requestId: string;
  currentUserId: string;
  messages: Message[];
}

export function MessageThread({ requestId, currentUserId, messages }: Props) {
  const [body, setBody] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const add = useAddRequestMessage();

  async function submit() {
    if (!body.trim()) return;
    try {
      await add.mutateAsync({ id: requestId, data: { body } });
      setBody("");
      router.refresh();
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível enviar.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sem mensagens.</p>
        ) : (
          <div className="space-y-2">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "rounded-md border p-3 text-sm",
                  m.authorId === currentUserId ? "bg-primary/5" : "bg-muted/30"
                )}
              >
                <div className="text-xs text-muted-foreground">
                  {new Date(m.createdAt).toLocaleString()}
                </div>
                <p className="whitespace-pre-wrap">{m.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <textarea
            className="min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Escreve uma mensagem…"
          />
          <div className="flex justify-end">
            <Button onClick={submit} disabled={add.isPending || !body.trim()}>
              {add.isPending && <Spinner size="sm" className="mr-2" />}
              Enviar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
