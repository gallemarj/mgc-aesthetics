"use client";

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="page">
      <HeroSection
        title="Get in touch"
        subtitle="Contact us"
        variant="simple"
        imageKey="contact"
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal variant="slideLeft">
              <div className="contact-info">
                <p className="section__subtitle">Reach out</p>
                <h2 className="section__title" style={{ marginBottom: 20 }}>
                  We&apos;d love to hear from you
                </h2>
                <p>
                  Whether you have a question about our services, pricing, or
                  want to schedule a consultation — we&apos;re here to help.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="contact-detail__label">Address</span>
                    <span>123 Beauty Lane, City, State 12345</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Phone</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Email</span>
                    <span>hello@mgcaesthetics.com</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Hours</span>
                    <span>
                      Mon–Fri: 9am – 7pm
                      <br />
                      Sat: 10am – 5pm
                      <br />
                      Sun: Closed
                    </span>
                  </div>
                </div>

                <a
                  className="messenger-btn"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Messenger chat is not yet connected.\n\nTo set up:\n1. Create a Facebook Page for MGC Aesthetics\n2. Go to Page Settings → Messaging\n3. Follow Facebook's steps to add Messenger to your site\n4. Replace YOUR_PAGE_ID in components/MessengerChat.jsx"
                    );
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.208 11.852V15.18H7.237v-3.18h2.971V9.726c0-2.935 1.75-4.556 4.424-4.556 1.282 0 2.624.229 2.624.229v2.883h-1.478c-1.456 0-1.91.903-1.91 1.83v2.198h3.25l-.519 3.18h-2.731v8.672C19.568 22.984 24 18.016 24 12 24 12 5.373 18.627 0 12 0z" />
                  </svg>
                  Contact us on Messenger
                </a>
              </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.15}>
              <div className="contact-form">
                <div className="form-wrapper">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 0 }}>
        <div className="map-placeholder">
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
          />
          <div className="map-placeholder__overlay" />
          <p style={{ position: "relative", zIndex: 1 }}>
            Google Maps embed will go here
          </p>
        </div>
      </section>

      
    </div>
  );
}
