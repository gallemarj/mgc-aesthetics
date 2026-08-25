import Link from "next/link";
import Reveal from "@/components/Reveal";
import { featuredServices, serviceCategories } from "@/lib/services";

export const metadata = {
  title: "Services & Price List",
  description:
    "Explore MGC Aesthetics services and prices – head spa packages, facials, face treatments, body treatments, hair removal, laser removal, waxing and lash services in Paniqui, Tarlac.",
  alternates: {
    canonical: "/services",
  },
};

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__sub">Our services</p>
          <h1>Beauty & wellness services</h1>
        </div>
      </section>

      <section id="signature-packages" className="section svc-packages-section">
        <div className="container">
          <Reveal>
            <div className="services-head">
              <p className="section__subtitle">
                The first Japanese head spa in Paniqui, Tarlac
              </p>
              <h2 className="section__title">
                Head spa & relaxation packages
              </h2>
            </div>
          </Reveal>

          <div className="svc-packages">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="svc-package">
                  <div className="svc-package__main">
                    <span className="svc-package__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="svc-package__info">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="svc-package__meta">
                    <span className="svc-package__price">{service.price}</span>
                    <span className="svc-package__duration">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-menu-section">
        <div className="container">
          <Reveal>
            <div className="services-head">
              <p className="section__subtitle">Full menu</p>
              <h2 className="section__title">Services & price list</h2>
            </div>
          </Reveal>

          <div className="menu-grid">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.04}>
                <div className="menu-section" id={slugify(cat.name)}>
                  <h3 className="menu-section__title">
                    {cat.name}
                    {cat.note ? (
                      <span className="menu-section__note">({cat.note})</span>
                    ) : null}
                  </h3>
                  <ul className="menu-list">
                    {cat.items.map((item) => (
                      <li className="menu-item" key={item.name}>
                        <span className="menu-item__name">{item.name}</span>
                        <span className="menu-item__dots" />
                        <span className="menu-item__price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/booking" className="btn btn--primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
