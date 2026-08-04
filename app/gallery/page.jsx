"use client";

import Reveal from "@/components/Reveal";

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
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
];

export default function GalleryPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">Our work</p>
          <h1>Gallery</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {galleryImages.map((url, i) => (
              <Reveal key={i} variant="scaleUp" delay={(i % 4) * 0.05}>
                <div className={`grid__item ${i % 5 === 0 ? "grid__item--featured" : ""}`}>
                  <div className="grid__image" style={{ backgroundImage: `url(${url})` }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}