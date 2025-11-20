const rawBackendUrl = import.meta.env.VITE_BACKEND_URL?.trim();
const removeTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const resolvedBackendUrl =
  rawBackendUrl && rawBackendUrl.length > 0
    ? removeTrailingSlash(rawBackendUrl)
    : import.meta.env.DEV
    ? "http://localhost:3000/api"
    : typeof window !== "undefined"
    ? `${window.location.origin.replace(/\/+$/, "")}/api`
    : undefined;

export const BACKEND_URL = resolvedBackendUrl;

if (!BACKEND_URL) {
  console.warn("Backend URL is not configured. Set VITE_BACKEND_URL to point at the FixRite API.");
}
