import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSending(true);

    try {
      const fd = new FormData(formRef.current);
      for (const key of ["user_first", "user_last", "user_email", "message"]) {
        if (!fd.get(key)) {
          setStatus("Please fill out all fields.");
          setSending(false);
          return;
        }
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("Thanks! Your message has been sent.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("Oops—couldn’t send right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const onHoneypotChange = (e) => {
    if (e.target.value) setStatus("Spam detected.");
  };

  return (
    <section className="contact-wrap" id="contact">
      <header className="contact-hero">
        <h1>
          Let’s Build Something <span className="grad">Amazing</span>
        </h1>
        <p>
          Have a project in mind? I’m excited to discuss new opportunities and collaborate on innovative ideas.
        </p>
      </header>

      <div className="contact-grid">
        <section className="card form-card">
          <h2>Send a Message</h2>

          <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              onChange={onHoneypotChange}
              className="honeypot"
            />

            <div className="row two">
              <div className="field">
                <label htmlFor="first">First Name</label>
                <input id="first" name="user_first" type="text" placeholder="First name" required />
              </div>
              <div className="field">
                <label htmlFor="last">Last Name</label>
                <input id="last" name="user_last" type="text" placeholder="Last name" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="user_email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell me about your project, timeline, and how I can help…" required />
              </div>
            </div>

            {status && <div className="status">{status}</div>}

            <div className="actions">
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </section>

        <aside className="card right-panel">
          <h2>Get in Touch</h2>

          <div className="info-row">
            <div className="info-ico">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="info-body">
              <div className="info-label">Email</div>
              <a href="mailto:francelyslomeli@gmail.com" className="info-value">
                francelyslomeli@gmail.com
              </a>
            </div>
          </div>

          <div className="info-row">
            <div className="info-ico">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="info-body">
              <div className="info-label">Location</div>
              <div className="info-value">Illinois, USA</div>
            </div>
          </div>

<h2 className="subhead">Connect Online</h2>
<div className="icon-stack">
  <a
    className="orb email"
    href="mailto:francelyslomeli@gmail.com"
    aria-label="Email"
    title="Email"
  >
    <i className="fa-solid fa-envelope" />
  </a>

  <a
    className="orb linkedin"
    href="https://www.linkedin.com/in/francelyslomeli/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <i className="fa-brands fa-linkedin-in" />
  </a>

  <a
    className="orb github"
    href="https://github.com/francelysl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <i className="fa-brands fa-github" />
  </a>
</div>
        </aside>
      </div>
    </section>
  );
}
