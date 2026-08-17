"use client";

import { useEffect, useRef, useState } from "react";
import { reels } from "@/lib/reels";

function ReelCard({ src, index, onOpen }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reel-card"
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      aria-label={`Play reel ${index + 1}`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className="reel-card__play">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>
  );
}

export default function ReelsSection({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id={id} className="section reels-section">
      <div className="container">
        <p className="section__subtitle">A look inside</p>
        <h2 className="section__title">Reels</h2>
        <div className="reels-scroll">
          {reels.map((src, i) => (
            <ReelCard key={src} src={src} index={i} onOpen={setOpenIndex} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="reels-lightbox" onClick={() => setOpenIndex(null)}>
          <button
            className="reels-lightbox__close"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
          >
            ×
          </button>
          <video
            className="reels-lightbox__video"
            src={reels[openIndex]}
            autoPlay
            loop
            playsInline
            controls
            muted
          />
        </div>
      )}
    </section>
  );
}
