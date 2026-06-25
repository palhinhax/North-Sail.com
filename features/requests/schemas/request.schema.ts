import { z } from "zod";
import { RequestType, RequestStatus, Sector } from "@prisma/client";

export const createRequestSchema = z.object({
  type: z.nativeEnum(RequestType).default(RequestType.CHANGE),
  title: z.string().min(3).max(200),
  description: z.string().min(3).max(5000),
  sector: z.nativeEnum(Sector).optional(),
  priority: z.number().int().min(1).max(3).optional(),
});

export const updateRequestSchema = z.object({
  title: z.string().min(3).max(200).optional(),
  description: z.string().min(3).max(5000).optional(),
  priority: z.number().int().min(1).max(3).optional(),
  estimatedHours: z.number().min(0).optional(),
  actualHours: z.number().min(0).optional(),
  assignedToId: z.string().nullable().optional(),
});

export const statusChangeSchema = z.object({
  status: z.nativeEnum(RequestStatus),
  note: z.string().max(2000).optional(),
});

export const attachmentInputSchema = z.object({
  key: z.string().min(1).max(500),
  fileName: z.string().min(1).max(255),
  contentType: z.string().min(1).max(150),
  size: z
    .number()
    .int()
    .min(0)
    .max(50 * 1024 * 1024), // 50 MB
});
export type AttachmentInput = z.infer<typeof attachmentInputSchema>;

export const messageSchema = z
  .object({
    body: z.string().max(5000).optional().default(""),
    attachments: z.array(attachmentInputSchema).max(10).optional().default([]),
  })
  .refine((d) => d.body.trim().length > 0 || d.attachments.length > 0, {
    message: "Escreve uma mensagem ou anexa um ficheiro.",
  });

export const presignSchema = z.object({
  requestId: z.string().min(1),
  fileName: z.string().min(1).max(255),
  contentType: z.string().min(1).max(150),
});

export interface RequestAttachment {
  id: string;
  fileName: string;
  contentType: string;
  size: number;
  createdAt: string;
}

export type CreateRequestInput = z.infer<typeof createRequestSchema>;
export type UpdateRequestInput = z.infer<typeof updateRequestSchema>;
export type StatusChangeInput = z.infer<typeof statusChangeSchema>;
export type MessageInput = z.infer<typeof messageSchema>;

export interface RequestStatusEvent {
  id: string;
  status: RequestStatus;
  note: string | null;
  changedById: string | null;
  createdAt: string;
}

export interface RequestMessage {
  id: string;
  authorId: string;
  body: string;
  createdAt: string;
}

export interface ServiceRequest {
  id: string;
  businessId: string;
  type: RequestType;
  title: string;
  description: string;
  sector: Sector;
  status: RequestStatus;
  priority: number;
  estimatedHours: number | null;
  actualHours: number | null;
  assignedToId: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  statusEvents?: RequestStatusEvent[];
  messages?: RequestMessage[];
  business?: {
    id: string;
    name: string;
    owner?: { id: string; email: string; name: string | null };
  };
  assignedTo?: { id: string; email: string; name: string | null } | null;
}

export const requestStatusOrder: RequestStatus[] = [
  RequestStatus.SUBMITTED,
  RequestStatus.IN_REVIEW,
  RequestStatus.IN_DEVELOPMENT,
  RequestStatus.AWAITING_CLIENT,
  RequestStatus.READY_FOR_REVIEW,
  RequestStatus.PUBLISHED,
  RequestStatus.DONE,
];

export const requestStatusLabels: Record<RequestStatus, string> = {
  SUBMITTED: "Submetido",
  IN_REVIEW: "Em análise",
  IN_DEVELOPMENT: "Em desenvolvimento",
  AWAITING_CLIENT: "À espera do cliente",
  READY_FOR_REVIEW: "Pronto para revisão",
  PUBLISHED: "Publicado",
  DONE: "Concluído",
  REJECTED: "Rejeitado",
};
