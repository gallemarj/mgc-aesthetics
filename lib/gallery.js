export const galleryImages = Array.from(
  { length: 108 },
  (_, i) => `/pictures/gallery-${String(i + 1).padStart(2, "0")}.jpg`
);
