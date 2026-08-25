"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

const PER_PAGE = 24;

const clientAltTexts = [
  "MGC Aesthetics client result in Paniqui, Tarlac",
  "Before and after beauty treatment at MGC Aesthetics",
  "MGC Aesthetics client – beauty and wellness in Paniqui Tarlac",
  "Client transformation at MGC Aesthetics in Tarlac",
  "MGC Aesthetics client photos in Paniqui, Tarlac",
];
const clientAlt = (i) => clientAltTexts[i % clientAltTexts.length];

export default function ClientsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(galleryImages.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = galleryImages.slice(start, start + PER_PAGE);

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
            {visible.map((url, i) => (
              <div key={url} className="grid__item">
                <div className="grid__image">
                  <Image src={url} alt={clientAlt(i)} fill sizes="33vw" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className="clients-pagination">
            <div className="clients-pagination__buttons">
              <button
                className="btn btn--outline"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                className="btn btn--outline"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
            <p className="clients-pagination__info">
              Page {page} of {totalPages}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
