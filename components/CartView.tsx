'use client';

import Link from 'next/link';
import { productImage, fmtGBP } from '@/lib/products';
import { useCart } from '@/lib/cart';

export function CartView() {
  const { rows, count, subtotal, shipping, total, inc, dec, remove } = useCart();

  if (count === 0) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="cart-empty">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
            <h2 className="display" style={{ fontSize: 32 }}>Your cart is empty.</h2>
            <p style={{ color: 'var(--c-muted)', margin: '12px 0 28px' }}>
              Browse the catalogue to add single-use instruments, packs and consumables.
            </p>
            <Link href="/products" className="btn btn-primary">Browse Catalogue</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="wrap">
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-row cart-row-head">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {rows.map(({ product: p, qty, line }) => (
              <div key={p.id} className="cart-row">
                <div className="cart-prod">
                  <Link href={`/products/${p.id}`} className="cart-thumb">
                    <img src={productImage(p, 200)} alt={p.name} />
                  </Link>
                  <div>
                    <Link href={`/products/${p.id}`} className="cart-name">{p.name}</Link>
                    <div className="cart-meta">{p.cat} · {p.sku} · {fmtGBP(p.price)} / {p.unit}</div>
                    <button className="cart-remove" onClick={() => remove(p.id)}>Remove</button>
                  </div>
                </div>
                <div className="qty-stepper">
                  <button onClick={() => dec(p.id)} aria-label="Decrease">−</button>
                  <span>{qty}</span>
                  <button onClick={() => inc(p.id)} aria-label="Increase">+</button>
                </div>
                <div className="cart-line">{fmtGBP(line)}</div>
              </div>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="/products" className="btn-link">← Continue shopping</Link>
            </div>
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="totals"><span>Subtotal ({count} items)</span><span>{fmtGBP(subtotal)}</span></div>
            <div className="totals"><span>P&amp;P (free over £100)</span><span>{shipping === 0 ? 'FREE' : fmtGBP(shipping)}</span></div>
            <div className="totals grand"><span>Total</span><span>{fmtGBP(total)}</span></div>
            <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              Proceed to Checkout
            </Link>
            <p className="cart-note">Trade accounts auto-apply pricing at checkout.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
