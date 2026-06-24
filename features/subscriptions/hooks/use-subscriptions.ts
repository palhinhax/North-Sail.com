import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getSubscription, listSubscriptions, updateSubscription } from "../api";
import type { UpdateSubscriptionInput } from "../schemas";

export const subscriptionKeys = {
  all: ["subscriptions"] as const,
  lists: () => [...subscriptionKeys.all, "list"] as const,
  detail: (id: string) => [...subscriptionKeys.all, "detail", id] as const,
};

export function useSubscriptions() {
  return useQuery({
    queryKey: subscriptionKeys.lists(),
    queryFn: listSubscriptions,
  });
}

export function useSubscription(id: string) {
  return useQuery({
    queryKey: subscriptionKeys.detail(id),
    queryFn: () => getSubscription(id),
    enabled: !!id,
  });
}

export function useUpdateSubscription() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSubscriptionInput }) =>
      updateSubscription(id, data),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: subscriptionKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: subscriptionKeys.detail(vars.id),
      });
    },
  });
}
