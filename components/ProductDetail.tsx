'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart';
import { fmtGBP, type Consumable } from '@/lib/catalog';

export function ProductDetail({ p }: { p: Consumable }) {
  const { add } = useCart();
  const router = useRouter();
  const variants = p.variants ?? [];
  const [sel, setSel] = useState(0);
  const [qty, setQty] = useState(1);

  const isVariable = p.type === 'variable';
  const current = isVariable ? variants[sel] : null;
  const price = isVariable ? current?.price ?? null : p.price ?? null;
  const inStock = isVariable ? !!current?.inStock : p.inStock;
  const canBuy = price != null && inStock;

  function lineFor() {
    const id = isVariable ? `${p.slug}::${current!.option}` : p.slug;
    const name = isVariable ? `${p.name} — ${current!.option}` : p.name;
    return {
      id,
      slug: p.slug,
      name,
      image: p.image,
      price: price!,
      unit: p.unit,
      variant: isVariable ? current!.option : null,
    };
  }

  function addToCart() {
    if (!canBuy) return;
    add(lineFor(), qty);
  }

  function buyNow() {
    if (!canBuy) return;
    add(lineFor(), qty);
    router.push('/checkout');
  }

  return (
    <div className="pdp">
      <div className="pdp-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} />
      </div>

      <div className="pdp-info">
        <nav className="crumbs">
          <Link href="/">Home</Link> <span>/</span> <Link href="/shop">Shop</Link>{' '}
          <span>/</span> <span className="crumb-current">{p.name}</span>
        </nav>

        <p className="eyebrow">Consumables</p>
        <h1 className="pdp-title">{p.name}</h1>

        <div className="pdp-price">
          {price == null ? (
            <span className="pdp-enquire-label">Price on enquiry</span>
          ) : (
            <>
              {fmtGBP(price)} <span className="pdp-unit">/ {p.unit}</span>
            </>
          )}
        </div>

        <p className="pdp-desc">{p.description}</p>

        {isVariable && (
          <div className="opt-block">
            <span className="opt-label">{p.attr}</span>
            <div className="opt-grid">
              {variants.map((v, i) => (
                <button
                  key={v.option}
                  className={`opt-btn${i === sel ? ' is-active' : ''}${v.inStock ? '' : ' is-disabled'}`}
                  onClick={() => setSel(i)}
                  disabled={!v.inStock}
                >
                  {v.option}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="pdp-stock">
          <span className={`stock-dot${inStock ? '' : ' oos'}`} />
          {inStock ? 'In stock — same-day dispatch before 14:00' : 'Currently out of stock'}
        </div>

        {canBuy ? (
          <div className="pdp-buy">
            <div className="qty-stepper" aria-label="Quantity">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            <button className="btn btn-ghost" onClick={buyNow}>Buy Now</button>
          </div>
        ) : (
          <div className="pdp-buy">
            <Link className="btn btn-primary" href={`/contact?product=${encodeURIComponent(p.name)}`}>
              Enquire for Pricing
            </Link>
          </div>
        )}

        <ul className="pdp-meta">
          <li><span>Category</span><strong>Theatre Consumables</strong></li>
          <li><span>Pack</span><strong>{p.unit}</strong></li>
          <li><span>Dispatch</span><strong>Same-day before 14:00</strong></li>
          <li><span>P&amp;P</span><strong>Free over £100</strong></li>
        </ul>
      </div>
    </div>
  );
}
