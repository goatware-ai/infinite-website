// The contact form is handled by the teamwork-board backend, served on this domain under
// /teamwork-board/api (the Vite dev server proxies the same path to it locally).
const API_URL = (import.meta.env.VITE_API_URL || "/teamwork-board/api").replace(/\/+$/, "");

export async function api<T>(path:string, options:RequestInit = {}):Promise<T> {
  const headers = new Headers(options.headers);
  if (options.body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  headers.set("Accept", "application/json");

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {...options, headers});
  } catch {
    throw new Error("We couldn't reach our server. Please try again, or email us directly.");
  }

  const raw = await response.text();
  let body: any = {};
  if (raw) {
    try { body = JSON.parse(raw); }
    catch { body = { message: raw.slice(0, 240) }; }
  }
  if (!response.ok) {
    // teamwork-board errors look like { error: { message, details: [{ field, message }] } }.
    const message = body?.error?.details?.[0]?.message ?? body?.error?.message ?? body?.message;
    throw new Error(typeof message === "string" ? message : "Something went wrong. Please try again.");
  }
  return body as T;
}

export const post = <T,>(path:string, data:unknown) => api<T>(path,{method:"POST",body:JSON.stringify(data)});
