import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">francelys lomeli</Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/#projects">PROJECTS</Link></li>
            <li><Link to="/contact#contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
