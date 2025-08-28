import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-wrap" id="about">
      <div className="about-grid">
        {/* Left label */}
        <h2 className="about-label">About Me</h2>

        {/* Right content */}
        <div className="about-content">
          <p>
            Hi there, I am Francelys Lomeli.
            I love building reliable, serverless systems and simple UIs that make
            complex operations effortless.   Lorem ipsum
          </p>

          <p>
          Lorem ipsum 
          </p>

          <p>
            Beyond work, I’m exploring IoT + ML for safety automation and ways to
            turn raw documents into structured data for downstream AI and
            workflow automation. I’m currently focused on scalable IaC and agentic patterns.
         </p>  
        </div>
      </div>
    </section>
  );
}
