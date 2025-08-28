import React from "react";
import SocialIcons from "../components/SocialIcons";
import ExperienceTimeline from "../components/ExperienceTimeline";
import EducationItem from "../components/Education";

export default function Home() {
  return (
    <section id="home"style={{ padding: "32px 0" }}>

      <ExperienceTimeline />
      <SocialIcons />
      <EducationItem />
    </section>
  );
}
