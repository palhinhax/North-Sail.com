import { fetchApi } from "@/lib/api";
import type { Business, UpdateBusinessInput } from "../schemas";

export async function getBusiness(id: string): Promise<Business> {
  return fetchApi<Business>(`/api/businesses/${id}`);
}

export async function updateBusiness(
  id: string,
  data: UpdateBusinessInput
): Promise<Business> {
  return fetchApi<Business>(`/api/businesses/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
