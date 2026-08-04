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
                className={`slide ${active ? "slide--active" : ""}`}
                style={{ transform: tf, zIndex: z, opacity: op }}
              >
                <div className="slide__card">
                  <ServiceCard service={service} active={active} />
                </div>
                <div className="slide__overlay" />
                <div className="slide__text">
                  {active ? (
                    <AnimatePresence mode="sync">
                      <motion.p
                        className="slide__title"
                        key={`t-${current}`}
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                        style={{ color: "#fff", fontWeight: 800 }}
                      >
                        {service.title}
                      </motion.p>
                      <p className="slide__desc" key={`d-${current}`}>
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
        {services.map((_, i) => (
          <button key={i} className={`dot ${i === current ? "dot--active" : ""}`} onClick={() => setCurrent(i)} />
        ))}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          padding: 0;
          margin-bottom: 0px;
        }

        .carousel__stage {
          position: relative;
          height: 700px;
          overflow: hidden;
        }

        .carousel__track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -240px;
          width: 480px;
          height: 640px;
          transition: all 0.9s cubic-bezier(0.65, 0, 0.35, 1);
          overflow: hidden;
          border-radius: 12px;
          pointer-events: none;
        }

        .slide--active {
          pointer-events: auto;
        }

        .slide__card {
          width: 100%;
          height: 100%;
        }

        .slide__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 70%);
          pointer-events: none;
        }

        .slide__text {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          z-index: 2;
          pointer-events: none;
        }

        .slide__title {
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 6px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          min-height: 28px;
        }

        .slide__desc {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255,255,255,0.9);
          min-height: 36px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
          max-width: 220px;
        }

        :global(.cursor) {
          animation: blink 0.8s step-end infinite;
          margin-left: 1px;
          font-weight: 300;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid var(--gray-200);
          color: var(--gray-700);
          cursor: pointer;
          transition: all 0.25s ease;
          border-radius: 50%;
        }

        .arrow:hover {
          background: var(--white);
          transform: translateY(-50%) scale(1.06);
        }

        .arrow--left { left: 12px; }
        .arrow--right { right: 12px; }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
          padding-bottom: 20px;
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

        .dot:active {
          transform: scale(0.9);
        }

        @media (max-width: 768px) {
          .slide {
            width: 280px;
            height: 380px;
            margin-left: -140px;
          }

          .carousel__stage {
            height: 500px;
          }

          .arrow {
            width: 36px;
            height: 36px;
          }

          .slide__text {
            top: 14px;
            left: 14px;
            right: 14px;
          }

          .slide__title {
            font-size: 16px;
          }

          .slide__desc {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .slide {
            width: 220px;
            height: 300px;
            margin-left: -110px;
          }

          .carousel__stage {
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
}