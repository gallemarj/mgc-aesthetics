"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Transparent nav */}
      <nav className="nav-transparent">
        <div className="nav-transparent__inner container">
          {isMobile && <Link href="/" className="nav-transparent__logo">MGC Aesthetics</Link>}
          <div className="nav-transparent__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-transparent__link"
                style={{ fontWeight: 700 }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-transparent__actions">
            <Link href="/booking" className="btn btn--primary nav-transparent__cta">Book Now</Link>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* White nav */}
      <nav className={`nav-white ${scrolled ? "nav-white--show" : ""}`}>
        <div className="nav-white__inner container">
          <Link href="/" className="nav-white__logo">MGC Aesthetics</Link>
          <div className="nav-white__links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-white__link"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-white__actions">
            <Link href="/booking" className="btn btn--primary nav-white__cta">Book Now</Link>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="btn btn--primary mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>

      
    </>
  );
}