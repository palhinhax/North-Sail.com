import { EMAIL_FROM, getResend } from "./resend";
import { passwordResetEmail } from "./templates/password-reset";

export async function sendPasswordResetEmail(params: {
  to: string;
  resetUrl: string;
  name?: string | null;
  expiresInMinutes: number;
}): Promise<void> {
  const { to, resetUrl, name, expiresInMinutes } = params;
  const { subject, html, text } = passwordResetEmail({
    resetUrl,
    name,
    expiresInMinutes,
  });

  const { error } = await getResend().emails.send({
    from: EMAIL_FROM,
    to,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
