"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__heading">MGC Aesthetics</h4>
            <p className="footer__text">
              Premium beauty and wellness services tailored to you.
            </p>
            <div className="footer__social">
              <a
                href="https://web.facebook.com/gtbymgc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer__social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__list">
              <li><Link href="/services#signature-head-spa">Head Spa Packages</Link></li>
              <li><Link href="/services#facial-services">Facial Services</Link></li>
              <li><Link href="/services#face-treatments">Face Treatments</Link></li>
              <li><Link href="/services#body-treatments">Body Treatments</Link></li>
              <li><Link href="/services#hair-removal-treatments">Hair Removal</Link></li>
              <li><Link href="/services#laser-removal">Laser Removal</Link></li>
              <li><Link href="/services#wax-services">Wax Services</Link></li>
              <li><Link href="/services#lash-services">Lash Services</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#gallery">Clients</Link></li>
              <li><Link href="/#reels">Reels</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/#location">Location</Link></li>
              <li><Link href="/booking">Book Now</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li>A.V.Y Building, 2nd Floor</li>
              <li>Magallanes Street, Poblacion Sur</li>
              <li>Paniqui, Tarlac</li>
              <li>0963-297-1024</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} MGC Aesthetics. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
}
