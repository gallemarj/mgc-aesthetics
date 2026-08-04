export default function SectionTitle({ subtitle, title, align = "center" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
      <h2 className="section-title__title">{title}</h2>

      
    </div>
  );
}
