import React from "react";
import "../styles/Certifications.css";     
import "../styles/TechStack.css";         

export default function Certifications() {
  const certs = [
    {
      label: "Google IT Support Professional Certificate",
      url: "https://www.credly.com/badges/0a7c3952-d384-4c73-aa51-392cb9eff9e5/linked_in_profile" // replace with your verify URL if you have one
    },
  ];

  return (
    <section className="cert-section" id="certifications" aria-labelledby="cert-heading">
      <h2 id="cert-heading" className="cert-title">Certifications</h2>

      <ul className="cert-grid" role="list">
        {certs.map((c) => (
          <li key={c.label} className="cert-item">
            {c.url ? (
              <a className="chip cert-chip" href={c.url} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            ) : (
              <span className="chip cert-chip" aria-disabled="true">{c.label}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
