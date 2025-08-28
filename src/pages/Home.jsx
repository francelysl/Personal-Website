import React from "react";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import SocialIcons from "../components/SocialIcons";
import EducationItem from "../components/EducationItem";

import "../styles/EducationItem.css";


export default function Home() {
  return (
    <section id="home" style={{ padding: "32px 0" }}>
      <AboutMe />
      <a
  href="/resume.pdf"
  download
  className="resume-btn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="resume-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Download Resume
</a>

      <h2 className="about-label">Tech Stack</h2>
      <TechStack
        skills={[
          "JavaScript",
          "Java",
          "C++",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "Python",
          "AWS",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "Git",
        ]}
      />
      <SocialIcons />
      <EducationItem />
    </section>
  );
}
