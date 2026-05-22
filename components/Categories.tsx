const CATS = [
  { href: '#packs', src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop', alt: 'Procedure Packs', meta: '01 · Bespoke & Standard', label: 'Procedure Packs' },
  { href: '#shop',  src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop', alt: 'Single Use Instruments', meta: '02 · Sterile, Single Patient', label: 'Single Use Instruments' },
  { href: '#shop',  src: 'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=900&q=80&auto=format&fit=crop', alt: 'Theatre Consumables', meta: '03 · Online Shop', label: 'Theatre Consumables' },
];

export function Categories() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Our Catalogue</p>
            <h2 className="display">Built for Your Theatre.</h2>
          </div>
          <a href="#shop" className="btn btn-ghost">See All Products</a>
        </div>

        <div className="cats">
          {CATS.map((c) => (
            <a key={c.label} className="cat" href={c.href}>
              <img className="photo" alt={c.alt} src={c.src} />
              <span className="meta">{c.meta}</span>
              <span className="label">
                {c.label}
                <span className="arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
