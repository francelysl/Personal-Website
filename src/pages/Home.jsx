import React from "react";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import SocialIcons from "../components/SocialIcons";
import EducationItem from "../components/EducationItem";
import Footer from "../components/Footer";

import "../styles/EducationItem.css";


export default function Home() {
  return (
    <section id="home" style={{ padding: "32px 0" }}>


 <div className="innovate-deliver-section">
        <h2 className="imagine-innovate-deliver">Imagine</h2>
        <h2 className="imagine-innovate-deliver">Innovate</h2>
        <h2 className="imagine-innovate-deliver">Deliver</h2>
      </div>
      
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
      <TechStack />
      <SocialIcons />
      <EducationItem />
      <Footer />
    </section>
  );
}
