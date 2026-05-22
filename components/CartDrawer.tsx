'use client';

import { ART, fmtGBP } from '@/lib/products';
import { useCart } from '@/lib/cart';

function thumbArt(art: string): string {
  return (ART[art] || '').replace('class="instrument"', '');
}

export function CartDrawer() {
  const { isOpen, close, rows, count, subtotal, shipping, total, inc, dec } = useCart();

  return (
    <>
      <div className={`drawer-mask${isOpen ? ' open' : ''}`} onClick={close} />
      <aside className={`drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-hd">
          <h3>Your Cart</h3>
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
            rows.map(({ product: p, qty, line }) => (
              <div key={p.id} className="drawer-row">
                <div className="thumb" dangerouslySetInnerHTML={{ __html: thumbArt(p.art) }} />
                <div>
                  <div className="n">{p.name}</div>
                  <div className="m">
                    <span>{p.cat} · {p.unit}</span>
                    <span className="qty">
                      <button onClick={() => dec(p.id)} aria-label="Decrease">−</button>
                      <span>{qty}</span>
                      <button onClick={() => inc(p.id)} aria-label="Increase">+</button>
                    </span>
                  </div>
                </div>
                <div className="price">{fmtGBP(line)}</div>
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
            <button className="btn btn-primary">Proceed to Checkout</button>
            <div className="note">Trade accounts auto-apply pricing</div>
          </div>
        )}
      </aside>
    </>
  );
}
