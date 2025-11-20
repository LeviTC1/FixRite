import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageSection from "../components/PageSection";
import Button from "../components/Button";
import { submitContactForm, type ContactFormPayload } from "../api/contact";

const initialFormState: ContactFormPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const { hash } = useLocation();
  const [formData, setFormData] = useState<ContactFormPayload>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSending = status === "sending";

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [hash]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await submitContactForm(formData);
      setFormData({ ...initialFormState });
      setStatus("success");
      setStatusMessage(response.message ?? "Message sent! We'll confirm within the hour.");
    } catch (error) {
      console.error(error);
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call 0330 043 8653.";
      setStatus("error");
      setStatusMessage(fallbackMessage);
    }
  };

  const showFeedback = Boolean(statusMessage) && (status === "success" || status === "error");

  return (
    <PageSection>
      <div className="contact-card__grid">
        <article id="request-quote" className="contact-card">
          <div className="contact-thumb__content">
            <p className="eyebrow">Send details</p>
            <h1>Request a FixRite engineer</h1>
            <p>
              Submit a brief summary and we&apos;ll line up the right trade, confirm attendance and send you live
              updates.
            </p>
            <form className="contact-inline-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
              </label>
              <Button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit request"}
              </Button>
              {showFeedback && (
                <p
                  className={`form-feedback ${status === "success" ? "success" : "error"}`}
                  role={status === "success" ? "status" : "alert"}
                  aria-live={status === "success" ? "polite" : "assertive"}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-thumb__content">
            <p className="eyebrow">Prefer to call?</p>
            <h2>Speak with Managing Director Lewis Mather</h2>
            <p>
              Phone: <a href="tel:03300438653">0330 043 8653</a>
              <br />
              Email: <a href="mailto:info@fixrite247.com">info@fixrite247.com</a>
            </p>
            <p>
              We monitor inboxes with Resend so every enquiry gets an immediate acknowledgement and the full context is
              forwarded to your engineer.
            </p>
            <p>Office hours visits are available across Greater Manchester, Cheshire and Lancashire.</p>
          </div>
        </article>
      </div>
    </PageSection>
  );
};

export default Contact;
