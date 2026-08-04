"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";

function TypewriterText({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      indexRef.current++;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayed}</span>;
}

export default function ServiceCarousel({ services }) {
  const [current, setCurrent] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const transitioning = useRef(false);
  const total = services.length;

  const goTo = useCallback((dir) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setCurrent((c) => (c + dir + total) % total);
    setResetKey((k) => k + 1);
    setTimeout(() => { transitioning.current = false; }, 700);
  }, [total]);

  const next = useCallback(() => goTo(1), [goTo]);
  const prev = useCallback(() => goTo(-1), [goTo]);

  useEffect(() => {
    const t = setInterval(next, 20000);
    return () => clearInterval(t);
  }, [next, resetKey]);

  function slideTransform(index) {
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    else if (diff < -total / 2) diff += total;

    if (diff === 0) return { tf: "translateX(0) scale(1) translateY(8%)", z: 3, op: 1 };
    if (diff === -1) return { tf: "translateX(-62%) scale(0.55) translateY(-8%)", z: 1, op: 0.5 };
    if (diff === 1) return { tf: "translateX(62%) scale(0.55) translateY(-8%)", z: 1, op: 0.5 };
    const farDir = diff < 0 ? -1 : 1;
    return { tf: `translateX(${farDir * 90}%) scale(0.4) translateY(${farDir * -8}%)`, z: 0, op: 0 };
  }

  return (
    <div className="carousel">
      <div className="carousel__stage">
        <div className="carousel__track">
          {services.map((service, i) => {
            const { tf, z, op } = slideTransform(i);
            const active = i === current;
            return (
              <div
                key={service.slug}
                className={`svc-slide ${active ? "svc-slide--active" : ""}`}
                style={{ transform: tf, zIndex: z, opacity: op }}
              >
                <div className="svc-slide__card">
                  <ServiceCard service={service} active={active} />
                </div>
                <div className="svc-slide__overlay" />
                <div className="svc-slide__text">
                  {active ? (
                    <AnimatePresence mode="sync">
                      <motion.p
                        className="svc-slide__title"
                        key={`t-${current}`}
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                        style={{ color: "#fff", fontWeight: 800 }}
                      >
                        {service.title}
                      </motion.p>
                      <p className="svc-slide__desc" key={`d-${current}`}>
                        <TypewriterText text={service.description} speed={12} />
                        <span className="cursor">|</span>
                      </p>
                    </AnimatePresence>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="svc-arrow svc-arrow--left" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="svc-arrow svc-arrow--right" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="svc-dots">
        {services.map((_, i) => (
          <button key={i} className={`svc-dot ${i === current ? "svc-dot--active" : ""}`} onClick={() => setCurrent(i)} />
        ))}
      </div>

      
    </div>
  );
}