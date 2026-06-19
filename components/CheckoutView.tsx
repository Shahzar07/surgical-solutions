'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { productImage, fmtGBP } from '@/lib/products';
import { useCart } from '@/lib/cart';

export function CheckoutView() {
  const { rows, count, subtotal, shipping, total, clear } = useCart();
  const [placed, setPlaced] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = 'SS-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    setPlaced(ref);
    clear();
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (placed) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="checkout-done">
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <h2 className="display" style={{ fontSize: 36 }}>Order Confirmed.</h2>
            <p style={{ color: 'var(--c-muted)', margin: '12px 0 6px' }}>
              Thank you — your order reference is <strong>{placed}</strong>.
            </p>
            <p style={{ color: 'var(--c-muted)', marginBottom: 28 }}>
              A confirmation has been sent to your email. Orders placed before 14:00 dispatch same day.
            </p>
            <Link href="/products" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </section>
    );
  }

  if (count === 0) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="cart-empty">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
            <h2 className="display" style={{ fontSize: 32 }}>Nothing to check out.</h2>
            <p style={{ color: 'var(--c-muted)', margin: '12px 0 28px' }}>
              Your cart is empty — add some products first.
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
          <form className="checkout-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Contact</legend>
              <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" required placeholder="you@clinic.nhs.uk" /></div>
              <div className="field"><label htmlFor="phone">Phone</label><input id="phone" type="tel" required placeholder="01753 299 353" /></div>
            </fieldset>

            <fieldset>
              <legend>Delivery</legend>
              <div className="field-row">
                <div className="field"><label htmlFor="first">First name</label><input id="first" required /></div>
                <div className="field"><label htmlFor="last">Last name</label><input id="last" required /></div>
              </div>
              <div className="field"><label htmlFor="org">Organisation / Practice</label><input id="org" required /></div>
              <div className="field"><label htmlFor="addr">Address</label><input id="addr" required /></div>
              <div className="field-row">
                <div className="field"><label htmlFor="city">Town / City</label><input id="city" required /></div>
                <div className="field"><label htmlFor="post">Postcode</label><input id="post" required /></div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Payment</legend>
              <div className="field"><label htmlFor="card">Card number</label><input id="card" inputMode="numeric" required placeholder="4242 4242 4242 4242" /></div>
              <div className="field-row">
                <div className="field"><label htmlFor="exp">Expiry</label><input id="exp" required placeholder="MM/YY" /></div>
                <div className="field"><label htmlFor="cvc">CVC</label><input id="cvc" inputMode="numeric" required placeholder="123" /></div>
              </div>
              <p className="cart-note">Or pay on a trade account — we&apos;ll invoice on your usual terms.</p>
            </fieldset>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Place Order · {fmtGBP(total)}
            </button>
          </form>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="checkout-lines">
              {rows.map(({ product: p, qty, line }) => (
                <div key={p.id} className="checkout-line">
                  <span className="checkout-thumb"><img src={productImage(p, 120)} alt={p.name} /><span className="checkout-qty">{qty}</span></span>
                  <span className="checkout-line-name">{p.name}</span>
                  <span>{fmtGBP(line)}</span>
                </div>
              ))}
            </div>
            <div className="totals"><span>Subtotal</span><span>{fmtGBP(subtotal)}</span></div>
            <div className="totals"><span>P&amp;P</span><span>{shipping === 0 ? 'FREE' : fmtGBP(shipping)}</span></div>
            <div className="totals grand"><span>Total</span><span>{fmtGBP(total)}</span></div>
            <Link href="/cart" className="btn-link" style={{ display: 'inline-block', marginTop: 14 }}>← Back to cart</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
