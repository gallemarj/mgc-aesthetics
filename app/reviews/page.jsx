"use client";

import Reveal from "@/components/Reveal";

const stars = Array.from({ length: 5 }, (_, i) => i);

const testimonials = [
  { name: "Sarah M.", text: "Absolutely love my eyebrow tattoo! MGC made me feel so comfortable and the results are stunning.", rating: 5 },
  { name: "Jessica R.", text: "The facial was incredible. My skin has never looked better. Highly recommend the laser treatment too!", rating: 5 },
  { name: "Amanda L.", text: "Professional, clean, and welcoming space. The massage was exactly what I needed. Will be coming back monthly.", rating: 5 },
  { name: "Michelle T.", text: "The lash extensions are gorgeous. So natural and last so long. Already booked my next session.", rating: 5 },
  { name: "Rachel K.", text: "I was nervous about lip tattoo but the team walked me through everything. Result is beautiful and natural.", rating: 5 },
  { name: "Emily W.", text: "Foot spa was pure bliss. The attention to detail and the relaxing atmosphere made my whole week.", rating: 5 },
  { name: "Lauren B.", text: "Best facial I have ever had. My skin was glowing for days after. The products they use smell incredible.", rating: 5 },
  { name: "Stephanie C.", text: "Hair removal treatment was quick and effective. So glad I found this place. The staff are incredibly professional.", rating: 5 },
  { name: "Nicole D.", text: "Tattoo removal process has been smooth and well managed. Visible results after just a few sessions. Highly recommend.", rating: 5 },
  { name: "Olivia P.", text: "The eyebrow tattoo exceeded my expectations. So natural looking and the shape is perfect. Could not be happier.", rating: 5 },
  { name: "Hannah W.", text: "Came in for a massage and left feeling like a new person. The ambiance and skill of the therapist were outstanding.", rating: 5 },
  { name: "Chloe B.", text: "Laser sessions have been quick and painless. The staff explains everything clearly and makes you feel at ease.", rating: 5 },
];

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
            {testimonials.map((t, i) => (
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