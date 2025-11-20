import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  summary: string;
  location: string;
  tags: string[];
  hero?: string;
  to?: string;
  layout?: "wide" | "stack";
}

const ProjectCard = ({ title, summary, location, tags, hero, to, layout = "stack" }: ProjectCardProps) => {
  const content = (
    <article className={`project-card ${layout === "wide" ? "project-card--wide" : ""}`}>
      {hero && (
        <div className="project-card__media">
          <img src={hero} alt={title} loading="lazy" />
        </div>
      )}
      <div className="project-card__content">
        <p className="eyebrow">{location}</p>
        <h3>{title}</h3>
        <p className="desc">{summary}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  if (to) {
    return (
      <Link to={to} className="project-thumb__link">
        {content}
      </Link>
    );
  }

  return content;
};

export default ProjectCard;
