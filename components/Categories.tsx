import Link from 'next/link';

const CATS = [
  {
    href: '/procedure-packs',
    src: '/products/0001-DermatologyPack-2-scaled.jpg',
    alt: 'Procedure Packs',
    meta: '01 · Bespoke & Standard',
    label: 'Procedure Packs',
  },
  {
    href: '/singles',
    src: '/products/17-EU-2001001-Forcep-Adson-Toothed-12cm-TC-1.jpg',
    alt: 'Single Use Instruments',
    meta: '02 · Precision Instruments',
    label: 'Single Instruments',
  },
  {
    href: '/shop',
    src: '/products/515Wx515H-406-6-Primary.jpg',
    alt: 'Theatre Consumables',
    meta: '03 · Online Shop',
    label: 'Theatre Consumables',
  },
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
          <Link href="/shop" className="btn btn-ghost">See All Products</Link>
        </div>

        <div className="cats">
          {CATS.map((c) => (
            <Link key={c.label} className="cat" href={c.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
