"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        <Image
          src="/logofix2.webp"
          alt="MGC Aesthetics logo"
          width={120}
          height={120}
          className="splash__img"
        />
        <span className="splash__name">MGC Aesthetics</span>
        <span className="splash__tag">Beauty &amp; Wellness</span>
      </div>
      
    </div>
  );
}
