import React, { useState } from "react";
import "../styles/EducationItem.css";

export default function EducationItem({
  logo = "./images/university_logo.png",
  university = "Illinois Institute of Technology",
  program = "Bachelor of Science — Major in Computer Science, Minor in Business",
  dates = "2022 – 2026",
  coursework = [
    "Computer Graphics",
    "Data Structures & Algorithms",
    "Database Systems",
    "Discrete Math",
    "Operating Systems",
    "Software Engineering",
    "Wireless Networks and Performance",
  ],
  affiliations = [
    "Amazon Future Engineer",
    "ACM",
    "ColorStack",
    "Rewrite the Code",
    "Society of Women Engineers",
  ],
}) {
  const [open, setOpen] = useState(false);
  const dropId = "edu-drop";

  return (
    <div className="edu-wrap">
      <div className="edu-chip">EDUCATION</div>

      <div
        className={`edu-card ${open ? "is-open" : ""}`}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(v => !v)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={dropId}
      >
        <div className="edu-row">
          <div className="edu-logo">
            <img src={logo} alt="University logo" />
          </div>

          <div className="edu-main">
            <div className="edu-title">{university}</div>
            <div className="edu-subtitle">{program}</div>
          </div>

          <div className="edu-right">
            <span className="edu-dates">{dates}</span>
            <svg className={`edu-caret ${open ? "rot" : ""}`} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Dropdown */}
        <div id={dropId} className={`edu-drop ${open ? "open" : ""}`}>
          <div className="edu-drop-inner">
            <div className="edu-block">
              <div className="edu-block-title">Relevant Coursework</div>
              <ul className="edu-list">
                {coursework.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>

            <div className="edu-block">
              <div className="edu-block-title">Affiliations</div>
              {/* CHANGED: bullet list */}
              <ul className="edu-list">
                {affiliations.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
