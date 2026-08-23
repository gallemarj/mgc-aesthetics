"use client";

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import LocationSection from "@/components/LocationSection";

export default function ContactPage() {
  return (
    <div className="page">
      <HeroSection
        title="Get in touch"
        subtitle="Contact us"
        image="/homepic/homepic2.avif"
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal variant="fadeUp">
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
                    <span>
                      A.V.Y Building, 2nd Floor, Magallanes Street, Poblacion
                      Sur, Paniqui, Tarlac
                    </span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Landmark</span>
                    <span>
                      Beside P.O. Domingo Montessori School and Paniqui South
                      Elementary School
                    </span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Phone</span>
                    <span>0963-297-1024</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Email</span>
                    <span>hello@mgcaesthetics.com</span>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-detail__label">Hours</span>
                    <span>
                      Mon: Closed
                      <br />
                      Tue–Sun: 10:00 AM – 6:00 PM
                    </span>
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
              <div className="contact-form">
                <div className="form-wrapper">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LocationSection />

      
    </div>
  );
}
