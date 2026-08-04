"use client";

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

export default function ServiceCard({ service }) {
  const img = images[service.slug] || images.facial;

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${img})` }}
    >
      
    </div>
  );
}
