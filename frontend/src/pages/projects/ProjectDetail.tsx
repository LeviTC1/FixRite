import { Navigate, useParams } from "react-router-dom";
import PageSection from "../../components/PageSection";
import Button from "../../components/Button";
import { projectMap } from "../../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? projectMap[slug] : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageSection>
      <article className="project-detail">
        <header className="project-detail__lead">
          <div>
            <p className="eyebrow">{project.location}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <img src={project.hero} alt={project.title} loading="lazy" />
        </header>

        <section className="gallery-preview">
          <h2>Project gallery</h2>
          <div className="gallery-preview__grid">
            {project.gallery.map((item) => (
              <figure key={item.caption}>
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption>
                  <p>{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="project-detail__list project-detail__list--stacked">
          <h2>Scope &amp; highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <div className="projects-cta">
          <p>Need similar support? We&apos;ll tailor a response plan for your portfolio within 24 hours.</p>
          <Button to="/contact">Start your project</Button>
        </div>
      </article>
    </PageSection>
  );
};

export default ProjectDetail;
