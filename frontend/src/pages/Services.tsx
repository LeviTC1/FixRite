import PageSection from "../components/PageSection";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/services";

const plans = [
  {
    title: "Basic Package",
    price: "£15",
    subtitle: "per month",
    description:
      "Essential maintenance coverage with priority call-outs and routine checks to keep your property in good condition.",
    features: ["Priority call-outs", "Routine checks"],
  },
  {
    title: "Standard Support",
    price: "£20",
    subtitle: "per month",
    description:
      "Includes all Basic Care features plus quarterly inspections and discounted repairs for common issues.",
    features: ["Quarterly inspections", "Discounted repairs"],
  },
  {
    title: "Premium Protection",
    price: "£30",
    subtitle: "per month",
    description:
      "Comprehensive maintenance with monthly inspections, priority scheduling, and coverage for most repairs.",
    features: ["Monthly inspections", "Priority scheduling", "Most repairs covered"],
  },
  {
    title: "Agent Advantage",
    price: "£45",
    subtitle: "per month",
    description:
      "Designed for agencies and commercial properties, this plan adds commission options and enhanced reporting alongside Premium Protection benefits.",
    features: ["Commission options", "Enhanced reporting"],
  },
];

const Services = () => (
  <>
    <PageSection>
      <div className="section-heading">
        <p className="eyebrow">Expert coverage</p>
        <h1>Comprehensive property repair &amp; maintenance</h1>
        <p>
          FixRite coordinates trusted multi-trade partners for reactive call-outs, preventative maintenance programmes and
          upgrade works. Every visit includes timestamped photos, asset notes and a clear recommendation.
        </p>
      </div>
    </PageSection>

    <PageSection>
      <div className="quick-services">
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>
    </PageSection>

    <PageSection>
      <div className="section-heading">
        <p className="eyebrow">Monthly care plans</p>
        <h2>Flexible maintenance packages</h2>
        <p>Choose the level of cover that suits your property portfolio.</p>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <article key={plan.title} className="plan-card">
            <header>
              <p className="eyebrow">{plan.title}</p>
              <div className="plan-card__price">
                <strong>{plan.price}</strong>
                <span>{plan.subtitle}</span>
              </div>
            </header>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>

    <PageSection background="muted">
      <div className="projects-cta">
        <div>
          <p className="eyebrow">Need a tailored plan?</p>
          <h2>Planned maintenance &amp; landlord packages</h2>
          <p>
            We&apos;ll map statutory testing, cyclical visits and reactive cover into a single contract with guaranteed
            response times.
          </p>
        </div>
        <Button to="/contact">Talk to Lewis, Managing Director</Button>
      </div>
    </PageSection>
  </>
);

export default Services;
