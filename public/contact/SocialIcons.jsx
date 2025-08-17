import React from "react";
import "../styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div style={containerStyle}>
      <div style={menuStyle}>
        <a href="mailto:francelyslomeli@gmail.com" style={iconStyle}>
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/francelyslomeli/" target="_blank" style={iconStyle}>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/francelysl" target="_blank" style={iconStyle}>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
