import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBusiness, updateBusiness } from "../api";
import type { UpdateBusinessInput } from "../schemas";

export const businessKeys = {
  all: ["businesses"] as const,
  detail: (id: string) => [...businessKeys.all, "detail", id] as const,
};

export function useBusiness(id: string) {
  return useQuery({
    queryKey: businessKeys.detail(id),
    queryFn: () => getBusiness(id),
    enabled: !!id,
  });
}

export function useUpdateBusiness() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBusinessInput }) =>
      updateBusiness(id, data),
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: businessKeys.detail(vars.id) });
    },
  });
}
