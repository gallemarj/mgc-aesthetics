"use client";

import { useState, useRef, useEffect } from "react";
import { allServices } from "@/lib/services";

const MESSENGER_URL = "https://m.me/gtbymgc";

const groupedServices = allServices.reduce((acc, service) => {
  (acc[service.category] = acc[service.category] || []).push(service);
  return acc;
}, {});

function ServiceSelect({ selected, onSelect, onOpenChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        onOpenChange(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [onOpenChange]);

  function toggle() {
    setOpen((o) => {
      const next = !o;
      onOpenChange(next);
      return next;
    });
  }

  function choose(item) {
    onSelect(item);
    setOpen(false);
    onOpenChange(false);
  }

  return (
    <div className="svc-select" ref={ref}>
      <button
        type="button"
        className={`svc-select__trigger ${selected ? "svc-select__trigger--filled" : ""} ${open ? "svc-select__trigger--open" : ""}`}
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>
          {selected
            ? `${selected.category} — ${selected.name} — ${selected.price}`
            : "Select a service"}
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="svc-select__menu" role="listbox">
          {Object.entries(groupedServices).map(([category, items]) => (
            <div key={category} className="svc-select__group">
              <div className="svc-select__group-label">{category}</div>
              {items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  role="option"
                  aria-selected={selected?.name === item.name}
                  className="svc-select__option"
                  onClick={() => choose(item)}
                >
                  <span>{item.name}</span>
                  <span className="svc-select__option-price">{item.price}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceError, setServiceError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedService) {
      setServiceError(true);
      return;
    }

    const data = Object.fromEntries(new FormData(e.target).entries());

    const body = [
      "New Booking Request",
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

    const url = `${MESSENGER_URL}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="success">
        <h3>Almost done!</h3>
        <p>
          Messenger should open with your booking details pre-filled. Just tap{" "}
          <strong>Send</strong> to send it to us.
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
          <ServiceSelect
            selected={selectedService}
            onSelect={(item) => {
              setSelectedService(item);
              setServiceError(false);
            }}
            onOpenChange={setMenuOpen}
          />
          {serviceError && !menuOpen && (
            <p className="form__error">Please select a service.</p>
          )}
          <input
            type="hidden"
            name="service"
            value={
              selectedService
                ? `${selectedService.name} — ${selectedService.price} (${selectedService.category})`
                : ""
            }
          />
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
