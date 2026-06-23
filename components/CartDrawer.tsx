'use client';

import Link from 'next/link';
import { fmtGBP } from '@/lib/catalog';
import { useCart } from '@/lib/cart';

export function CartDrawer() {
  const { isOpen, close, entries, count, subtotal, shipping, total, inc, dec, remove } = useCart();

  return (
    <>
      <div className={`drawer-mask${isOpen ? ' open' : ''}`} onClick={close} />
      <aside className={`drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-hd">
          <h3>Your Cart {count > 0 && <span className="drawer-count">{count}</span>}</h3>
          <button className="iconbtn is-ghost" onClick={close} aria-label="Close cart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {count === 0 ? (
            <div className="drawer-empty">
              <div style={{ fontSize: 36, marginBottom: 14 }}>🛒</div>
              Your cart is empty.<br />
              <span style={{ opacity: 0.65, fontSize: 12 }}>
                Browse the catalogue to add products.
              </span>
            </div>
          ) : (
            entries.map(({ line, qty }) => (
              <div key={line.id} className="drawer-row">
                <Link href={`/product/${line.slug}`} onClick={close} className="thumb thumb-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={line.image} alt={line.name} />
                </Link>
                <div>
                  <div className="n">{line.name}</div>
                  <div className="m">
                    <span>{fmtGBP(line.price)} · {line.unit}</span>
                    <span className="qty">
                      <button onClick={() => dec(line.id)} aria-label="Decrease">−</button>
                      <span>{qty}</span>
                      <button onClick={() => inc(line.id)} aria-label="Increase">+</button>
                    </span>
                  </div>
                </div>
                <div className="price">
                  {fmtGBP(line.price * qty)}
                  <button className="drawer-remove" onClick={() => remove(line.id)} aria-label="Remove">×</button>
                </div>
              </div>
            ))
          )}
        </div>

        {count > 0 && (
          <div className="drawer-foot">
            <div className="totals">
              <span>Subtotal</span>
              <span>{fmtGBP(subtotal)}</span>
            </div>
            <div className="totals">
              <span>P&amp;P (free over £100)</span>
              <span>{shipping === 0 ? 'FREE' : fmtGBP(shipping)}</span>
            </div>
            <div className="totals grand">
              <span>Total</span>
              <span>{fmtGBP(total)}</span>
            </div>
            <Link href="/checkout" className="btn btn-primary" onClick={close} style={{ width: '100%', justifyContent: 'center' }}>
              Proceed to Checkout
            </Link>
            <Link href="/cart" className="btn btn-ghost" onClick={close} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              View Cart
            </Link>
            <div className="note">Trade accounts auto-apply pricing</div>
          </div>
        )}
      </aside>
    </>
  );
}
