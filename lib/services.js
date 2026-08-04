export const services = [
  {
    slug: "eyebrow-tattoo",
    title: "Eyebrow Tattoo",
    shortDesc: "Semi-permanent brows tailored to your face shape.",
    description:
      "Our eyebrow tattoo service delivers natural, semi-permanent brows that enhance your facial features. Using precision microblading techniques, we shape and fill brows to create a look that is uniquely yours.",
    price: "From $250",
    duration: "2 hours",
  },
  {
    slug: "lip-tattoo",
    title: "Lip Tattoo",
    shortDesc: "Enhance lip color and definition with lasting results.",
    description:
      "Lip tattooing adds natural pigment to your lips, enhancing color and definition. Perfect for creating a fuller look or restoring lost lip color.",
    price: "From $200",
    duration: "1.5 hours",
  },
  {
    slug: "facial",
    title: "Facial",
    shortDesc: "Deep cleansing and rejuvenation for radiant skin.",
    description:
      "Our facials are tailored to your skin type. Each session includes deep cleansing, exfoliation, extraction, and hydration to leave your skin glowing and refreshed.",
    price: "From $80",
    duration: "1 hour",
  },
  {
    slug: "laser",
    title: "Laser",
    shortDesc: "Advanced laser treatments for hair removal and skin renewal.",
    description:
      "We offer FDA-approved laser treatments for permanent hair reduction and skin rejuvenation. Safe, effective, and customized to your skin type.",
    price: "From $120",
    duration: "30-60 min",
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    shortDesc: "Safe and effective tattoo removal with advanced laser.",
    description:
      "Our laser tattoo removal breaks down ink particles safely and effectively. Multiple sessions may be required depending on size, color, and age of the tattoo.",
    price: "From $150",
    duration: "30 min",
  },
  {
    slug: "foot-spa",
    title: "Foot Spa",
    shortDesc: "Relaxing foot treatments to soothe and rejuvenate.",
    description:
      "Unwind with a luxurious foot spa experience. Includes soak, exfoliation, massage, and moisturizing treatment to revitalize tired feet.",
    price: "From $60",
    duration: "45 min",
  },
  {
    slug: "eyelash-extension",
    title: "Eyelash Extension",
    shortDesc: "Volumizing lashes for a dramatic or natural look.",
    description:
      "Our lash extensions add length, volume, and drama to your natural lashes. Choose from classic, hybrid, or volume styles for your perfect look.",
    price: "From $100",
    duration: "1.5 hours",
  },
  {
    slug: "massage",
    title: "Massage",
    shortDesc: "Therapeutic massage to relieve tension and stress.",
    description:
      "Our massage services range from deep tissue to relaxation. Each session is tailored to target your specific areas of tension and promote overall wellness.",
    price: "From $90",
    duration: "1 hour",
  },
  {
    slug: "hair-removal",
    title: "Hair Removal",
    shortDesc: "Professional waxing and laser hair removal services.",
    description:
      "We offer professional waxing and laser hair removal for all body areas. Long-lasting results with minimal discomfort.",
    price: "From $30",
    duration: "15-45 min",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
