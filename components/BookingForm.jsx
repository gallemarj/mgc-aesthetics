"use client";

import { useState } from "react";

const CONTACT_EMAIL = "tristansamoy2@gmail.com";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    const subject = `Booking Request: ${data.service} from ${data.name}`;
    const body = [
      "Booking Request",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Preferred Date: ${data.date || "—"}`,
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
          Your email app should open with your booking details pre-filled. Just
          press <strong>Send</strong> to send it to us.
        </p>
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
            placeholder="Juan Dela Cruz"
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="09XX XXX XXXX"
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
            placeholder="juan@example.com"
          />
        </div>
        <div className="form__group">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="Signature Head Spa">Signature Head Spa (₱999)</option>
            <option value="Premium Head Spa + Back Massage">Premium Head Spa + Back Massage (₱1,499)</option>
            <option value="Signature Head Spa + Full Body Massage + Foot Spa">Signature Head Spa + Full Body Massage + Foot Spa (₱1,999)</option>
            <option value="Premium Head Spa + Full Body Massage + Facial">Premium Head Spa + Full Body Massage + Facial (₱2,499)</option>
            <option value="Facial Services">Facial Services</option>
            <option value="Face Treatments">Face Treatments</option>
            <option value="Body Treatments">Body Treatments</option>
            <option value="Hair Removal Treatments">Hair Removal Treatments</option>
            <option value="Laser Removal">Laser Removal</option>
            <option value="Wax Services">Wax Services</option>
            <option value="Lash Services">Lash Services</option>
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
        style={{ width: "100%", marginTop: 8 }}
      >
        Send Booking Request
      </button>
    </form>
  );
}
