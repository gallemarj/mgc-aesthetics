"use client";

import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";

export default function BookingPage() {
  return (
    <div className="page">
      <HeroSection
        title="Book an appointment"
        subtitle="Get started"
      />

      <section className="section">
        <div className="container">
          <div className="booking-layout">
            <Reveal variant="fadeUp">
              <div className="booking-info">
                <p className="section__subtitle">How it works</p>
                <h2 className="section__title" style={{ marginBottom: 20 }}>
                  Ready for your visit?
                </h2>
                <p>
                  Fill out the form and we&apos;ll get back to you within 24 hours
                  to confirm your appointment. Have questions? Use the chat bubble
                  to message us directly.
                </p>

                <div className="booking-contact">
                  <div>
                    <strong>Phone</strong>
                    <p>0963-297-1024</p>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>hello@mgcaesthetics.com</p>
                  </div>
                </div>

                <a
                  className="messenger-btn"
                  href="https://web.facebook.com/gtbymgc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Contact us on Facebook
                </a>
              </div>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.15}>
              <div className="booking-form">
                <div className="form-wrapper">
                  <BookingForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      
    </div>
  );
}
