"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

export default function ClientsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">Our clients</p>
          <h1>Clients</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {galleryImages.map((url, i) => (
              <div key={i} className={`grid__item ${i % 5 === 0 ? "grid__item--featured" : ""}`}>
                <div className="grid__image">
                  <Image src={url} alt="Client photo" fill sizes="33vw" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
