import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { PageBanner } from '@/components/PageBanner';
import { CartView } from '@/components/CartView';

export const metadata: Metadata = {
  title: 'Your Cart — Surgical Solutions',
  description: 'Review the items in your cart before checking out.',
};

export default function CartPage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Basket"
        title="Your Cart."
        subtitle="Review your items, adjust quantities and proceed to a secure checkout."
        image="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=1600&q=80&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Catalogue', href: '/products' }, { label: 'Cart' }]}
      />
      <CartView />
    </SiteShell>
  );
}
