import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Specialties } from '@/components/Specialties';

export const metadata: Metadata = {
  title: 'About — Surgical Solutions',
  description:
    'Surgical Solutions is a leading UK provider and distributor of high-quality stainless-steel surgical instruments, single-use products and bespoke procedure packs.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Surgical Solutions"
        title="A Trusted Name in UK Surgical Supply."
        intro="Surgical Solutions is renowned for being a leading provider and distributor of high-quality stainless-steel surgical instruments, whilst offering an excellent level of customer service."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="cat-intro">
            <div className="prose">
              <p>
                We provide an extensive range of General Surgery, Dermatology, ENT and
                Gynaecology products, including single-use instruments and bespoke procedure
                packs. Our single instruments range covers everything from drapes to dental
                syringes — all supplied in convenient boxes of 10.
              </p>
              <p>
                Surgical Solutions maintains a high reputation in the UK market, with customers
                within the NHS and the private healthcare sector. The range of instruments in
                both our procedure packs and single instruments is of reusable quality.
              </p>
              <h3>Quality &amp; Traceability</h3>
              <p>
                All of our single-use and reusable products are packaged in a cleanroom
                environment after undergoing stringent quality-control measures, and are offered
                with full &lsquo;trace me&rsquo; functionality — so every component can be traced from
                our cleanroom to your sterile field.
              </p>
            </div>

            <div className="panel-img">
              <img
                alt="Surgical instruments laid out on a sterile tray"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1000&q=80&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="two-up dark">
            <div className="panel-img">
              <img
                alt="Clinical team in theatre"
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop"
              />
            </div>
            <div className="panel-txt">
              <p className="eyebrow" style={{ color: 'rgba(246,241,230,.55)' }}>Our Promise</p>
              <h2 className="display">Consistency You Can&nbsp;Build a List Around.</h2>
              <ul className="feature-list on-dark" style={{ marginTop: 24 }}>
                <li>High-quality stainless-steel instruments, single-use and reusable</li>
                <li>Cleanroom packaging with stringent quality control</li>
                <li>Full &lsquo;trace me&rsquo; traceability on every product</li>
                <li>Bespoke procedure packs built to your exact specification</li>
                <li>Trusted across the NHS and private healthcare sector</li>
              </ul>
              <div className="row" style={{ marginTop: 28 }}>
                <Link href="/contact" className="btn btn-primary btn-on-dark">Get in Touch</Link>
                <Link href="/procedure-packs" className="btn-link" style={{ color: 'var(--c-on-prim)' }}>
                  View the Catalogue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Specialties />
    </>
  );
}
