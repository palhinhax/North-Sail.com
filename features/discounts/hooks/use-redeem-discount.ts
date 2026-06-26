import { useMutation } from "@tanstack/react-query";
import { validateDiscount, redeemDiscount } from "../api";

export function useValidateDiscount() {
  return useMutation({
    mutationFn: (code: string) => validateDiscount(code),
  });
}

export function useRedeemDiscount() {
  return useMutation({
    mutationFn: (code: string) => redeemDiscount(code),
  });
}
