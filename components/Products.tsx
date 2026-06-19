'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';

const FILTERS = ['All', 'Procedure Packs', 'Singles', 'Reusable'] as const;
type Filter = (typeof FILTERS)[number];

export function Products() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = PRODUCTS.filter((p) => filter === 'All' || p.cat === filter);

  return (
    <section className="section" id="shop">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">The Catalogue</p>
            <h2 className="display">Ready to Ship.</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
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

        <ProductGrid products={visible} />

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/procedure-packs" className="btn btn-ghost">Browse the Full Range</Link>
        </div>
      </div>
    </section>
  );
}
