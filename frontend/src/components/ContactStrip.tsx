import { Link } from "react-router-dom";

const ContactStrip = () => (
  <div className="contact-strip">
    <Link
      to="/contact#request-quote"
      className="project-thumb__link"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <article className="contact-thumb contact-thumb--cta">
        <div className="contact-thumb__media" aria-hidden="true" />
        <div className="contact-thumb__content">
          <p className="eyebrow">Ready to start?</p>
          <h2>Request a FixRite engineer</h2>
          <p>
            Share the job, upload photos and we&apos;ll schedule certified engineers with clear arrival windows and costings.
          </p>
        </div>
      </article>
    </Link>
    <article className="contact-thumb">
      <div className="contact-thumb__media" aria-hidden="true" />
      <div className="contact-thumb__content">
        <p className="eyebrow">Need help fast?</p>
        <h2>24/7 emergency desk</h2>
        <p>
          Phone: <a href="tel:03300438653">0330 043 8653</a>
          <br />
          Email: <a href="mailto:info@fixrite247.com">info@fixrite247.com</a>
        </p>
        <p>We triage within 15 minutes and confirm attendance before coordinating qualified partners.</p>
      </div>
    </article>
  </div>
);

export default ContactStrip;
