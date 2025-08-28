import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  
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

  const items = [
    {
      href: "mailto:ffsgf@gmail.com",
      label: "Email",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0 8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      text: "ffsgf@gmail.com",
    },
    {
      href: "https://github.com/yourhandle",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.57.11.78-.25.78-.55v-2.1c-3.17.69-3.84-1.37-3.84-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.66 1.24 3.31.95.1-.75.4-1.24.72-1.53-2.53-.29-5.2-1.26-5.2-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16.92-.26 1.9-.39 2.88-.39.98 0 1.97.13 2.89.39 2.19-1.47 3.14-1.16 3.14-1.16.63 1.57.24 2.73.12 3.02.74.79 1.17 1.8 1.17 3.04 0 4.35-2.68 5.3-5.23 5.58.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.79.55A11.5 11.5 0 0 0 12 .5z" />
        </svg>
      ),
      text: "github.com/yourhandle",
    },
    {
      href: "https://www.linkedin.com/in/yourhandle",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.79V21h-4z" />
        </svg>
      ),
      text: "linkedin.com/in/yourhandle",
    },
  ];

  return (
    <section className="contact-wrap" id="contact">
      <p> Feel free to reach out, open to discussing new opportunities and ideas.</p>
      {/* Social icons row */}
      <div className="social-row">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="social-item"
            aria-label={item.label}
          >
            <div className="icon-wrap">{item.icon}</div>
            <span className="social-text">{item.text}</span>
          </a>
        ))}
      </div>

      {/* Form sent via EmailJS */}
      <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
        {/* Honeypot (hidden) */}
        <input
          type="text"
          name="website"        
          tabIndex="-1"
          autoComplete="off"
          onChange={onHoneypotChange}
          style={{ position: "absolute", left: "-10000px", opacity: 0 }}
        />

        <div className="row two">
          <div className="field">
            <label htmlFor="first">First name</label>
            <input id="first" name="user_first" type="text" placeholder="First name" required />
          </div>
          <div className="field">
            <label htmlFor="last">Last name</label>
            <input id="last" name="user_last" type="text" placeholder="Last name" required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" type="email" placeholder="you@company.com" required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Leave me a message…" required />
          </div>
        </div>

        {status && <div className="status">{status}</div>}

        <div className="actions">
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}
