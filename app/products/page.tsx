import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { PageBanner } from '@/components/PageBanner';
import { Products } from '@/components/Products';

export const metadata: Metadata = {
  title: 'Catalogue — Surgical Solutions',
  description:
    'Browse single-use surgical instruments, sterile procedure packs and theatre consumables — ready to ship from our UK warehouse.',
};

export default function CataloguePage() {
  return (
    <SiteShell>
      <PageBanner
        eyebrow="Our Catalogue"
        title="Every Product, Ready to Ship."
        subtitle="Single-use instruments, sterile procedure packs and theatre consumables — all dispatched same-day from our UK warehouse."
        image="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1600&q=80&auto=format&fit=crop"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Catalogue' }]}
      />
      <Products eyebrow="Full Catalogue" heading="Browse the Range." showCatalogueLink={false} />
    </SiteShell>
  );
}
