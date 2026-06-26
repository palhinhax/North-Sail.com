import { fetchApi } from "@/lib/api";
import type {
  CreateDiscountInput,
  UpdateDiscountInput,
  DiscountCodeDTO,
  RedeemResult,
} from "../schemas";

export async function getDiscounts(): Promise<DiscountCodeDTO[]> {
  return fetchApi<DiscountCodeDTO[]>("/api/admin/discounts");
}

export async function createDiscount(
  data: CreateDiscountInput
): Promise<DiscountCodeDTO> {
  return fetchApi<DiscountCodeDTO>("/api/admin/discounts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateDiscount(
  id: string,
  data: UpdateDiscountInput
): Promise<DiscountCodeDTO> {
  return fetchApi<DiscountCodeDTO>(`/api/admin/discounts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function validateDiscount(code: string): Promise<RedeemResult> {
  return fetchApi<RedeemResult>("/api/discounts/validate", {
    method: "POST",
    body: JSON.stringify({ code }),
  });
}

export async function redeemDiscount(code: string): Promise<RedeemResult> {
  return fetchApi<RedeemResult>("/api/discounts/redeem", {
    method: "POST",
    body: JSON.stringify({ code }),
  });
}
