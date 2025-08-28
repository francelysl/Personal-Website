import React from "react";
import SocialIcons from "../components/SocialIcons";
import EducationItem from "../components/EducationItem";
import "../styles/EducationItem.css";

export default function Home() {
  return (
    <section id="home"style={{ padding: "32px 0" }}>
      <SocialIcons />
      <EducationItem />
    </section>
  );
}
