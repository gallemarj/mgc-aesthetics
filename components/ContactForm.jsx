"use client";

import { useState } from "react";

const CONTACT_EMAIL = "tristansamoy2@gmail.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    const subject = `Contact Message: ${data.subject} from ${data.name}`;
    const body = [
      "Contact Message",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      data.message ? `Message: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="success">
        <h3>Almost done!</h3>
        <p>
          Your email app should open with your message pre-filled. Just press{" "}
          <strong>Send</strong> to send it to us.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="contact-name">Full Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Juan Dela Cruz"
          />
        </div>
        <div className="form__group">
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="juan@example.com"
          />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="contact-subject">Subject</label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          required
          placeholder="How can we help?"
        />
      </div>

      <div className="form__group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us more..."
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary"
        style={{ width: "100%", marginTop: 8 }}
      >
        Send Message
      </button>
    </form>
  );
}
