export const reels = Array.from(
  { length: 17 },
  (_, i) => `/videos/reels-${String(i + 1).padStart(2, "0")}.mp4`
);
