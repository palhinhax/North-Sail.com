import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addRequestMessage,
  changeRequestStatus,
  createRequest,
  getRequest,
  listRequests,
  updateRequest,
} from "../api";
import type {
  CreateRequestInput,
  MessageInput,
  StatusChangeInput,
  UpdateRequestInput,
} from "../schemas";

export const requestKeys = {
  all: ["requests"] as const,
  lists: () => [...requestKeys.all, "list"] as const,
  detail: (id: string) => [...requestKeys.all, "detail", id] as const,
};

export function useRequests() {
  return useQuery({ queryKey: requestKeys.lists(), queryFn: listRequests });
}

export function useRequest(id: string) {
  return useQuery({
    queryKey: requestKeys.detail(id),
    queryFn: () => getRequest(id),
    enabled: !!id,
  });
}

export function useCreateRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateRequestInput) => createRequest(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: requestKeys.lists() }),
  });
}

export function useUpdateRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateRequestInput }) =>
      updateRequest(id, data),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: requestKeys.lists() });
      qc.invalidateQueries({ queryKey: requestKeys.detail(vars.id) });
    },
  });
}

export function useChangeRequestStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: StatusChangeInput }) =>
      changeRequestStatus(id, data),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: requestKeys.lists() });
      qc.invalidateQueries({ queryKey: requestKeys.detail(vars.id) });
    },
  });
}

export function useAddRequestMessage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: MessageInput }) =>
      addRequestMessage(id, data),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: requestKeys.detail(vars.id) });
    },
  });
}
