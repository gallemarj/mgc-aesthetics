import Reveal from "@/components/Reveal";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking, consultations, cancellations and treatments at MGC Aesthetics in Paniqui, Tarlac.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  { q: "How do I book an appointment?", a: "You can book directly through our booking page or by contacting us via phone or the messenger chat on this site." },
  { q: "Do you offer consultations?", a: "Yes, every appointment includes a free consultation so we can understand your needs and recommend the best treatment." },
  { q: "What is your cancellation policy?", a: "We ask for at least 24 hours notice for cancellations or rescheduling to avoid any fees." },
  { q: "Are your treatments safe?", a: "Absolutely. All treatments are performed by licensed professionals using FDA-approved equipment and premium products." },
  { q: "How long does a service take?", a: "It depends on the service. Most treatments range from 30 minutes to 2 hours, which we confirm when you book." },
  { q: "What should I do before my appointment?", a: "Arrive with clean skin (for facial treatments) and avoid caffeine for massage appointments. We'll guide you through the rest." },
  { q: "Do you offer gift cards?", a: "Yes! Gift cards are available for any amount and can be purchased in-store or by contacting us directly." },
  { q: "Is parking available?", a: "Yes, complimentary parking is available for all our clients during their appointment." },
];

export default function FaqPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">Need help?</p>
          <h1>Frequently asked questions</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}