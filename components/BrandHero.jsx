"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1600&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1600&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80",
];

export default function BrandHero() {
  const [slide, setSlide] = useState(0);

  const next = useCallback(() => {
    setSlide((c) => (c === images.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="hero">
      {images.map((url, i) => (
        <div
          key={i}
          className={`hero__bg ${i === slide ? "hero__bg--active" : ""}`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}
      <div className="hero__overlay" />

      <div className="hero__content container">
        <p className="hero__eyebrow">MGC Aesthetics</p>
        <h1 className="hero__title">
          <span className="hero__title-line">Eyebrow Tattoo</span>
          <span className="hero__title-line">Lip Tattoo</span>
          <span className="hero__title-line hero__title-line--fade">Facial</span>
        </h1>
        <div className="hero__actions">
          <a href="/booking" className="btn btn--glass">
            Book Now
          </a>
          <a href="/#services" className="btn btn--outline hero__btn-outline">
            Services
          </a>
        </div>
      </div>

      <div className="hero__indicator">
        <span className="hero__scroll">Scroll</span>
        <span className="hero__line" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          background: var(--gray-900);
        }

        .hero__bg {
          position: absolute;
          inset: -10%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.8s ease;
          z-index: 0;
        }

        .hero__bg--active {
          opacity: 1;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          padding-bottom: 120px;
          width: 100%;
        }

        .hero__eyebrow {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 20px;
        }

        .hero__title {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
        }

        .hero__title-line {
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--white);
        }

        .hero__title-line--fade {
          color: rgba(255, 255, 255, 0.4);
        }

        .hero__actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .hero__btn-outline {
          border-color: rgba(255, 255, 255, 0.3) !important;
          color: rgba(255, 255, 255, 0.8) !important;
        }

        .hero__btn-outline:hover {
          background: var(--white) !important;
          color: var(--black) !important;
          border-color: var(--white) !important;
        }

        .hero__indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .hero__scroll {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
        }

        .hero__line {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.3);
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 500px;
            align-items: flex-end;
          }

          .hero__content {
            padding-bottom: 100px;
          }

          .hero__title-line {
            font-size: clamp(2.2rem, 12vw, 4rem);
          }

          .hero__indicator {
            bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .hero__title-line {
            font-size: clamp(1.8rem, 14vw, 3rem);
          }

          .hero__actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
