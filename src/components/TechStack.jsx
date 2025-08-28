import React from "react";
import "../styles/TechStack.css";

export default function TechStack({ skills = [/* … */] }) {
  return (
    <div className="stack-wrap" aria-label="Tech Stack">
      {skills.map((s) => (
        <span key={s} className="stack">{s}</span>
      ))}
    </div>
  );
}
