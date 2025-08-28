// src/pages/Contact.jsx
import "../styles/ContactSection.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <section className="contact-wrap" id="contact">
      <div className="social-row">{/* icons */}</div>
      <form className="contact-form" onSubmit={onSubmit} noValidate>
        {/* fields + button */}
      </form>
    </section>
  );
}
