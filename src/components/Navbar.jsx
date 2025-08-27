import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand">francelys lomeli</a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
  </header>
  );
}
