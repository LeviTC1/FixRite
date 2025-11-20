import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "dark";
};

const PageSection = ({ id, children, className = "", background = "default" }: PageSectionProps) => (
  <section
    id={id}
    className={[
      "section",
      background !== "default" ? `section--${background}` : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <div className="container">{children}</div>
  </section>
);

export default PageSection;
