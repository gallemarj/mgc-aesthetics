"use client";

import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fallback silently
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="success">
        <h3>Thank you</h3>
        <p>Your booking request has been sent. We&apos;ll get back to you shortly.</p>

        
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jane@example.com"
          />
        </div>
        <div className="form__group">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="Eyebrow Tattoo">Eyebrow Tattoo</option>
            <option value="Lip Tattoo">Lip Tattoo</option>
            <option value="Facial">Facial</option>
            <option value="Laser">Laser</option>
            <option value="Tattoo Removal">Tattoo Removal</option>
            <option value="Foot Spa">Foot Spa</option>
            <option value="Eyelash Extension">Eyelash Extension</option>
            <option value="Massage">Massage</option>
            <option value="Hair Removal">Hair Removal</option>
          </select>
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="date">Preferred Date & Time</label>
        <input type="text" id="date" name="date" placeholder="e.g. Monday, July 10th at 2pm" />
      </div>

      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any questions or details..."
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary"
        disabled={loading}
        style={{ width: "100%", marginTop: 8 }}
      >
        {loading ? "Sending..." : "Send Booking Request"}
      </button>

      
    </form>
  );
}
