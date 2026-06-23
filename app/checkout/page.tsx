import type { Metadata } from 'next';
import { CheckoutView } from '@/components/CheckoutView';

export const metadata: Metadata = {
  title: 'Checkout | Surgical Solutions',
  description: 'Complete your order.',
};

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <CheckoutView />
      </div>
    </section>
  );
}
