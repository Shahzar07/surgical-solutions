import Link from 'next/link';
import { CONSUMABLES } from '@/lib/catalog';
import { ProductCard } from '@/components/ProductCard';

// A curated set of best-sellers shown on the homepage.
const FEATURED = [
  'biogel-surgical-gloves-sterile-latex-powder-free',
  'stiefel-biopsy-punch-box-of-10',
  'swann-morton-sterile-disposable-scalpel-no-15-blade-with-polystyrene-handle-x-10',
  'sterile-dressing-packs-box-of-20',
  'clinell-antibacterial-hand-wipes',
  'diamond-cardiology-stethoscope',
  'eclipse-sterile-theatre-gowns-x28',
  '10-x-10-non-woven-sterile-gauze-swabs-single-pack-of-10',
];

export function Products() {
  const picks = FEATURED.map((slug) => CONSUMABLES.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <section className="section" id="shop">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2 className="display">Ready to Ship.</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">Shop All Consumables</Link>
        </div>

        <div className="prod-grid">
          {picks.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/shop" className="btn btn-ghost">View Full Catalogue ({CONSUMABLES.length} products)</Link>
        </div>
      </div>
    </section>
  );
}
