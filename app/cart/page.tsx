import type { Metadata } from 'next';
import { CartView } from '@/components/CartView';

export const metadata: Metadata = {
  title: 'Your Cart | Surgical Solutions',
  description: 'Review the items in your cart and proceed to checkout.',
};

export default function CartPage() {
  return (
    <section className="section">
      <div className="wrap">
        <CartView />
      </div>
    </section>
  );
}
