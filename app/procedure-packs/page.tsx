import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductGrid } from '@/components/ProductGrid';
import { productsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Procedure Packs — Surgical Solutions',
  description:
    'Sterile procedure packs used in hospitals and clinics across the UK, providing a quality range of sterile components designed for all basic procedures. Bespoke packs built to your exact specification.',
};

export default function ProcedurePacksPage() {
  const products = productsByCategory('Procedure Packs');

  return (
    <>
      <PageHero
        eyebrow="Products · Procedure Packs"
        title="Procedure Packs."
        intro="Used in hospitals and clinics across the UK, our procedure packs provide clients with a quality range of sterile components designed for all basic procedures."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/procedure-packs', label: 'Procedure Packs' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="cat-intro">
            <div className="prose">
              <p>
                With a fully trained and experienced team, we can customise procedure packs to
                your exact specifications — working with you to create bespoke packs that match
                the full range of clinical procedures you may undertake. Every pack is assembled
                in a cleanroom environment after stringent quality control, and offered with
                full &lsquo;trace me&rsquo; functionality.
              </p>
              <h3>Why use a procedure pack?</h3>
              <ul className="feature-list">
                <li>Standardises session start-up and operative practice</li>
                <li>Reduces hidden costs such as multiple delivery charges and several invoices</li>
                <li>Creates efficiency by managing and stocking fewer items</li>
                <li>Eliminates the need to manage hundreds of individual components</li>
              </ul>
            </div>

            <div className="panel-img">
              <img
                alt="Sterile procedure pack components"
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1000&q=80&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead">
            <div>
              <p className="eyebrow">In the Range</p>
              <h2 className="display">Standard &amp; Bespoke Packs.</h2>
            </div>
            <Link href="/contact" className="btn btn-ghost">Request a Bespoke Pack</Link>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
