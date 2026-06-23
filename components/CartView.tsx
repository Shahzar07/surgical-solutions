'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { fmtGBP } from '@/lib/catalog';

export function CartView() {
  const { entries, subtotal, shipping, total, count, inc, dec, remove } = useCart();

  if (count === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h1 className="display" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Your cart is empty</h1>
        <p className="lede">Browse the catalogue and add the consumables your theatre needs.</p>
        <Link href="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-lines">
        <div className="page-head" style={{ marginBottom: 24 }}>
          <p className="eyebrow">Your Cart</p>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            {count} {count === 1 ? 'item' : 'items'}
          </h1>
        </div>

        {entries.map(({ line, qty }) => (
          <div key={line.id} className="cart-line">
            <Link href={`/product/${line.slug}`} className="cart-line-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={line.image} alt={line.name} />
            </Link>
            <div className="cart-line-info">
              <Link href={`/product/${line.slug}`} className="cart-line-name">{line.name}</Link>
              {line.variant && <span className="cart-line-variant">{line.variant}</span>}
              <span className="cart-line-unit">{fmtGBP(line.price)} / {line.unit}</span>
              <button className="cart-line-remove" onClick={() => remove(line.id)}>Remove</button>
            </div>
            <div className="cart-line-right">
              <span className="qty-stepper">
                <button onClick={() => dec(line.id)} aria-label="Decrease">−</button>
                <span>{qty}</span>
                <button onClick={() => inc(line.id)} aria-label="Increase">+</button>
              </span>
              <span className="cart-line-total">{fmtGBP(line.price * qty)}</span>
            </div>
          </div>
        ))}
        <Link href="/shop" className="btn-link" style={{ marginTop: 8, display: 'inline-block' }}>
          ← Continue shopping
        </Link>
      </div>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <div className="sum-row"><span>Subtotal</span><span>{fmtGBP(subtotal)}</span></div>
        <div className="sum-row">
          <span>P&amp;P {subtotal < 100 ? '(free over £100)' : ''}</span>
          <span>{shipping === 0 ? 'FREE' : fmtGBP(shipping)}</span>
        </div>
        {subtotal > 0 && subtotal < 100 && (
          <p className="sum-hint">Add {fmtGBP(100 - subtotal)} more for free UK delivery.</p>
        )}
        <div className="sum-row grand"><span>Total</span><span>{fmtGBP(total)}</span></div>
        <p className="sum-vat">Prices exclude VAT where applicable.</p>
        <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Proceed to Checkout
        </Link>
        <div className="sum-trust">
          <span>🔒 Secure checkout</span><span>·</span><span>Trade accounts welcome</span>
        </div>
      </aside>
    </div>
  );
}
