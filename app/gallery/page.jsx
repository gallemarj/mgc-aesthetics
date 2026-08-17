"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

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
                  <div className="grid__image">
                    <Image src={url} alt="Gallery image" fill sizes="33vw" loading="lazy" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}