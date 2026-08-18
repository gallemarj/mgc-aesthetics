"use client";

import Reveal from "@/components/Reveal";
import { reviews } from "@/lib/reviews";

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function ReviewsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">What clients say</p>
          <h1>Reviews</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="review-card">
                  <div className="review-card__stars">
                    {stars.map((s) => (
                      <svg key={s} viewBox="0 0 20 20" fill={s < t.rating ? "var(--black)" : "var(--gray-200)"} width="16" height="16">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="review-card__text">&ldquo;{t.text}&rdquo;</p>
                  <p className="review-card__name">— {t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}