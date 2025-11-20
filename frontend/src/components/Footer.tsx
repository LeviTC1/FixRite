import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="brand">FixRite Ltd</p>
          <p>Responsive property repairs and preventative maintenance delivered with corporate-grade reporting.</p>
          <p>
            Speak with Managing Director Lewis Mather on <a href="tel:03300438653">0330 043 8653</a> or email
            <a href="mailto:info@fixrite247.com"> info@fixrite247.com</a>
          </p>
          <p>
            Website: <a href="https://fixrite247.com" target="_blank" rel="noreferrer">fixrite247.com</a>
          </p>
          <SocialIcons />
        </div>
        <div>
          <p className="footer-heading">Service areas</p>
          <ul>
            <li>Greater Manchester</li>
            <li>Stockport &amp; Cheshire</li>
            <li>Derbyshire &amp; High Peak</li>
            <li>24/7 nationwide partners</li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Quick links</p>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-note">&copy; {new Date().getFullYear()} FixRite Ltd. Registered in England &amp; Wales.</p>
    </footer>
  );
};

export default Footer;
