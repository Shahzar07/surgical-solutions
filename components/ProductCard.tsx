'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { priceLabel, type Consumable } from '@/lib/catalog';

export function ProductCard({ p }: { p: Consumable }) {
  const { add } = useCart();
  const isSimple = p.type === 'simple';
  const buyable = isSimple && p.price != null && p.inStock;
  const enquire = isSimple && p.price == null;
  const href = `/product/${p.slug}`;

  function quickAdd(e: React.MouseEvent) {
    e.preventDefault();
    if (!buyable) return;
    add({
      id: p.slug,
      slug: p.slug,
      name: p.name,
      image: p.image,
      price: p.price!,
      unit: p.unit,
      variant: null,
    });
  }

  return (
    <article className="prod">
      <Link href={href} className="prod-media prod-media--photo" aria-label={p.name}>
        {!p.inStock && <span className="prod-badge is-oos">Out of stock</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" />
        {buyable ? (
          <button className="prod-quick" onClick={quickAdd}>+ Quick Add</button>
        ) : (
          <span className="prod-quick prod-quick--ghost">
            {enquire ? 'Enquire →' : 'Choose options →'}
          </span>
        )}
      </Link>
      <Link href={href} className="prod-body">
        <span className="prod-cat">Consumables{p.type === 'variable' ? ` · ${p.attr}` : ''}</span>
        <span className="prod-name">{p.name}</span>
        <div className="prod-foot">
          <span className="prod-price">{priceLabel(p)}</span>
          <span className="prod-unit">{p.unit}</span>
        </div>
      </Link>
    </article>
  );
}
