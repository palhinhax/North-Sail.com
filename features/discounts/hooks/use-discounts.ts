import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDiscounts, createDiscount, updateDiscount } from "../api";
import type { CreateDiscountInput, UpdateDiscountInput } from "../schemas";

export const discountKeys = {
  all: ["discounts"] as const,
  lists: () => [...discountKeys.all, "list"] as const,
};

export function useDiscounts() {
  return useQuery({
    queryKey: discountKeys.lists(),
    queryFn: getDiscounts,
  });
}

export function useCreateDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateDiscountInput) => createDiscount(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: discountKeys.lists() });
    },
  });
}

export function useUpdateDiscount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateDiscountInput }) =>
      updateDiscount(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: discountKeys.lists() });
    },
  });
}
