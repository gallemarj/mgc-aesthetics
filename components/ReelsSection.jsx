"use client";

import { useEffect, useRef, useState } from "react";
import { reels } from "@/lib/reels";

export default function ReelsSection({ id }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const video = videoRef.current;
    const bgVideo = bgVideoRef.current;
    if (!stage || !video || !bgVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          bgVideo.play().catch(() => {});
        } else {
          video.pause();
          bgVideo.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, [index]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const next = () => setIndex((i) => (i + 1) % reels.length);
  const prev = () => setIndex((i) => (i - 1 + reels.length) % reels.length);

  return (
    <section className="section reels-section">
      <div className="reels-backdrop" aria-hidden="true">
        <video
          key={`backdrop-${index}`}
          ref={bgVideoRef}
          src={reels[index]}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="reels-backdrop__video"
        />
        <div className="reels-backdrop__overlay" />
      </div>

      <div className="container reels-container">
        <p className="section__subtitle">A look inside</p>
        <h2 className="section__title">Reels</h2>

          <div className="reels-player" id={id}>
            <div className="reels-player__frame">
              <button
                className="reels-btn reels-btn--prev"
                onClick={prev}
                aria-label="Previous reel"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div
                ref={stageRef}
                className="reels-player__stage"
                onClick={() => setOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="Play reel fullscreen"
              >
                <video
                  key={reels[index]}
                  ref={videoRef}
                  src={reels[index]}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="reels-player__video"
                />
              </div>
              <button
                className="reels-btn reels-btn--next"
                onClick={next}
                aria-label="Next reel"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>

            <div className="reels-player__controls">
              <span className="reels-player__count">
                {index + 1} / {reels.length}
              </span>
            </div>
          </div>
      </div>

      {open && (
        <div className="reels-lightbox" onClick={() => setOpen(false)}>
          <button
            className="reels-lightbox__close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <video
            className="reels-lightbox__video"
            src={reels[index]}
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
