"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    url: "/homepic/homepic1.avif",
    title: "Head Spa",
    alt: "Head spa hair wash treatment at MGC Aesthetics in Paniqui, Tarlac",
    headline: "GLOW",
  },
  {
    url: "/homepic/homepic2.avif",
    title: "Magneto RF",
    alt: "Magneto RF face lifting treatment at MGC Aesthetics in Paniqui, Tarlac",
    headline: "RELAX",
  },
  {
    url: "/homepic/homepic3.avif",
    title: "LED Light Facial",
    alt: "LED light therapy facial treatment at MGC Aesthetics in Paniqui, Tarlac",
    headline: "RENEW",
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

  const variants = {
    enter: (d) => ({ y: d > 0 ? -300 : 300, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d) => ({ y: d > 0 ? 300 : -300, opacity: 0 }),
  };

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", scale: 0.96, opacity: 0 }),
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 2 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", scale: 0.96, opacity: 0, zIndex: 1 }),
  };

  const activeSlide = slides[current];

  return (
    <section className="hero">
      <div className="hero__stage">
        <AnimatePresence custom={dir} initial={false}>
          <motion.a
            key={current}
            custom={dir}
            href="/#services"
            className="slide slide--active"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={activeSlide.url}
              alt={activeSlide.alt || activeSlide.title}
              fill
              sizes="100vw"
              priority
              className="slide__img"
            />
            <div className="slide__overlay" />
          </motion.a>
        </AnimatePresence>
      </div>

      <div className="hero__text">
        <p className="hero__eyebrow">First Japanese Head Spa in Paniqui, Tarlac</p>
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