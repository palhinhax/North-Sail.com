/**
 * Password reset email template (pt-PT).
 * Inline-styled HTML for broad email-client compatibility.
 */
export function passwordResetEmail(params: {
  resetUrl: string;
  name?: string | null;
  /** Minutes until the link expires (for the copy). */
  expiresInMinutes: number;
}): { subject: string; html: string; text: string } {
  const { resetUrl, name, expiresInMinutes } = params;
  const greeting = name ? `Olá ${name},` : "Olá,";
  const subject = "Repor a tua password — NorthSail";

  const html = `<!doctype html>
<html lang="pt">
  <body style="margin:0;padding:0;background-color:#F6F8FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#3A4658;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F6F8FB;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background-color:#FFFFFF;border:1px solid #E6EAF0;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 8px 32px;">
                <span style="font-size:18px;font-weight:700;color:#0A2540;">NorthSail</span>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0 32px;">
                <h1 style="margin:0 0 12px 0;font-size:20px;line-height:1.3;color:#0A2540;font-weight:700;">Repor a tua password</h1>
                <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:#3A4658;">${greeting}</p>
                <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:#3A4658;">Recebemos um pedido para repor a password da tua conta. Carrega no botão abaixo para definir uma nova password.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 32px 24px 32px;">
                <a href="${resetUrl}" style="display:inline-block;background-color:#2F6BFF;color:#FFFFFF;text-decoration:none;font-size:15px;font-weight:600;padding:12px 28px;border-radius:10px;">Repor password</a>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px 32px;">
                <p style="margin:0 0 16px 0;font-size:13px;line-height:1.6;color:#7A8699;">Este link expira em ${expiresInMinutes} minutos. Se não pediste esta alteração, podes ignorar este email — a tua password continua igual.</p>
                <p style="margin:0;font-size:13px;line-height:1.6;color:#7A8699;">Se o botão não funcionar, copia e cola este endereço no teu navegador:<br/><a href="${resetUrl}" style="color:#2F6BFF;word-break:break-all;">${resetUrl}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #E6EAF0;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#7A8699;">NorthSail · Websites e mini apps para o teu negócio</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `${greeting}

Recebemos um pedido para repor a password da tua conta NorthSail.
Abre o link abaixo para definir uma nova password:

${resetUrl}

Este link expira em ${expiresInMinutes} minutos. Se não pediste esta alteração, ignora este email — a tua password continua igual.

NorthSail`;

  return { subject, html, text };
}
