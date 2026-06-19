import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { PageBanner } from '@/components/PageBanner';
import { CheckoutView } from '@/components/CheckoutView';

export const metadata: Metadata = {
  title: 'Checkout — Surgical Solutions',
  description: 'Securely complete your order.',
};

export default function CheckoutPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Secure Checkout"
        title="Checkout."
        subtitle="Enter your delivery and payment details — orders before 14:00 dispatch same day."
        image="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1600&q=80&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }, { label: 'Checkout' }]}
      />
      <CheckoutView />
    </SiteShell>
  );
}
