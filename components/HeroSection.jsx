"use client";

import Link from "next/link";

const heroImages = {
  default:
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1600&q=80",
  services:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1600&q=80",
  gallery:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
  booking:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80",
  contact:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&q=80",
};

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  variant = "image",
  imageKey = "default",
}) {
  const imgUrl = heroImages[imageKey] || heroImages.default;

  return (
    <section className={`hero hero--${variant}`}>
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="hero__subtitle">{subtitle}</p>
        <h1 className="hero__title">{title}</h1>
        {ctaText && ctaHref && (
          <Link href={ctaHref} className="btn btn--glass hero__cta">
            {ctaText}
          </Link>
        )}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero--image {
          height: 90vh;
          min-height: 600px;
        }

        .hero__bg {
          position: absolute;
          inset: -10%;
          background-size: cover;
          background-position: center;
          animation: slowZoom 25s ease-in-out infinite alternate;
          z-index: 0;
        }

        .hero--simple .hero__bg {
          animation: slowZoomOut 20s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes slowZoomOut {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .hero--image .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.6)
          );
          z-index: 1;
        }

        .hero--simple {
          padding: 180px 0 80px;
          min-height: auto;
        }

        .hero--simple .hero__overlay {
          display: none;
        }

        .hero--simple .hero__bg {
          opacity: 0.15;
        }

        .hero--simple .hero__subtitle {
          color: var(--gray-400);
        }

        .hero--simple .hero__title {
          color: var(--white);
        }

        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }

        .hero__subtitle {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
        }

        .hero__title {
          color: var(--white);
          margin-bottom: 32px;
          line-height: 1.05;
        }

        .hero__cta {
          font-size: 13px;
          padding: 16px 40px;
        }

        @media (max-width: 768px) {
          .hero--image {
            min-height: 500px;
            height: 80vh;
          }

          .hero--simple {
            padding: 140px 0 60px;
          }
        }
      `}</style>
    </section>
  );
}
