'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import type { Consumable } from '@/lib/catalog';

const GROUPS: { label: string; match: (n: string) => boolean }[] = [
  { label: 'All', match: () => true },
  { label: 'Gloves', match: (n) => n.includes('glove') },
  { label: 'Masks', match: (n) => /mask|respirator|ffp2|n95|face shield/.test(n) },
  {
    label: 'Gowns & PPE',
    match: (n) => /gown|apron|coverall|scrub|overshoe|sleeve|safety glasses/.test(n),
  },
  {
    label: 'Instruments & Kits',
    match: (n) =>
      /punch|curette|scalpel|blade|suture|vessel|medi-loop|knife|sponge|scrub brush|surgical set|dressing pack|syringe|electrode|hyfrecator|pencil/.test(
        n,
      ),
  },
  { label: 'Diagnostics', match: (n) => /stethoscope|otoscope|hammer|dermatoscope|diagnostic/.test(n) },
  {
    label: 'Hygiene & Wound Care',
    match: (n) => /sanitiser|disinfectant|wipe|gauze|swab|couch roll|tape|drape|funnel/.test(n),
  },
];

export function ShopClient({ products }: { products: Consumable[] }) {
  const [group, setGroup] = useState('All');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const g = GROUPS.find((x) => x.label === group) ?? GROUPS[0];
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const n = p.name.toLowerCase();
      return g.match(n) && (q === '' || n.includes(q));
    });
  }, [products, group, query]);

  return (
    <>
      <div className="shop-toolbar">
        <div className="filter-chips">
          {GROUPS.map((g) => (
            <button
              key={g.label}
              className={`filter-chip${group === g.label ? ' is-active' : ''}`}
              onClick={() => setGroup(g.label)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="shop-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
          />
        </div>
      </div>

      <p className="shop-count">{visible.length} products</p>

      {visible.length === 0 ? (
        <p className="shop-empty">No products match your search.</p>
      ) : (
        <div className="prod-grid">
          {visible.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      )}
    </>
  );
}
