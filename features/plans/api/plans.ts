import { fetchApi } from "@/lib/api";
import type { Plan } from "../schemas";

export async function getPlans(): Promise<Plan[]> {
  return fetchApi<Plan[]>("/api/plans");
}
