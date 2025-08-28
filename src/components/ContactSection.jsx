import React, { useState } from "react";
import "../styles/ContactSection.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const items = [
    {
      href: "mailto:ffsgf@gmail.com",
      label: "Email",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0 8 6 8-6"
            fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      text: "ffsgf@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/yourhandle",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.79V21h-4z"
            fill="currentColor"/>
        </svg>
      ),
      text: "linkedin.com/in/yourhandle",
    },
    {
      href: "https://www.instagram.com/yourhandle",
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z"
            fill="currentColor"/>
        </svg>
      ),
      text: "@yourhandle",
    },
  ];

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.first || !form.last || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    // TODO: send to your endpoint / EmailJS / serverless function
    console.log("CONTACT_FORM_SUBMIT", form);
    setStatus("Thanks! Your message has been sent.");
    setForm({ first: "", last: "", email: "", message: "" });
  };

  return (
    <section className="contact-wrap" id="contact">
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

      {/* Form */}
      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="row two">
          <div className="field">
            <label htmlFor="first">First name</label>
            <input
              id="first"
              name="first"
              type="text"
              placeholder="First name"
              value={form.first}
              onChange={update}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="last">Last name</label>
            <input
              id="last"
              name="last"
              type="text"
              placeholder="Last name"
              value={form.last}
              onChange={update}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={update}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Leave me a message…"
              value={form.message}
              onChange={update}
              required
            />
          </div>
        </div>

        {status && <div className="status">{status}</div>}

        <div className="actions">
          <button type="submit" className="btn-primary">Send message</button>
        </div>
      </form>
    </section>
  );
}
