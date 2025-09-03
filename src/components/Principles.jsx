import React from "react";
import "../styles/Principles.css";


export default function Principles() {
 const items = [
   {
     n: 1,
     title: "Imagine",
     text:
       "Start with clarity: outcomes, constraints, and users. Explore possibilities before a line of code.",
   },
   {
     n: 2,
     title: "Innovate",
     text:
       "Build fast, reliable systems with simple, composable designs that scale and delight.",
   },
   {
     n: 3,
     title: "Deliver",
     text:
       "Ship maintainable, testable solutions and iterate with feedback to stand the test of time.",
   },
 ];


 return (
   <section className="pr-section" aria-labelledby="pr-heading">
     <h2 id="pr-heading" className="pr-title">Engineering Design Principles</h2>
     <p className="pr-sub">Core principles that guide every project I work on</p>


     <div className="pr-grid">
       {items.map(({ n, title, text }) => (
         <div
           key={title}
           className="pr-card"
           data-frame                      
           role="button"
           tabIndex={0}
         >
           <div className="pr-badge">{n}</div>
           <h3 className="pr-card-title">{title}</h3>
           <p className="pr-card-text">{text}</p>
         </div>
       ))}
     </div>
   </section>
 );
}


