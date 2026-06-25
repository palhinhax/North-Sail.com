"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Paperclip,
  X,
  FileText,
  Download,
  Send,
  MessageSquare,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { useAddRequestMessage } from "@/features/requests/hooks";
import { cn } from "@/lib/utils";

interface Attachment {
  id: string;
  fileName: string;
  contentType: string;
  size: number;
}

interface Message {
  id: string;
  authorId: string;
  body: string;
  createdAt: string;
  attachments?: Attachment[];
}

interface Props {
  requestId: string;
  currentUserId: string;
  messages: Message[];
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function MessageThread({ requestId, currentUserId, messages }: Props) {
  const [body, setBody] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const router = useRouter();
  const add = useAddRequestMessage();

  function pickFiles(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)].slice(0, 10));
    if (fileInput.current) fileInput.current.value = "";
  }

  async function uploadOne(file: File) {
    const presign = await fetch("/api/uploads/presign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requestId,
        fileName: file.name,
        contentType: file.type || "application/octet-stream",
      }),
    });
    const data = await presign.json();
    if (!presign.ok) throw new Error(data.message || "Falha no upload.");
    const put = await fetch(data.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type || "application/octet-stream" },
      body: file,
    });
    if (!put.ok) throw new Error("Falha ao enviar o ficheiro.");
    return {
      key: data.key as string,
      fileName: file.name,
      contentType: file.type || "application/octet-stream",
      size: file.size,
    };
  }

  async function submit() {
    if (!body.trim() && files.length === 0) return;
    setUploading(true);
    try {
      const attachments = [];
      for (const f of files) attachments.push(await uploadOne(f));
      await add.mutateAsync({ id: requestId, data: { body, attachments } });
      setBody("");
      setFiles([]);
      router.refresh();
    } catch (e) {
      toast({
        title: "Erro",
        description: (e as Error).message || "Não foi possível enviar.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  }

  const busy = uploading || add.isPending;

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="shrink-0 border-b">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
          Conversa
        </CardTitle>
      </CardHeader>

      {/* Messages area */}
      <div className="hide-scrollbar flex max-h-[420px] min-h-[160px] flex-col gap-3 overflow-y-auto bg-muted/20 p-4">
        {messages.length === 0 ? (
          <div className="m-auto max-w-[85%] rounded-2xl rounded-tl-sm border bg-card p-3 text-sm text-muted-foreground shadow-sm">
            A nossa equipa irá analisar o seu pedido em breve. Pode deixar
            informações adicionais aqui.
          </div>
        ) : (
          messages.map((m) => {
            const mine = m.authorId === currentUserId;
            return (
              <div
                key={m.id}
                className={cn(
                  "flex flex-col gap-1",
                  mine ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl p-3 text-sm shadow-sm",
                    mine
                      ? "rounded-tr-sm bg-secondary text-secondary-foreground"
                      : "rounded-tl-sm border bg-card text-foreground"
                  )}
                >
                  {m.body && (
                    <p className="whitespace-pre-wrap break-words">{m.body}</p>
                  )}
                  {m.attachments && m.attachments.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.attachments.map((a) =>
                        a.contentType.startsWith("image/") ? (
                          <a
                            key={a.id}
                            href={`/api/attachments/${a.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`/api/attachments/${a.id}`}
                              alt={a.fileName}
                              className="max-h-40 rounded-md border"
                            />
                          </a>
                        ) : (
                          <a
                            key={a.id}
                            href={`/api/attachments/${a.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs",
                              mine
                                ? "border-white/25 bg-white/10 hover:bg-white/20"
                                : "bg-background hover:bg-muted"
                            )}
                          >
                            <FileText className="h-4 w-4 shrink-0 opacity-80" />
                            <span className="max-w-[180px] truncate">
                              {a.fileName}
                            </span>
                            <span className="opacity-70">
                              {formatSize(a.size)}
                            </span>
                            <Download className="h-3.5 w-3.5 opacity-80" />
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
                <span className="px-1 text-[11px] text-muted-foreground">
                  {new Date(m.createdAt).toLocaleString("pt-PT")}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Composer */}
      <div className="shrink-0 space-y-2 border-t bg-card p-3">
        {/* Selected files (pending upload) */}
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {files.map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-md border bg-muted/40 px-2 py-1 text-xs"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="max-w-[160px] truncate">{f.name}</span>
                <span className="text-muted-foreground">
                  {formatSize(f.size)}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, idx) => idx !== i))
                  }
                  aria-label="Remover"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}

        <input
          ref={fileInput}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => pickFiles(e.target.files)}
        />

        <div className="flex items-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => fileInput.current?.click()}
            disabled={busy}
            aria-label="Anexar ficheiro"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <textarea
            rows={1}
            className="max-h-32 min-h-[40px] flex-grow resize-none rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!busy) submit();
              }
            }}
            placeholder="Escreve uma mensagem…"
          />
          <Button
            onClick={submit}
            size="icon"
            className="shrink-0"
            disabled={busy || (!body.trim() && files.length === 0)}
            aria-label="Enviar"
          >
            {busy ? <Spinner size="sm" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );
}
