'use client';

import { useState } from 'react';
import { ART, PRODUCTS, fmtGBP, type Product } from '@/lib/products';
import { useCart } from '@/lib/cart';

const FILTERS = ['All', 'Singles', 'Packs', 'Consumables'] as const;
type Filter = (typeof FILTERS)[number];

function badgeClass(badge: Product['badge']): string {
  if (badge === 'IN STOCK') return 'is-stock';
  if (badge === 'NEW') return 'is-new';
  return '';
}

export function Products() {
  const [filter, setFilter] = useState<Filter>('All');
  const { add } = useCart();

  const visible = PRODUCTS.filter((p) => filter === 'All' || p.cat === filter);

  return (
    <section className="section" id="shop">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Best Sellers</p>
            <h2 className="display">Ready to Ship.</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-chip${filter === f ? ' is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="prod-grid">
          {visible.map((p) => (
            <article key={p.id} className="prod">
              <div className="prod-media">
                {p.badge && <span className={`prod-badge ${badgeClass(p.badge)}`}>{p.badge}</span>}
                <div dangerouslySetInnerHTML={{ __html: ART[p.art] || '' }} />
                <button className="prod-quick" onClick={() => add(p.id)}>+ Quick Add</button>
              </div>
              <div className="prod-body">
                <span className="prod-cat">{p.cat} · {p.sku}</span>
                <span className="prod-name">{p.name}</span>
                <div className="prod-foot">
                  <span className="prod-price">{fmtGBP(p.price)}</span>
                  <span className="prod-unit">{p.unit}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#shop" className="btn btn-ghost">View Full Catalogue (240+ products)</a>
        </div>
      </div>
    </section>
  );
}
