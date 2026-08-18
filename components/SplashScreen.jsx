"use client";

import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash ${fading ? "splash--fade" : ""}`}>
      <div className="splash__logo">
        <span className="splash__name">MGC Aesthetics</span>
        <span className="splash__tag">Beauty &amp; Wellness</span>
      </div>
      
    </div>
  );
}
