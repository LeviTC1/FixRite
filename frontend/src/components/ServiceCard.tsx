import { Link } from "react-router-dom";
import type { IconName } from "../types/icon";

type ServiceCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  icon: IconName;
  accent: string;
  image?: string;
};

const ServiceCard = ({ slug, title, excerpt, tags, image }: ServiceCardProps) => (
  <Link to={`/services/${slug}`} className="project-thumb__link service-thumb__link">
    <article className="service-card">
      {image && (
        <div className="service-card__media">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="service-card__body">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="service-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  </Link>
);

export default ServiceCard;
