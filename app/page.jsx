"use client";

import HeroCarousel from "@/components/HeroCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { services } from "@/lib/services";
import Image from "next/image";

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
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics gallery" fill sizes="33vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--down">
            <div className="gallery-scroll__track">
              {galleryImages.filter((_, i) => i % 3 === 1).concat(galleryImages.filter((_, i) => i % 3 === 1)).map((url, j) => (
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics gallery" fill sizes="33vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--up">
            <div className="gallery-scroll__track">
              {galleryImages.filter((_, i) => i % 3 === 2).concat(galleryImages.filter((_, i) => i % 3 === 2)).map((url, j) => (
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics gallery" fill sizes="33vw" loading="lazy" />
                </div>
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
            <Reveal variant="fadeUp">
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
            <Reveal variant="fadeUp" delay={0.15}>
              <div className="about-grid__image">
                <Image
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80"
                  alt="About MGC Aesthetics"
                  fill
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
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
              <div className="home-faq-item">
                <h4>How do I book an appointment?</h4>
                <p>You can book directly through our booking page or by contacting us via phone or the messenger chat on this site.</p>
              </div>
              <div className="home-faq-item">
                <h4>Do you offer consultations?</h4>
                <p>Yes, every appointment includes a free consultation so we can understand your needs and recommend the best treatment.</p>
              </div>
              <div className="home-faq-item">
                <h4>What is your cancellation policy?</h4>
                <p>We ask for at least 24 hours notice for cancellations or rescheduling to avoid any fees.</p>
              </div>
              <div className="home-faq-item">
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
          <div className="cta-section__bg">
            <Image
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80"
              alt=""
              fill
              sizes="100vw"
              loading="lazy"
            />
          </div>
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

      
    </div>
  );
}
