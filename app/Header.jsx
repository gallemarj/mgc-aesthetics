"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""} ${!isHome || scrolled ? "header--solid" : ""}`}
    >
      <div className="header__inner container">
        <Link href="/" className="header__logo">
          MGC<span className="header__logo-accent">A</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__link ${pathname === link.href ? "header__link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="btn btn--primary header__cta"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`header__bar ${menuOpen ? "header__bar--open" : ""}`} />
          <span className={`header__bar ${menuOpen ? "header__bar--open" : ""}`} />
          <span className={`header__bar ${menuOpen ? "header__bar--open" : ""}`} />
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 32px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.35s ease;
        }

        .header--solid {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .header--scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header__logo {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--black);
          line-height: 1;
        }

        .header__logo-accent {
          color: var(--gray-400);
          margin-left: 1px;
        }

        .header__nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .header__link {
          font-size: 14px;
          font-weight: 450;
          color: var(--gray-600);
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .header__link:hover {
          color: var(--black);
        }

        .header__link--active {
          color: var(--black);
        }

        .header__cta {
          padding: 9px 22px;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        .header__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .header__bar {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--black);
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .header__bar--open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .header__bar--open:nth-child(2) {
          opacity: 0;
        }

        .header__bar--open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .header {
            padding: 14px 0;
          }

          .header--scrolled {
            padding: 10px 0;
          }

          .header__nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(24px);
            padding: 80px 32px 32px;
            border-left: 1px solid var(--gray-200);
            transition: right 0.35s ease;
            z-index: -1;
          }

          .header__nav--open {
            right: 0;
          }

          .header__link {
            display: block;
            width: 100%;
            padding: 14px 0;
            font-size: 15px;
            border-bottom: 1px solid var(--gray-100);
            color: var(--black);
          }

          .header__cta {
            margin-top: 20px;
            width: 100%;
            text-align: center;
            padding: 12px;
          }

          .header__hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
