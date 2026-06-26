import { Resend } from "resend";

/**
 * Lazily-instantiated Resend client.
 *
 * We avoid creating it at module load so that builds / routes that never send
 * email don't require RESEND_API_KEY to be present.
 */
let client: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

/** From address used for all transactional email. */
export const EMAIL_FROM =
  process.env.EMAIL_FROM || "NorthSail <no-reply@north-sail.com>";
