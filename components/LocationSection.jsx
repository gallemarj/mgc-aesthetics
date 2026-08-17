import Image from "next/image";

const COORDS = "15.6650741,120.5799152";
const EMBED_URL = `https://www.google.com/maps?q=${COORDS}&z=17&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COORDS}`;

export default function LocationSection({ id }) {
  return (
    <section id={id} className="section find-section">
      <div className="container">
        <p className="section__subtitle">Location</p>
        <h2 className="section__title">Find us</h2>
        <div className="find-grid">
          <div className="find-photo">
            <Image
              src="/location.png"
              alt="MGC Aesthetics building"
              fill
              sizes="50vw"
              loading="lazy"
            />
          </div>
          <div className="find-map">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="MGC Aesthetics location map"
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
