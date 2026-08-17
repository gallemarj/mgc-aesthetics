"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";

const PER_PAGE = 24;

export default function ClientsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(galleryImages.length / PER_PAGE);
  const visible = galleryImages.slice(0, page * PER_PAGE);

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
            {visible.map((url) => (
              <div key={url} className="grid__item">
                <div className="grid__image">
                  <Image src={url} alt="Client photo" fill sizes="33vw" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className="clients-pagination">
            <p className="clients-pagination__info">
              Page {page} of {totalPages}
            </p>
            {page < totalPages ? (
              <button
                className="btn btn--outline"
                onClick={() => setPage((p) => p + 1)}
              >
                Show more
              </button>
            ) : (
              <p className="clients-pagination__done">
                All {galleryImages.length} clients shown
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
