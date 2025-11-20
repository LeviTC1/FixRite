import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const logoMark = "/images/Logo.PNG";
import SocialIcons from "./SocialIcons";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={handleNavClick} aria-label="FixRite Ltd home">
          <img src={logoMark} alt="FixRite Ltd logo" className="brand-mark" loading="lazy" />
        </Link>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          ))}
          <SocialIcons />
        </nav>
        <a className="call-link" href="tel:03300438653">
          0330 043 8653
        </a>
      </div>
    </header>
  );
};

export default Header;
