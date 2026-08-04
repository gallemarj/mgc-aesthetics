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

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          background: var(--off-white);
          overflow: hidden;
        }

        .hero__stage {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 1.2s cubic-bezier(0.65, 0, 0.35, 1);
          overflow: hidden;
          text-decoration: none;
        }

        .slide__img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .slide__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45), transparent 45%);
        }

        .slide__label {
          position: absolute;
          bottom: 28px;
          left: 32px;
          right: 32px;
          z-index: 2;
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
        }

        .hero__text {
          position: absolute;
          z-index: 10;
          top: 90px;
          left: clamp(24px, 5vw, 80px);
        }

        .hero__eyebrow {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gray-400);
          margin-bottom: 14px;
        }

        .hero__title-wrap {
          position: relative;
          margin-bottom: 28px;
          height: clamp(5.6rem, 12vw, 10rem);
          overflow: hidden;
          width: 200vw;
          max-width: 800px;
        }

        .hero__title {
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--black);
          max-width: 600px;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid var(--gray-200);
          color: var(--gray-700);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .arrow:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.06);
        }

        .arrow--left { left: 12px; }
        .arrow--right { right: 12px; }

        .dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gray-300);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot--active {
          background: var(--black);
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .hero { height: 100vh; min-height: 500px; }
          .hero__stage { position: absolute; inset: 0; }
          .hero__text { position: absolute; top: 110px; left: 24px; right: 24px; text-align: center; }
          .hero__title-wrap { height: clamp(7rem, 24vw, 10rem); width: 100%; max-width: none; }
          .hero__title { font-size: clamp(2rem, 8vw, 3rem); max-width: 100%; }
          .arrow--left { left: 4px; }
          .arrow--right { right: 4px; }
        }
      `}</style>
    </section>
  );
}