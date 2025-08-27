import React from "react";
import "../styles/SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-container">
      <div className="icon-menu">
        <a href="mailto:francelyslomeli@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/francelyslomeli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/francelysl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}
