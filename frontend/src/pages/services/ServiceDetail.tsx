import { Navigate, useParams } from "react-router-dom";
import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { serviceMap } from "../../data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceMap[slug] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <PageSection>
      <article className="project-detail service-detail">
        <header className="project-detail__lead">
          <div>
            <p className="eyebrow">Service detail</p>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="tag-row">
              {service.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {service.image ? (
            <img src={service.image} alt={service.title} className="service-detail__image" loading="lazy" />
          ) : (
            <div className="service-detail__visual" style={{ background: service.accent }}>
              <Icon name={service.icon} className="service-detail__icon" />
            </div>
          )}
        </header>

        <section className="project-detail__list">
          <h2>What&apos;s included</h2>
          <ul>
            {service.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="project-detail__actions">
            <Button to="/contact#request-quote">Request a FixRite engineer</Button>
            <Button to="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </section>
      </article>
    </PageSection>
  );
};

export default ServiceDetail;
