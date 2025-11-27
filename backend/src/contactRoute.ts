import { Router } from "express";
import { Resend } from "resend";

const FALLBACK_NOTIFICATION_EMAIL = "info@fixrite247.com";
const SUCCESS_MESSAGE = "Thanks! We'll confirm within the hour.";

const contactRoute = Router();

type ContactRequestBody = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const RESEND_TO_EMAIL = RECEIVER_EMAIL || process.env.RESEND_TO_EMAIL || FALLBACK_NOTIFICATION_EMAIL;
const EMAIL_DELIVERY_MODE = (process.env.EMAIL_DELIVERY_MODE ?? "live").toLowerCase();
const isMockEmailDelivery = EMAIL_DELIVERY_MODE === "mock";

const resendClient = !isMockEmailDelivery && RESEND_API_KEY ? new Resend(RESEND_API_KEY) : undefined;

const trimValue = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => phone.replace(/\D/g, "").length >= 7;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });

const formatMessageHtml = (message: string) => escapeHtml(message).replace(/\r?\n/g, "<br />");
const formatSubmittedAt = () =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(new Date());

const buildHtmlEmail = (payload: ContactRequestBody) => {
  const submittedAt = formatSubmittedAt();
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone);
  const formattedMessage = formatMessageHtml(payload.message);

  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;background:#f8fafc;padding:24px;">
      <table style="width:100%;max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;padding:24px;">
        <tr>
          <td>
            <p style="font-size:14px;color:#64748b;margin:0 0 4px;">New FixRite enquiry</p>
            <h2 style="margin:0 0 16px;color:#0f172a;">${safeName}</h2>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tbody>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#475569;width:120px;">Email</td>
                  <td style="padding:8px 0;color:#0f172a;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#475569;">Phone</td>
                  <td style="padding:8px 0;color:#0f172a;">${safePhone}</td>
                </tr>
              </tbody>
            </table>
            <div style="padding:16px 20px;background:#f1f5f9;border-radius:12px;border:1px solid #e2e8f0;">
              <p style="margin:0 0 8px;font-weight:600;color:#0f172a;">Job details</p>
              <p style="margin:0;color:#0f172a;line-height:1.6;">${formattedMessage}</p>
            </div>
            <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">Submitted ${submittedAt} (Europe/London)</p>
          </td>
        </tr>
      </table>
    </div>
  `;
};

const buildTextEmail = (payload: ContactRequestBody) => {
  const submittedAt = formatSubmittedAt();
  return [
    "New FixRite enquiry",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    "Job details:",
    payload.message,
    "",
    `Submitted ${submittedAt} (Europe/London)`,
  ].join("\n");
};

const logMockEmailDelivery = (payload: ContactRequestBody) => {
  console.info("[api] Mock email delivery");
  console.info(buildTextEmail(payload));
};

contactRoute.post("/", async (req, res) => {
  const body = req.body as Partial<ContactRequestBody>;
  const payload: ContactRequestBody = {
    name: trimValue(body?.name),
    phone: trimValue(body?.phone),
    email: trimValue(body?.email),
    message: trimValue(body?.message),
  };

  const validationErrors: string[] = [];
  if (!payload.name) {
    validationErrors.push("Name is required");
  }
  if (!payload.email || !isValidEmail(payload.email)) {
    validationErrors.push("A valid email address is required");
  }
  if (!payload.phone || !isValidPhone(payload.phone)) {
    validationErrors.push("A phone number is required");
  }
  if (!payload.message || payload.message.length < 10) {
    validationErrors.push("Please provide a short summary of the job");
  }

  if (validationErrors.length > 0) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: validationErrors,
    });
  }

  if (isMockEmailDelivery) {
    logMockEmailDelivery(payload);
    return res.json({ success: true, message: SUCCESS_MESSAGE });
  }

  if (!resendClient || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    console.error("[api] Missing Resend configuration");
    return res.status(500).json({
      success: false,
      error: "Email service is unavailable right now. Please try again later.",
    });
  }

  try {
    await resendClient.emails.send({
      from: `FixRite Enquiries <${RESEND_FROM_EMAIL}>`,
      to: [RESEND_TO_EMAIL],
      subject: `New FixRite enquiry from ${payload.name}`,
      replyTo: payload.email,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    return res.json({ success: true, message: SUCCESS_MESSAGE });
  } catch (error) {
    console.error("[api] Failed to send enquiry email", error);
    return res.status(500).json({
      success: false,
      error: "Unable to send your request right now. Please call 0330 043 8653.",
    });
  }
});

export default contactRoute;
