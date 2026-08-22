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
        variant="simple"
        imageKey="booking"
      />

      <section className="section">
        <div className="container">
          <div className="booking-layout">
            <Reveal variant="slideLeft">
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
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.208 11.852V15.18H7.237v-3.18h2.971V9.726c0-2.935 1.75-4.556 4.424-4.556 1.282 0 2.624.229 2.624.229v2.883h-1.478c-1.456 0-1.91.903-1.91 1.83v2.198h3.25l-.519 3.18h-2.731v8.672C19.568 22.984 24 18.016 24 12 24 12 5.373 18.627 0 12 0z" />
                  </svg>
                  Contact us on Messenger
                </a>
              </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.15}>
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
