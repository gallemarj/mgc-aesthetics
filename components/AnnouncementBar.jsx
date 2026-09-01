"use client";

import { useState, useEffect } from "react";
import content from "@/content/announcements.json";

const announcements = content.messages.map((m) => m.text);

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

      
    </div>
  );
}
