"use client";

import { useEffect, useRef } from "react";

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function TestimonialCarousel({ testimonials }) {
  const stageRef = useRef(null);
  const angleRef = useRef(0);
  const count = testimonials.length;

  useEffect(() => {
    let rafId = null;
    let lastTime = null;

    function tick(timestamp) {
      if (lastTime !== null) {
        const dt = (timestamp - lastTime) / 1000;
        angleRef.current = (angleRef.current + dt * 3) % 360;
      }
      lastTime = timestamp;

      if (stageRef.current) {
        const w = window.innerWidth;
        const radius = w < 480 ? 170 : w < 768 ? 260 : 440;
        const cards = stageRef.current.children;
        for (let i = 0; i < count; i++) {
          const a = ((360 / count) * i + angleRef.current) * (Math.PI / 180);
          const x = radius * Math.sin(a);
          const y = -radius * Math.cos(a);
          cards[i].style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [count]);

  return (
    <div className="tcarousel">
      <div className="tcarousel__stage" ref={stageRef}>
        {testimonials.map((t, i) => (
          <div key={i} className="tcard">
            <div className="tcard__stars">
              {stars.map((s) => (
                <svg key={s} viewBox="0 0 20 20" fill={s < t.rating ? "var(--black)" : "var(--gray-200)"} width="14" height="14">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
            <p className="tcard__text">&ldquo;{t.text}&rdquo;</p>
            <p className="tcard__name">— {t.name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}