import React from "react";
import "../styles/AboutMe.css";


export default function AboutMe(){
 return (
   <section className="hero">
     <div className="hero-inner">
       {/* LEFT: copy */}
       <div className="hero-left">
         <h1 className="hero-title">
           Hi there, I’m Francelys Lomeli.
         </h1>


         <p className="hero-lead">
           I love building reliable, serverless systems and simple UIs that make complex
           operations effortless.
         </p>      
      
         <p className="hero-body">
           Beyond work, I’m exploring IoT + ML for safety automation and ways to turn
           raw documents into structured data for downstream AI and workflow automation.
           I’m currently focused on scalable IaC and agentic patterns.
         </p>
       </div>


       {/* RIGHT: profile card */}
       <aside className="hero-card">
         <div className="avatar">FL</div>
         <div className="hero-name">Francelys Lomeli</div>
         <a className="hero-role" href="#projects">Computer Science Major + Business Minor</a>
         <div className="hero-location">Illinois, USA</div>
       </aside>
     </div>
   </section>
 );
}


