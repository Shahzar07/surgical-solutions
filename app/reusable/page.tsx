import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductGrid } from '@/components/ProductGrid';
import { productsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Reusable Instruments — Surgical Solutions',
  description:
    'High-quality stainless-steel reusable surgical instruments, built to withstand repeated sterilisation across Dermatology, ENT, General Surgery and Gynaecology.',
};

export default function ReusablePage() {
  const products = productsByCategory('Reusable');

  return (
    <>
      <PageHero
        eyebrow="Products · Reusable Instruments"
        title="Reusable Instruments."
        intro="Our range of instruments — in both procedure packs and single instruments — is of reusable quality, manufactured from high-quality stainless steel and built to last."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/reusable', label: 'Reusable Instruments' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="cat-intro">
            <div className="prose">
              <p>
                Every reusable instrument is precision-ground from high-quality surgical
                stainless steel and finished to withstand repeated autoclaving — giving you a
                dependable, cost-effective option for your theatre and clinic.
              </p>
              <p>
                Like everything we supply, our reusable instruments are prepared in a cleanroom
                environment under stringent quality control and offered with full &lsquo;trace me&rsquo;
                functionality.
              </p>
            </div>

            <div className="panel-img">
              <img
                alt="Reusable stainless-steel surgical instruments"
                src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=1000&q=80&auto=format&fit=crop"
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
              <h2 className="display">Stainless &amp; Autoclavable.</h2>
            </div>
            <Link href="/contact" className="btn btn-ghost">Enquire Now</Link>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
