"use client";

import HeroCarousel from "@/components/HeroCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { services } from "@/lib/services";

const stars = Array.from({ length: 5 }, (_, i) => i);

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely love my eyebrow tattoo! MGC made me feel so comfortable and the results are stunning.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    text: "The facial was incredible. My skin has never looked better. Highly recommend the laser treatment too!",
    rating: 5,
  },
  {
    name: "Amanda L.",
    text: "Professional, clean, and welcoming space. The massage was exactly what I needed. Will be coming back monthly.",
    rating: 5,
  },
  {
    name: "Michelle T.",
    text: "The lash extensions are gorgeous. So natural and last so long. Already booked my next session.",
    rating: 5,
  },
  {
    name: "Rachel K.",
    text: "I was nervous about lip tattoo but the team walked me through everything. Result is beautiful and natural.",
    rating: 5,
  },
  {
    name: "Emily W.",
    text: "Foot spa was pure bliss. The attention to detail and the relaxing atmosphere made my whole week.",
    rating: 5,
  },
  {
    name: "Lauren B.",
    text: "Best facial I have ever had. My skin was glowing for days after. The products they use smell incredible.",
    rating: 5,
  },
  {
    name: "Stephanie C.",
    text: "Hair removal treatment was quick and effective. So glad I found this place. The staff are incredibly professional.",
    rating: 5,
  },
  {
    name: "Nicole D.",
    text: "Tattoo removal process has been smooth and well managed. Visible results after just a few sessions. Highly recommend.",
    rating: 5,
  },
  {
    name: "Hannah W.",
    text: "Came in for a massage and left feeling like a new person. The ambiance and skill of the therapist were outstanding.",
    rating: 5,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80",
  "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
  "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
];

export default function HomePage() {
  return (
    <div className="page">
      <section id="home"><HeroCarousel /></section>

      <section className="section services-section">
        <div className="container">
          <Reveal>
            <SectionTitle
              subtitle="What we offer"
              title="Premium beauty & wellness services"
            />
          </Reveal>
          <span id="services" />
          <ServiceCarousel services={services} />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button className="btn btn--outline" disabled>
              See all services
            </button>
          </div>
        </div>
      </section>

      <section id="reviews" className="section testimonial-section">
        <div className="container">
          <Reveal>
            <SectionTitle
              subtitle="What clients say"
              title="Trusted by hundreds"
            />
          </Reveal>
          <TestimonialCarousel testimonials={testimonials} />
          <div className="reviews-cta">
            <button className="btn btn--outline" disabled>
              See all reviews
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0 0", background: "var(--white)", position: "relative", zIndex: 2, marginTop: -30 }}>
        <div className="container">
          <Reveal>
            <SectionTitle subtitle="Our work" title="Gallery" />
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--white)", overflow: "hidden", marginTop: -20 }}>
        <span id="gallery" />
        <div className="gallery-scroll">
          <div className="gallery-scroll__col gallery-scroll__col--up">
            <div className="gallery-scroll__track">
              {galleryImages.filter((_, i) => i % 3 === 0).concat(galleryImages.filter((_, i) => i % 3 === 0)).map((url, j) => (
                <div key={j} className="gallery-scroll__item" style={{ backgroundImage: `url(${url})` }} />
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--down">
            <div className="gallery-scroll__track">
              {galleryImages.filter((_, i) => i % 3 === 1).concat(galleryImages.filter((_, i) => i % 3 === 1)).map((url, j) => (
                <div key={j} className="gallery-scroll__item" style={{ backgroundImage: `url(${url})` }} />
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--up">
            <div className="gallery-scroll__track">
              {galleryImages.filter((_, i) => i % 3 === 2).concat(galleryImages.filter((_, i) => i % 3 === 2)).map((url, j) => (
                <div key={j} className="gallery-scroll__item" style={{ backgroundImage: `url(${url})` }} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "40px 0 40px" }}>
          <button className="btn btn--outline" disabled>
            See all gallery
          </button>
        </div>
      </section>
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <Reveal variant="slideLeft">
              <div className="about-grid__text">
                <SectionTitle subtitle="Our story" title="Excellence in aesthetics & wellness" align="left" />
                <p>
                  MGC Aesthetics was founded with a simple mission: to provide
                  premium beauty and wellness services in a space that feels both
                  professional and welcoming. Every treatment we offer is
                  performed with precision, care, and an eye for the natural
                  result.
                </p>
                <p>
                  Our team of licensed professionals brings years of experience in
                  permanent makeup, skincare, laser technology, and therapeutic
                  body treatments. We stay current with the latest techniques and
                  industry standards to ensure you receive the highest quality of
                  care.
                </p>
              </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.15}>
              <div
                className="about-grid__image"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80)",
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <Reveal>
            <SectionTitle subtitle="By the numbers" title="Trusted by hundreds" />
          </Reveal>
          <Reveal variant="fadeUp" delay={0.15}>
            <div className="stats-grid">
              <CountUp end={500} suffix="+" label="Happy clients" />
              <CountUp end={9} label="Services offered" />
              <CountUp end={5} suffix="+" label="Years experience" />
              <CountUp end={100} suffix="%" label="Satisfaction" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="container">
          <Reveal>
            <SectionTitle subtitle="Need help?" title="Frequently asked questions" />
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How do I book an appointment?</h4>
                <p>You can book directly through our booking page or by contacting us via phone or the messenger chat on this site.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer consultations?</h4>
                <p>Yes, every appointment includes a free consultation so we can understand your needs and recommend the best treatment.</p>
              </div>
              <div className="faq-item">
                <h4>What is your cancellation policy?</h4>
                <p>We ask for at least 24 hours notice for cancellations or rescheduling to avoid any fees.</p>
              </div>
              <div className="faq-item">
                <h4>Are your treatments safe?</h4>
                <p>Absolutely. All treatments are performed by licensed professionals using FDA-approved equipment and premium products.</p>
              </div>
            </div>
          </Reveal>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="btn btn--outline" disabled>
              See all FAQs
            </button>
          </div>
        </div>
      </section>

      <Reveal variant="fadeUp">
        <section className="section cta-section">
          <div
            className="cta-section__bg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80)",
            }}
          />
          <div className="cta-section__overlay" />
          <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <h2 style={{ marginBottom: 16, color: "var(--white)" }}>
              Ready to book your appointment?
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: 32,
                maxWidth: 480,
                margin: "0 auto 32px",
              }}
            >
              Take the first step toward looking and feeling your best.
            </p>
            <Link href="/booking" className="btn btn--glass">
              Book Now
            </Link>
          </div>
        </section>
      </Reveal>

      <style jsx>{`
        .services-section {
          background: var(--white);
          padding: 30px 0 20px;
        }

        .services-section #services {
          display: block;
          scroll-margin-top: 140px;
        }

        .services-section .section-title {
          margin-bottom: 8px;
        }

        .services-section .section-title__sub {
          margin-bottom: 4px;
        }

        .services-section :global(.carousel) {
          padding: 0;
          margin-top: -60px;
        }



        .testimonial-section {
          background: var(--off-white);
          padding: 60px 0 0;
          position: relative;
          scroll-margin-top: 30px;
        }

        .testimonial-section .reviews-cta {
          position: absolute;
          bottom: 48px;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 3;
          pointer-events: none;
        }

        .testimonial-section .reviews-cta :global(.btn) {
          pointer-events: auto;
        }

        .testimonial-section :global(.section-title) {
          margin-bottom: 16px;
        }

        #gallery {
          display: block;
          scroll-margin-top: 120px;
        }

        #gallery .section-title {
          margin-bottom: 16px;
        }

        .gallery-scroll {
          display: flex;
          gap: 8px;
          height: 600px;
          overflow: hidden;
        }

        .gallery-scroll__col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: hidden;
        }

        .gallery-scroll__track {
          display: flex;
          flex-direction: column;
          gap: 8px;
          will-change: transform;
        }

        .gallery-scroll__col--up .gallery-scroll__track {
          animation: scrollUp 20s linear infinite;
        }

        .gallery-scroll__col--down .gallery-scroll__track {
          animation: scrollDown 20s linear infinite;
        }

        .gallery-scroll__item {
          width: 100%;
          aspect-ratio: 1;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
          border-radius: 8px;
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        .faq-section {
          background: var(--off-white);
          scroll-margin-top: 100px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .faq-item {
          padding: 32px 28px;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 8px;
        }

        .faq-item h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .faq-item p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--gray-600);
        }

        .about-section {
          background: var(--off-white);
          padding-top: 60px;
          scroll-margin-top: 54px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-grid__text p {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .about-grid__image {
          aspect-ratio: 3 / 4;
          background-size: cover;
          background-position: center;
        }

        .stats-section {
          background: var(--white);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--gray-200);
        }

        .stats-grid > :global(*) {
          background: var(--white);
        }

        .cta-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--gray-200);
        }

        .cta-section__bg {
          position: absolute;
          inset: -10%;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          animation: slowZoom 25s ease-in-out infinite alternate;
          z-index: 0;
        }

        .cta-section__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .services-section {
            padding-top: 20px;
          }

          .services-section :global(.carousel) {
            margin-top: 0;
          }

          .testimonial-section {
            padding-top: 40px;
          }

          .gallery-scroll {
            height: 400px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {

          .gallery-scroll {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
