import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "../styles/ExperienceTimeline.css";


export default function ExperienceTimeline() {
 const items = [
   {
     role: "Software Development Engineer Intern",
     company: "Amazon",
     location: "Seattle, WA",
     dates: "May–Aug 2025",
     desc:
       "Built AWS Lambda pipelines triggered by S3/SQS, provisioned via CDK and monitored with CloudWatch. Delivered React dashboards with real-time integrations.",
     tags: ["React", "TypeScript", "AWS Lambda", "S3", "SQS", "CDK", "CloudWatch"],
   },
   {
     role: "AMER IT Grow with Google Support Track Lead",
     company: "Mentor Me Collective",
     location: "Chicago, IL",
     dates: "Jan–Jul 2025",
     desc:
       "Led weekly workshops & mentoring for 30+ scholars. Built a React + Node engagement tracker with SQL reporting to improve curriculum.",
     tags: ["React", "Node.js", "SQL", "Mentorship", "Workshops"],
   },
   {
     role: "Software Development Engineer Intern",
     company: "Amazon",
     location: "Seattle, WA",
     dates: "May–Aug 2024",
     desc:
       "Shipped and optimized React dashboards inside the Harmony app, integrating REST APIs and reducing operational handoffs.",
     tags: ["React", "REST APIs", "Performance"],
   },
   {
     role: "AFE Software Development Intern",
     company: "Amazon",
     location: "Seattle, WA",
     dates: "May–Aug 2023",
     desc:
       "Implemented unit tests with Mockito across microservices and contributed to Docker-aligned CI/CD pipelines with high coverage.",
     tags: ["Java", "Mockito", "CI/CD", "Docker", "Microservices"],
   },
 ];


 return (
   <section id="experience" className="exp-wrap" aria-labelledby="exp-heading">
     <h2 id="exp-heading" className="exp-heading">Experience</h2>


     <Timeline position="alternate" className="mui-timeline">
       {items.map((job, i) => {
         const last = i === items.length - 1;
         return (
           <TimelineItem key={job.role + job.dates} className="tl-item">
             <TimelineSeparator>
               <TimelineDot className="tl-dot" />
               {!last && <TimelineConnector className="tl-connector" />}
             </TimelineSeparator>


             <TimelineContent className="tl-content">
               <article className="exp-card">
                 <header className="exp-row">
                   <h3 className="exp-title">{job.role}</h3>
                   <span className="exp-date">
                     <i className="fa-regular fa-calendar" aria-hidden="true" />
                     {job.dates}
                   </span>
                 </header>


                 <div className="exp-company">
                   {job.company}
                   {job.location ? <span className="exp-loc"> • {job.location}</span> : null}
                 </div>


                 <p className="exp-desc">{job.desc}</p>


                 {!!job.tags?.length && (
                   <ul className="exp-tags" role="list">
                     {job.tags.map((t) => (
                       <li key={t} className="tag">{t}</li>
                     ))}
                   </ul>
                 )}
               </article>
             </TimelineContent>
           </TimelineItem>
         );
       })}
     </Timeline>
   </section>
 );
}


