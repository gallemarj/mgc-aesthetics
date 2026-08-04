"use client";

import { useState, useEffect } from "react";

const announcements = [
  "Book now and get 10% off your first service",
  "Free consultation with every appointment",
  "New clients welcome — special rates available",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c === announcements.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="announcement">
      <div className="announcement__track">
        {announcements.map((text, i) => (
          <div
            key={i}
            className={`announcement__slide ${i === current ? "announcement__slide--active" : ""}`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .announcement {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          height: 32px;
          background: var(--black);
          overflow: hidden;
        }

        .announcement__track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .announcement__slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .announcement__slide--active {
          opacity: 1;
        }

        .announcement__slide p {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
