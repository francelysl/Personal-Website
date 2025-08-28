import React from "react";
import "../styles/TechStack.css";

export default function TechStack() {
  const frontend = ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript"];
  const backend = ["Node.js", "Express", "Java", "Python", "C", "C++", "SQL"];
  const other = [
    "AWS (CDK, CloudWatch, DynamoDB, Lambda, S3, SQS)",
    "Docker",
    "Git",
    "Mockito",
    "Agile",
    "Scrum",
    "CI/CD",
    "Cloud Infrastructure",
    "Data Pipelines",
    "Feature Flags",
    "Performance Optimization",
    "REST API Design",
    "System Architecture",
    "Unit Testing",
    "Version Control",
  ];

  const renderSection = (title, skills) => (
    <div className="stack-section">
      <h3 className="stack-title">{title}</h3>
      <div className="stack-wrap">
        {skills.map((s) => (
          <span key={s} className="stack">{s}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="tech-stack">
      {renderSection("Frontend", frontend)}
      {renderSection("Backend", backend)}
      {renderSection("Other Skills", other)}
    </section>
  );
}
