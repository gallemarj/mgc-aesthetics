export default function SectionTitle({ subtitle, title, align = "center" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
      <h2 className="section-title__title">{title}</h2>

      <style jsx>{`
        .section-title {
          margin-bottom: 64px;
        }

        .section-title--center {
          text-align: center;
        }

        .section-title--left {
          text-align: left;
        }

        .section-title__sub {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 12px;
        }

        .section-title__title {
          max-width: 600px;
        }

        .section-title--center .section-title__title {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
