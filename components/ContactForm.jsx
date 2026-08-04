"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="success">
        <h3>Message sent</h3>
        <p>We&apos;ll get back to you as soon as possible.</p>

        
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
            placeholder="Jane Doe"
          />
        </div>
        <div className="form__group">
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="jane@example.com"
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
        disabled={loading}
        style={{ width: "100%", marginTop: 8 }}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      
    </form>
  );
}
