import React from "react";
import "../styles/Footer.css";


export default function Footer() {
 return (
   <footer className="site-footer" id="footer">
     <div className="foot-inner">
       {/* Brand / blurb */}
       <div className="foot-brand">
         <div className="logo-tile" aria-hidden="true">
           <i className="fa-solid fa-code" />
         </div>


         <div className="brand-text">
           <div className="brand-name">Francelys Lomeli</div>
           <p className="brand-desc">
             lorem ipsum
           </p>
         </div>
       </div>


       {/* Quick Links */}
       <nav className="foot-col" aria-labelledby="qlabel">
         <h4 id="qlabel" className="foot-title">Quick Links</h4>
         <ul className="foot-list" role="list">
           <li><a href="#home">Home</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>


       {/* Connect */}
       <div className="foot-col" aria-labelledby="clabel">
         <h4 id="clabel" className="foot-title">Connect</h4>
         <ul className="foot-list" role="list">
           <li>
             <a href="mailto:francelyslomeli@gmail.com">
               francelyslomeli@gmail.com
             </a>
           </li>
           <li>
             <a href="https://github.com/francelysl" target="_blank" rel="noreferrer">
               GitHub
             </a>
           </li>
           <li>
             <a
               href="https://www.linkedin.com/in/francelyslomeli/"
               target="_blank"
               rel="noreferrer"
             >
               LinkedIn
             </a>
           </li>
         </ul>
       </div>
     </div>


     <hr className="foot-divider" />


     <div className="foot-bottom">
       <p>© {new Date().getFullYear()} FRANCELYS LOMELI. All Rights Reserved.</p>
     </div>
   </footer>
 );
}


