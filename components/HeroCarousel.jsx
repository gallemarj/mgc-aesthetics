"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1600&q=80",
    title: "Eyebrow Tattoo",
    headline: "Perfect Brows,\nNaturally",
  },
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80",
    title: "Facial & Laser",
    headline: "Reveal Your\nRadiance",
  },
  {
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80",
    title: "Massage & Spa",
    headline: "Escape &\nUnwind",
  },
  {
    url: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1600&q=80",
    title: "Lip Tattoo & Lash",
    headline: "Enhance Your\nNatural Beauty",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const transitioning = useRef(false);
  const total = slides.length;

  const goTo = useCallback((d) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setDir(d);
    setCurrent((c) => (c + d + total) % total);
    setResetKey((k) => k + 1);
    setTimeout(() => { transitioning.current = false; }, 1200);
  }, [total]);

  const next = useCallback(() => goTo(1), [goTo]);
  const prev = useCallback(() => goTo(-1), [goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, resetKey]);

  const idx = (offset) => (current + offset + total) % total;

  const variants = {
    enter: (d) => ({ y: d > 0 ? -300 : 300, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d) => ({ y: d > 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="hero">
      <div className="hero__stage">
        {[-1, 0, 1].map((offset) => {
          const i = idx(offset);
          const s = slides[i];
          const active = offset === 0;
          const tf = offset === -1 ? "translateX(-68%) scale(0.6)" : offset === 0 ? "translateX(0) scale(1)" : "translateX(68%) scale(0.6)";
          return (
            <a
              key={i}
              href={active ? "/#services" : undefined}
              onClick={(e) => { if (!active) { e.preventDefault(); offset === -1 ? prev() : next(); } }}
              className={`slide ${active ? "slide--active" : ""}`}
              style={{ transform: tf, zIndex: active ? 3 : 1, opacity: active ? 1 : 0.3 }}
            >
              <div className="slide__img" style={{ backgroundImage: `url(${s.url})` }} />
              <div className="slide__overlay" />
              {active && <p className="slide__label">{s.title}</p>}
            </a>
          );
        })}
      </div>

      <div className="hero__text">
        <p className="hero__eyebrow">MGC Aesthetics</p>
        <div className="hero__title-wrap">
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.h1
              key={current}
              className="hero__title"
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            >
              {slides[current].headline.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>
        <a href="/#services" className="btn btn--primary">Explore Services</a>
      </div>

      <button className="arrow arrow--left" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="arrow arrow--right" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="dots">
        {slides.map((_, i) => (
          <button key={i} className={`dot ${i === current ? "dot--active" : ""}`} onClick={() => setCurrent(i)} />
        ))}
      </div>

      
    </section>
  );
}