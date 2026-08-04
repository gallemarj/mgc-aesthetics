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
    <section className={`inner-hero inner-hero--${variant}`}>
      <div
        className="inner-hero__bg"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="inner-hero__overlay" />
      <div className="inner-hero__content container">
        <p className="inner-hero__subtitle">{subtitle}</p>
        <h1 className="inner-hero__title">{title}</h1>
        {ctaText && ctaHref && (
          <Link href={ctaHref} className="btn btn--glass inner-hero__cta">
            {ctaText}
          </Link>
        )}
      </div>

      
    </section>
  );
}
