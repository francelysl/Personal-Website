import React, { useState } from "react";
import "../styles/TechStack.css";

const TABS = [
    {
        id: "frontend",
        label: "Frontend Development",
        icon: <i className="fa-solid fa-code" aria-hidden="true" />,
        items: [
            { name: "CSS", blurb: "Utility-First, Custom Designs" },
            { name: "HTML", blurb: "Semantic HTML, Modern CSS features" },
            { name: "JavaScript", blurb: "Async/Await, Modules, Modern JS" },
            { name: "Next.js", blurb: "SSR, SSG, API Routes" },
            { name: "React", blurb: "Hooks, Context, Performance Optimization" },
            { name: "TypeScript", blurb: "Type Safety, Advanced Patterns" },
        ],
    },
    {
        id: "backend",
        label: "Backend & Database",
        icon: <i className="fa-solid fa-database" aria-hidden="true" />,
        items: [
            { name: "AWS Lambda", blurb: "Serverless, S3/SQS events" },
            { name: "C", blurb: "Systems Programming, Pointers" },
            { name: "C++", blurb: "OOP, Templates, STL" },
            { name: "CDK + CloudWatch", blurb: "Infra-as-code, Monitoring" },
            { name: "Java", blurb: "Microservices, Testing (Mockito)" },
            { name: "Node.js / Express", blurb: "REST APIs, Auth" },
            { name: "Python", blurb: "Scripts, Data Tools" },
            { name: "SQL", blurb: "Postgres, DynamoDB" },
        ],

    },
    {
        id: "tools",
        label: "Tools & DevOps",
        icon: <i className="fa-solid fa-bolt" aria-hidden="true" />,
        items: [
            { name: "CI/CD", blurb: "Pipelines, Artifacts, Releases" },
            { name: "Docker", blurb: "Images, Compose, CI" },
            { name: "Feature Flags", blurb: "Gradual Rollout, A/B" },
            { name: "Git / GitHub", blurb: "Branching, Reviews, Actions" },
            { name: "Testing", blurb: "Unit Tests, Coverage, QA Handoff" },
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
            </div>
            <div className="skill-note">{blurb}</div>
        </div>
    );
}
