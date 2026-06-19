import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductGrid } from '@/components/ProductGrid';
import { productsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Single Instruments — Surgical Solutions',
  description:
    'A complete range of single-use surgical instruments, from drapes to dental syringes — all supplied in boxes of 10 across Dermatology, ENT, General Surgery and Gynaecology.',
};

export default function SinglesPage() {
  const products = productsByCategory('Singles');

  return (
    <>
      <PageHero
        eyebrow="Products · Single Instruments"
        title="Single Instruments."
        intro="We offer a complete range of single-use instruments — ranging from drapes to dental syringes — all supplied in convenient boxes of 10."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/singles', label: 'Single Instruments' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="cat-intro">
            <div className="prose">
              <p>
                Our single-use instruments span General Surgery, Dermatology, ENT and
                Gynaecology, giving you a sterile, single-patient option for every routine
                procedure. Each instrument is manufactured from high-quality stainless steel and
                is of reusable quality.
              </p>
              <p>
                Every product is packaged in a cleanroom environment after stringent quality
                control and offered with full &lsquo;trace me&rsquo; functionality, so you can be
                confident in exactly what reaches your sterile field.
              </p>
            </div>

            <div className="panel-img">
              <img
                alt="Single-use surgical instruments"
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1000&q=80&auto=format&fit=crop"
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
              <h2 className="display">Sterile, Single Patient.</h2>
            </div>
            <Link href="/contact" className="btn btn-ghost">Ask About Trade Pricing</Link>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
