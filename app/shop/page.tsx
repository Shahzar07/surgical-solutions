import type { Metadata } from 'next';
import { CONSUMABLES } from '@/lib/catalog';
import { ShopClient } from '@/components/ShopClient';

export const metadata: Metadata = {
  title: 'Shop — Theatre Consumables | Surgical Solutions',
  description:
    'Buy single-use surgical consumables online — gloves, masks, gowns, sterile kits, dressings and more. Same-day dispatch, free UK P&P over £100.',
};

export default function ShopPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Online Shop</p>
          <h1 className="display">Theatre Consumables.</h1>
          <p className="lede">
            Single-use instruments, gloves, gowns, dressings and PPE — in stock and ready to ship
            from our UK warehouse. Free P&amp;P on orders over £100.
          </p>
        </div>
        <ShopClient products={CONSUMABLES} />
      </div>
    </section>
  );
}
