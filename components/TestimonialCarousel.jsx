"use client";

import { useEffect, useRef } from "react";

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function TestimonialCarousel({ testimonials }) {
  const stageRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const count = testimonials.length;

  useEffect(() => {
    let start = null;
    function tick(timestamp) {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      angleRef.current = (elapsed * 3) % 360;

      const w = window.innerWidth;
      const radius = w < 480 ? 170 : w < 768 ? 260 : 440;

      if (stageRef.current) {
        const cards = stageRef.current.children;
        for (let i = 0; i < count; i++) {
          const a = ((360 / count) * i + angleRef.current) * (Math.PI / 180);
          const x = radius * Math.sin(a);
          const y = -radius * Math.cos(a);
          cards[i].style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [count]);

  return (
    <div className="carousel">
      <div className="carousel__stage" ref={stageRef}>
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <div className="card__stars">
              {stars.map((s) => (
                <svg key={s} viewBox="0 0 20 20" fill={s < t.rating ? "var(--black)" : "var(--gray-200)"} width="14" height="14">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
            <p className="card__text">&ldquo;{t.text}&rdquo;</p>
            <p className="card__name">— {t.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 620px;
        }

        .carousel__stage {
          position: absolute;
          top: 100%;
          left: 50%;
          width: 0;
          height: 0;
        }

        .card {
          position: absolute;
          width: 220px;
          aspect-ratio: 5 / 7;
          padding: 36px 24px;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          backface-visibility: hidden;
          will-change: transform;
        }

        .card__stars {
          display: flex;
          gap: 3px;
        }

        .card__text {
          font-size: 13px;
          line-height: 1.6;
          color: var(--gray-600);
          font-style: italic;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        .card__name {
          font-size: 12px;
          font-weight: 500;
          color: var(--gray-500);
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .carousel {
            height: 470px;
          }

          .carousel__stage {
            top: calc(100% - 55px);
          }

          .card {
            width: 180px;
            padding: 28px 20px;
          }

          .card__stars svg {
            width: 12px;
            height: 12px;
          }

          .card__text {
            font-size: 12px;
            -webkit-line-clamp: 4;
          }
        }

        @media (max-width: 480px) {
          .carousel {
            height: 350px;
          }

          .carousel__stage {
            top: calc(100% - 55px);
          }

          .card {
            width: 140px;
            padding: 18px 14px;
          }

          .card__text {
            font-size: 11px;
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </div>
  );
}