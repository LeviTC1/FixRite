import PageSection from "../components/PageSection";

const aboutImage = "/images/Property Repair2.jpg";

const values = [
  {
    title: "Clear communication",
    text: "Every project has a single point of contact. You always know what has been done, what is happening next and why.",
  },
  {
    title: "Certified trades",
    text: "Engineers carry the right accreditations and insurances. We document everything to keep compliance simple.",
  },
  {
    title: "Respect on site",
    text: "We protect finishes, keep noise to a minimum and look after your tenants or occupiers as if they were our own clients.",
  },
];

const credentials = [
  { title: "Insurance", detail: "£10m public liability · £5m employers" },
  { title: "Certifications", detail: "NICEIC · Gas Safe partners · CHAS" },
  { title: "Coverage", detail: "Greater Manchester, Cheshire, Lancashire" },
];

const About = () => (
  <>
    <PageSection>
      <div className="hero">
        <div className="hero__content">
          <p className="eyebrow">Lewis Mather · Managing Director</p>
          <h1>Dependable property repairs led by Lewis Mather</h1>
          <p>
            Managing Director Lewis Mather has spent the last decade supporting estate managers, landlords and commercial agents who need reliable
            trades without corporate headaches. FixRite was built to bring that responsive mindset to every job, backed by
            transparent reporting and personable service.
          </p>
          <p>"Providing dependable repairs, clear communication, and consistent quality."</p>
        </div>
        <div className="hero__media hero__media--photo" aria-hidden="true">
          <img src={aboutImage} alt="Lewis Mather on site" loading="lazy" />
        </div>
      </div>
    </PageSection>

    <PageSection background="muted">
      <div className="section-heading">
        <p className="eyebrow">Values</p>
        <h2>How we work</h2>
      </div>
      <div className="why-grid">
        {values.map((value) => (
          <article key={value.title} className="benefit-card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </PageSection>

    <PageSection>
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2>Fully insured &amp; pre-qualified</h2>
        <p>
          We work with Resend-powered communication, asset tagging and digital reports so stakeholders stay informed and
          confident.
        </p>
      </div>
      <div className="stats-grid">
        {credentials.map((item) => (
          <div key={item.title} className="stat-card">
            <strong>{item.detail}</strong>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </PageSection>
  </>
);

export default About;
