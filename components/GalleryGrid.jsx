export default function GalleryGrid() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="grid">
      {items.map((i) => (
        <div key={i} className="grid__item">
          <div className="grid__placeholder">
            <span>Gallery {i}</span>
          </div>
        </div>
      ))}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
        }

        .grid__item {
          aspect-ratio: 1;
          overflow: hidden;
        }

        .grid__item:first-child {
          grid-column: span 2;
          grid-row: span 2;
        }

        .grid__placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-100);
          color: var(--gray-400);
          font-size: 14px;
          transition: opacity 0.3s;
        }

        .grid__placeholder:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid__item:first-child {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .grid__item:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
