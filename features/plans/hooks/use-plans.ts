import { useQuery } from "@tanstack/react-query";
import { getPlans } from "../api";

export const planKeys = {
  all: ["plans"] as const,
  lists: () => [...planKeys.all, "list"] as const,
};

export function usePlans() {
  return useQuery({
    queryKey: planKeys.lists(),
    queryFn: getPlans,
  });
}
