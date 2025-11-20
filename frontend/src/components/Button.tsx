import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const classes = ["btn", variant === "secondary" ? "btn-secondary" : "btn-primary", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-busy={disabled || undefined}>
      {children}
    </button>
  );
};

export default Button;
