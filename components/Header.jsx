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

      <style jsx>{`
        .nav-transparent {
          position: fixed;
          top: 32px;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 32px 0;
        }

        .nav-transparent__inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-transparent__logo {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--black);
        }

        .nav-transparent__links {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-transparent__link {
          color: var(--gray-700);
          transition: color 0.2s;
          text-decoration: none;
          font-size: 14px;
        }

        .nav-transparent__link:hover {
          color: var(--black);
        }

        .nav-transparent__cta {
          padding: 5px 12px;
          font-size: 11px;
        }

        .nav-transparent__actions {
          display: none;
          align-items: center;
          gap: 10px;
        }

        .nav-white {
          position: fixed;
          top: 32px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .nav-white--show {
          transform: translateY(0);
        }

        .nav-white__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-white__logo {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--black);
        }

        .nav-white__links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-white__link {
          font-size: 14px;
          font-weight: 400;
          color: var(--gray-600);
          transition: color 0.2s;
          letter-spacing: 0.01em;
          text-decoration: none;
        }

        .nav-white__link:hover {
          color: var(--black);
        }

        .nav-white__cta {
          padding: 9px 22px;
          font-size: 12px;
        }

        .nav-white__actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .nav-bar {
          display: block;
          width: 22px;
          height: 2px;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .nav-transparent .nav-bar {
          background: var(--black);
        }

        .nav-white .nav-bar {
          background: var(--black);
        }

        .nav-bar--open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .nav-bar--open:nth-child(2) {
          opacity: 0;
        }
        .nav-bar--open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-menu--open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-menu__link {
          font-size: 24px;
          font-weight: 500;
          color: var(--black);
          transition: opacity 0.2s;
        }

        .mobile-menu__link:hover {
          opacity: 0.6;
        }

        .mobile-menu__cta {
          margin-top: 16px;
          padding: 14px 48px;
        }

        @media (max-width: 768px) {
          .nav-transparent {
            padding: 18px 0;
          }

          .nav-transparent__inner {
            justify-content: space-between;
          }

          .nav-transparent__links,
          .nav-white__links {
            display: none;
          }

          .nav-transparent__actions {
            display: flex;
          }

          .nav-transparent__cta,
          .nav-white__cta {
            padding: 6px 12px;
            font-size: 11px;
          }

          .nav-hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}