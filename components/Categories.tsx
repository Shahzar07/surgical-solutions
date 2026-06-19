import Link from 'next/link';

const CATS = [
  { href: '/procedure-packs', src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop', alt: 'Procedure Packs', meta: '01 · Bespoke & Standard', label: 'Procedure Packs' },
  { href: '/singles',  src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop', alt: 'Single Use Instruments', meta: '02 · Sterile · Boxes of 10', label: 'Single Instruments' },
  { href: '/reusable',  src: 'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=900&q=80&auto=format&fit=crop', alt: 'Reusable Instruments', meta: '03 · Stainless · Autoclavable', label: 'Reusable Instruments' },
];

export function Categories() {
  return (
    <section className="section" id="catalogue">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Our Catalogue</p>
            <h2 className="display">Built for Your Theatre.</h2>
          </div>
          <Link href="/procedure-packs" className="btn btn-ghost">See All Products</Link>
        </div>

        <div className="cats">
          {CATS.map((c) => (
            <Link key={c.label} className="cat" href={c.href}>
              <img className="photo" alt={c.alt} src={c.src} />
              <span className="meta">{c.meta}</span>
              <span className="label">
                {c.label}
                <span className="arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
