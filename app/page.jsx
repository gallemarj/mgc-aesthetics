"use client";

import HeroCarousel from "@/components/HeroCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import LocationSection from "@/components/LocationSection";
import ReelsSection from "@/components/ReelsSection";
import { services } from "@/lib/services";
import { galleryImages } from "@/lib/gallery";
import { reviews } from "@/lib/reviews";
import Image from "next/image";

const stars = Array.from({ length: 5 }, (_, i) => i);

export default function HomePage() {
  const homeGallery = galleryImages.slice(0, 30);
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
          <TestimonialCarousel testimonials={reviews} />
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
            <SectionTitle subtitle="Our work" title="Clients" />
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--white)", overflow: "hidden", marginTop: -20 }}>
        <span id="gallery" />
        <div className="gallery-scroll">
          <div className="gallery-scroll__col gallery-scroll__col--up">
            <div className="gallery-scroll__track">
              {homeGallery.filter((_, i) => i % 3 === 0).concat(homeGallery.filter((_, i) => i % 3 === 0)).map((url, j) => (
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics clients" fill sizes="33vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--down">
            <div className="gallery-scroll__track">
              {homeGallery.filter((_, i) => i % 3 === 1).concat(homeGallery.filter((_, i) => i % 3 === 1)).map((url, j) => (
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics clients" fill sizes="33vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-scroll__col gallery-scroll__col--up">
            <div className="gallery-scroll__track">
              {homeGallery.filter((_, i) => i % 3 === 2).concat(homeGallery.filter((_, i) => i % 3 === 2)).map((url, j) => (
                <div key={j} className="gallery-scroll__item">
                  <Image src={url} alt="MGC Aesthetics clients" fill sizes="33vw" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "40px 0 40px" }}>
          <Link href="/clients" className="btn btn--outline">
            See all clients
          </Link>
        </div>
      </section>
      <ReelsSection id="reels" />
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <Reveal variant="fadeUp">
              <div className="about-grid__text">
                <h2 className="section__title">Our mission</h2>
                <p>
                  Our mission is to provide safe, high-quality beauty and
                  wellness services that enhance natural beauty while making
                  every client feel confident, cared for, and valued. We are
                  committed to ensuring that every peso our clients spend is
                  matched with exceptional quality, professional care, and the
                  service they truly deserve.
                </p>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.15}>
              <div className="about-grid__logo">
                <Image
                  src="/logo.png"
                  alt="MGC Aesthetics logo"
                  width={260}
                  height={260}
                  className="about-grid__logo-img"
                />
              </div>
            </Reveal>
          </div>
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

      <LocationSection id="location" />

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
