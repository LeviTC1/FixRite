import { BACKEND_URL } from "../config";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormResponse = {
  success: boolean;
  message?: string;
  error?: string;
  details?: string[];
};

const CONTACT_ENDPOINT = BACKEND_URL ? `${BACKEND_URL}/contact` : undefined;

const sanitizePayload = (payload: ContactFormPayload): ContactFormPayload => ({
  name: payload.name.trim(),
  email: payload.email.trim(),
  phone: payload.phone.trim(),
  message: payload.message.trim(),
});

export async function submitContactForm(formData: ContactFormPayload): Promise<ContactFormResponse> {
  if (!CONTACT_ENDPOINT) {
    throw new Error("API endpoint is not configured. Please try again shortly.");
  }

  const payload = sanitizePayload(formData);

  let response: Response;
  try {
    response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "cors",
    });
  } catch (networkError) {
    console.error("[contact] Network error while submitting form", networkError);
    throw new Error("Unable to reach FixRite right now. Please call 0330 043 8653.");
  }

  let data: ContactFormResponse | undefined;
  try {
    data = (await response.json()) as ContactFormResponse;
  } catch {
    data = undefined;
  }

  if (!response.ok || !data?.success) {
    const validationDetails = data?.details?.join(", ");
    const message = validationDetails ? `${data?.error}: ${validationDetails}` : data?.error;
    throw new Error(message || "Unable to send your request right now.");
  }

  return data;
}
