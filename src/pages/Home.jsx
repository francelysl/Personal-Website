import React from "react";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import SocialIcons from "../components/SocialIcons";
import EducationItem from "../components/EducationItem";

import "../styles/EducationItem.css";


export default function Home() {
  return (
    <section id="home"style={{ padding: "32px 0" }}>
      <AboutMe/>
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
