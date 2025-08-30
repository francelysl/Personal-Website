import React, { useState } from "react";
import "../styles/TechStack.css";

const TABS = [
  {
    id: "frontend",
    label: "Frontend Development",
    icon: <i className="fa-solid fa-code" aria-hidden="true" />,
    items: [
      { name: "React",            pct: 95, blurb: "Hooks, Context, performance optimization" },
      { name: "TypeScript",       pct: 90, blurb: "Type safety, advanced patterns" },
      { name: "Next.js",          pct: 85, blurb: "SSR, SSG, API routes" },
      { name: "JavaScript",  pct: 95, blurb: "Async/await, modules, modern JS" },
      { name: "HTML",     pct: 90, blurb: "Semantic HTML, modern CSS features" },
      { name: "CSS",     pct: 90, blurb: "Utility-first, custom designs" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    icon: <i className="fa-solid fa-database" aria-hidden="true" />,
    items: [
      { name: "Node.js / Express", pct: 90, blurb: "REST APIs, auth, middleware" },
      { name: "Java",              pct: 85, blurb: "Microservices, testing (Mockito)" },
      { name: "Python",            pct: 80, blurb: "Scripts, data tools" },
      { name: "SQL",       pct: 85, blurb: "Postgres, DynamoDB" },
      { name: "AWS Lambda",        pct: 85, blurb: "Serverless, S3/SQS events" },
      { name: "CDK + CloudWatch",  pct: 80, blurb: "Infra-as-code, monitoring" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: <i className="fa-solid fa-bolt" aria-hidden="true" />,
    items: [
      { name: "Git / GitHub", pct: 95, blurb: "Branching, reviews, actions" },
      { name: "Docker",       pct: 85, blurb: "Images, compose, CI" },
      { name: "CI/CD",        pct: 85, blurb: "Pipelines, artifacts, releases" },
      { name: "Testing",      pct: 90, blurb: "Unit tests, coverage, QA handoff" },
      { name: "Perf & DX",    pct: 85, blurb: "Profiling, build tooling" },
      { name: "Feature Flags",pct: 80, blurb: "Gradual rollout, A/B" },
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState("frontend");

  const tab = TABS.find(t => t.id === active) ?? TABS[0];
  const left = tab.items.slice(0, Math.ceil(tab.items.length / 2));
  const right = tab.items.slice(Math.ceil(tab.items.length / 2));

  return (
    <section id="tech-stack" className="tech-stack" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="visually-hidden">Skills</h2>

      {/* Tab buttons */}
      <div className="tabbar" role="tablist" aria-label="Skill categories">
        {TABS.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            id={`tab-${t.id}`}
            className={`chip ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            <span className="chip-ico">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div
        id={`panel-${tab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab.id}`}
        className="skills-card"
        key={tab.id}                 /* re-key to re-run the bar animation on tab change */
      >
        <div className="skills-grid animate">
          <div className="col">
            {left.map((s) => <SkillRow key={s.name} {...s} />)}
          </div>
          <div className="col">
            {right.map((s) => <SkillRow key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ name, pct, blurb }) {
  return (
    <div className="skill">
      <div className="skill-top">
        <h3 className="skill-name">{name}</h3>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-note">{blurb}</div>
      <div className="bar" style={{ ["--pct"]: `${pct}%` }} />
    </div>
  );
}
