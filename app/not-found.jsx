"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__desc">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to Home
        </Link>
      </div>

      <style jsx>{`
        .not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
          text-align: center;
        }

        .not-found__code {
          font-size: 80px;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--gray-200);
          line-height: 1;
          margin-bottom: 16px;
        }

        .not-found__title {
          margin-bottom: 12px;
        }

        .not-found__desc {
          color: var(--gray-500);
        }
      `}</style>
    </div>
  );
}
