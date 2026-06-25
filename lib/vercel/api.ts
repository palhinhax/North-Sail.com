/**
 * Minimal Vercel REST API helpers to attach client domains to their projects.
 * Requires VERCEL_TOKEN (and VERCEL_TEAM_ID if the project lives in a team).
 */

const BASE = "https://api.vercel.com";

export interface VercelVerification {
  type: string;
  domain: string;
  value: string;
  reason: string;
}

export interface VercelDomainStatus {
  name: string;
  verified: boolean;
  verification: VercelVerification[];
  /** Suggested DNS records to point the domain at the deployment. */
  dns: { type: string; name: string; value: string }[];
  error?: string;
}

function teamQuery() {
  const t = process.env.VERCEL_TEAM_ID;
  return t ? `?teamId=${encodeURIComponent(t)}` : "";
}

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    "Content-Type": "application/json",
  };
}

export function vercelConfigured() {
  return !!process.env.VERCEL_TOKEN;
}

/** Standard DNS guidance: apex → A record, subdomain → CNAME. */
function suggestedDns(domain: string) {
  const labels = domain.split(".");
  const isApex = labels.length <= 2;
  if (isApex) {
    return [{ type: "A", name: "@", value: "76.76.21.21" }];
  }
  const sub = labels.slice(0, labels.length - 2).join(".");
  return [{ type: "CNAME", name: sub, value: "cname.vercel-dns.com" }];
}

export async function addProjectDomain(
  projectId: string,
  name: string
): Promise<VercelDomainStatus> {
  const res = await fetch(
    `${BASE}/v10/projects/${encodeURIComponent(projectId)}/domains${teamQuery()}`,
    { method: "POST", headers: authHeaders(), body: JSON.stringify({ name }) }
  );
  const data = await res.json();
  // 409 = already added to this project → treat as success, then read status.
  if (!res.ok && data?.error?.code !== "domain_already_in_use") {
    return {
      name,
      verified: false,
      verification: [],
      dns: suggestedDns(name),
      error: data?.error?.message || `Vercel: ${res.status}`,
    };
  }
  return getProjectDomain(projectId, name);
}

export async function getProjectDomain(
  projectId: string,
  name: string
): Promise<VercelDomainStatus> {
  const res = await fetch(
    `${BASE}/v9/projects/${encodeURIComponent(projectId)}/domains/${encodeURIComponent(
      name
    )}${teamQuery()}`,
    { headers: authHeaders() }
  );
  const data = await res.json();
  if (!res.ok) {
    return {
      name,
      verified: false,
      verification: [],
      dns: suggestedDns(name),
      error: data?.error?.message || `Vercel: ${res.status}`,
    };
  }
  return {
    name,
    verified: !!data.verified,
    verification: data.verification ?? [],
    dns: suggestedDns(name),
  };
}
