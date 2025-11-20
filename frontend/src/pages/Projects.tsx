import PageSection from "../components/PageSection";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { projects } from "../data/projects";

const Projects = () => (
  <PageSection>
    <div className="projects-page">
      <header className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h1>Recent FixRite deployments</h1>
        <p>
          A snapshot of fast-response call-outs, premium refurbishments and compliance programmes delivered across the
          North West. Every project includes a digital record pack for your files.
        </p>
      </header>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} {...project} to={`/projects/${project.slug}`} layout={index % 2 === 0 ? "wide" : "stack"} />
        ))}
      </div>
      <div className="projects-cta">
        <p>Want to showcase the same level of care in your buildings? Arrange a site review with Managing Director Lewis Mather.</p>
        <Button to="/contact">Schedule a visit</Button>
      </div>
    </div>
  </PageSection>
);

export default Projects;
