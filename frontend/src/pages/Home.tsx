import PageSection from "../components/PageSection";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ContactStrip from "../components/ContactStrip";
import { services as allServices } from "../data/services";
import { projects } from "../data/projects";

const benefits = [
  {
    title: "Corporate-grade reporting",
    text: "Every visit comes with timestamped photos, sign-offs and actionable recommendations so you can evidence compliance.",
  },
  {
    title: "24/7 coordination",
    text: "FixRite dispatches vetted specialists day or night with real-time updates to landlords and facilities leads.",
  },
  {
    title: "Multi-trade delivery",
    text: "Joiners, electricians, plumbers and decorators all sit under one call, simplifying budgeting and communication.",
  },
];

const Home = () => {
  const featuredServices = allServices.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <PageSection>
        <div className="hero">
          <div className="hero__content">
            <span className="hero-pill">24/7 fix desk | Greater Manchester</span>
            <h1>Fast, reliable property repairs. FixRite.</h1>
            <p>
              Multi-trade specialists who show up when they say they will, provide photographic proof, and leave your tenants confident
              everything is under control.
            </p>
            <div className="hero__actions">
              <Button href="tel:03300438653">Call now</Button>
              <Button to="/contact" variant="secondary">
                Get a quote
              </Button>
            </div>
            <p className="hero__contact">0330 043 8653 | info@fixrite247.com</p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="stack">
          <div className="section-heading">
            <p className="eyebrow">Quick services</p>
            <h2>Trusted by landlords &amp; facilities leads</h2>
            <p>Reactive call-outs, planned maintenance and amenity upgrades delivered with consistent quality.</p>
          </div>
          <div className="quick-services">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="emergency-bar">
          <div>
            <p className="eyebrow">24/7 emergency</p>
            <p>
              Burst pipe? Power issue? Our live desk coordinates engineers across Greater Manchester and beyond with a 15-minute response.
            </p>
          </div>
          <div>
            <strong>0330 043 8653</strong>
          </div>
        </div>
      </PageSection>

      <PageSection background="muted">
        <div className="gallery-preview">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>Recent deployments</h2>
            <p>Take a look at how FixRite restores, refreshes and protects property assets.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                layout={index === 0 ? "wide" : "stack"}
                to={`/projects/${project.slug}`}
              />
            ))}
          </div>
          <Button to="/projects" variant="secondary">
            Explore the gallery
          </Button>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-heading">
          <p className="eyebrow">Why FixRite</p>
          <h2>Dependable, transparent and personable</h2>
        </div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <ContactStrip />
      </PageSection>
    </>
  );
};

export default Home;
