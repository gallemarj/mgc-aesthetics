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
        <span className="splash__tag">Skincare &amp; Beauty</span>
      </div>
      <style jsx>{`
        .splash {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.7s ease;
        }

        .splash--fade {
          opacity: 0;
          pointer-events: none;
        }

        .splash__logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: splashIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .splash__name {
          color: var(--white);
          font-size: clamp(28px, 6vw, 46px);
          font-weight: 600;
          letter-spacing: 0.06em;
        }

        .splash__tag {
          color: var(--gray-400);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
        }

        @keyframes splashIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
