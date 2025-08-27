import React from "react";
import "../styles/SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-container" aria-label="Social links">
      <div className="icon-menu">
        <a href="mailto:francelyslomeli@gmail.com" title="Email" aria-label="Email">
          <i className="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/francelyslomeli/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          href="https://github.com/francelysl"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  );
}
