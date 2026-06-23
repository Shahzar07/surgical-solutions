'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { fmtGBP } from '@/lib/catalog';

function orderRef() {
  return 'SS-' + Math.random().toString(36).slice(2, 7).toUpperCase();
}

export function CheckoutView() {
  const { entries, subtotal, shipping, total, count, clear } = useCart();
  const [placed, setPlaced] = useState<string | null>(null);

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    const ref = orderRef();
    setPlaced(ref);
    clear();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (placed) {
    return (
      <div className="checkout-done">
        <div className="enq-success-icon">✓</div>
        <h1 className="display" style={{ fontSize: 'clamp(28px,4vw,46px)' }}>Order received</h1>
        <p className="lede">
          Thank you. Your order reference is <strong>{placed}</strong>. We&apos;ve emailed a
          confirmation and our team will arrange dispatch — same-day on orders placed before 14:00.
        </p>
        <p className="checkout-note">
          This demo checkout records your order but does not take payment. To go fully live, connect
          a payment provider (Stripe / trade-account invoicing).
        </p>
        <Link href="/shop" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h1 className="display" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Nothing to check out</h1>
        <p className="lede">Your cart is empty.</p>
        <Link href="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form" onSubmit={placeOrder}>
        <div className="page-head" style={{ marginBottom: 20 }}>
          <p className="eyebrow">Checkout</p>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>Delivery details</h1>
        </div>

        <fieldset>
          <legend>Contact</legend>
          <div className="enq-row">
            <label><span>Full name *</span><input required name="name" /></label>
            <label><span>Email *</span><input required type="email" name="email" /></label>
          </div>
          <div className="enq-row">
            <label><span>Phone *</span><input required name="phone" /></label>
            <label><span>Organisation</span><input name="org" /></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Delivery address</legend>
          <label><span>Address line 1 *</span><input required name="a1" /></label>
          <label><span>Address line 2</span><input name="a2" /></label>
          <div className="enq-row">
            <label><span>Town / City *</span><input required name="city" /></label>
            <label><span>Postcode *</span><input required name="postcode" /></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Payment</legend>
          <p className="checkout-note">
            This build uses a demo checkout (no card is charged). Trade customers can also choose to
            be invoiced against an approved account.
          </p>
          <label className="checkout-radio">
            <input type="radio" name="pay" defaultChecked /> Pay on account / request invoice
          </label>
          <label className="checkout-radio">
            <input type="radio" name="pay" /> Card on dispatch (we&apos;ll call to take payment)
          </label>
        </fieldset>

        <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
          Place Order · {fmtGBP(total)}
        </button>
      </form>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <div className="checkout-items">
          {entries.map(({ line, qty }) => (
            <div key={line.id} className="checkout-item">
              <span className="checkout-item-qty">{qty}×</span>
              <span className="checkout-item-name">
                {line.name}
                {line.variant ? '' : ''}
              </span>
              <span className="checkout-item-price">{fmtGBP(line.price * qty)}</span>
            </div>
          ))}
        </div>
        <div className="sum-row"><span>Subtotal</span><span>{fmtGBP(subtotal)}</span></div>
        <div className="sum-row"><span>P&amp;P</span><span>{shipping === 0 ? 'FREE' : fmtGBP(shipping)}</span></div>
        <div className="sum-row grand"><span>Total</span><span>{fmtGBP(total)}</span></div>
        <Link href="/cart" className="btn-link" style={{ marginTop: 14, display: 'inline-block' }}>
          ← Edit cart
        </Link>
      </aside>
    </div>
  );
}
