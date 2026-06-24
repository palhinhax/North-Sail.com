import { fetchApi } from "@/lib/api";
import type { Subscription, UpdateSubscriptionInput } from "../schemas";

export async function getSubscription(id: string): Promise<Subscription> {
  return fetchApi<Subscription>(`/api/subscriptions/${id}`);
}

export async function updateSubscription(
  id: string,
  data: UpdateSubscriptionInput
): Promise<Subscription> {
  return fetchApi<Subscription>(`/api/subscriptions/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function listSubscriptions(): Promise<Subscription[]> {
  return fetchApi<Subscription[]>("/api/subscriptions");
}
