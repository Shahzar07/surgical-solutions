'use client';

import { ART, fmtGBP, type Product } from '@/lib/products';
import { useCart } from '@/lib/cart';

function badgeClass(badge: Product['badge']): string {
  if (badge === 'IN STOCK') return 'is-stock';
  if (badge === 'NEW') return 'is-new';
  return '';
}

export function ProductGrid({ products }: { products: Product[] }) {
  const { add } = useCart();

  return (
    <div className="prod-grid">
      {products.map((p) => (
        <article key={p.id} className="prod">
          <div className="prod-media">
            {p.badge && <span className={`prod-badge ${badgeClass(p.badge)}`}>{p.badge}</span>}
            <div dangerouslySetInnerHTML={{ __html: ART[p.art] || '' }} />
            <button className="prod-quick" onClick={() => add(p.id)}>+ Quick Add</button>
          </div>
          <div className="prod-body">
            <span className="prod-cat">{p.specialty} · {p.sku}</span>
            <span className="prod-name">{p.name}</span>
            <p className="prod-blurb">{p.blurb}</p>
            <div className="prod-foot">
              <span className="prod-price">{fmtGBP(p.price)}</span>
              <span className="prod-unit">{p.unit}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
