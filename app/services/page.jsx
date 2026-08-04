"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/lib/services";

const images = {
  "eyebrow-tattoo": "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
  "lip-tattoo": "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=800&q=80",
  facial: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  laser: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  "tattoo-removal": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
  "foot-spa": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "eyelash-extension": "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
  massage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "hair-removal": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
};

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">All services</p>
          <h1>Beauty & wellness services</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div className="service-card">
                  <div
                    className="service-card__img"
                    style={{ backgroundImage: `url(${images[service.slug]})` }}
                  />
                  <div className="service-card__body">
                    <h3>{service.title}</h3>
                    <p>{service.shortDesc}</p>
                    <div className="service-card__meta">
                      <span>{service.price}</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/booking" className="btn btn--primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          background: var(--off-white);
          padding: 160px 0 80px;
          text-align: center;
        }

        .page-hero__sub {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 12px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        .service-card__img {
          height: 240px;
          background-size: cover;
          background-position: center;
        }

        .service-card__body {
          padding: 24px;
        }

        .service-card__body h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .service-card__body p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--gray-600);
          margin-bottom: 16px;
        }

        .service-card__meta {
          display: flex;
          gap: 16px;
          font-size: 13px;
          color: var(--gray-500);
        }

        .service-card__meta span {
          background: var(--off-white);
          padding: 4px 10px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .page-hero {
            padding: 120px 0 60px;
          }
        }
      `}</style>
    </div>
  );
}