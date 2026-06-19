import Link from 'next/link';

const CARDS = [
  { src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80&auto=format&fit=crop',  alt: 'Dermatology pack',  label: 'Dermatology' },
  { src: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800&q=80&auto=format&fit=crop',  alt: 'ENT examination',   label: 'ENT' },
  { src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80&auto=format&fit=crop',  alt: 'General surgery',   label: 'General Surgery' },
  { src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&auto=format&fit=crop',  alt: 'Gynaecology pack',  label: 'Gynaecology' },
];

export function Bespoke() {
  return (
    <section className="section" id="bespoke">
      <div className="wrap">
        <div className="xform">
          <div className="xform-left">
            <p className="eyebrow">Bespoke Procedure Packs</p>
            <h2 className="display">Built to Your Exact&nbsp;Specification.</h2>
            <p className="lede">
              Our fully trained and experienced team can customise procedure packs to your
              clinic&apos;s exact specifications — matching the full range of clinical procedures
              you undertake. One pack standardises session start-up, removes multiple delivery
              charges and invoices, and means you manage fewer line items.
            </p>
            <Link href="/contact" className="btn btn-primary">Request a Pack</Link>
            <div className="ctrl">
              <button className="iconbtn is-ghost" aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="iconbtn is-ghost" aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div className="xform-right">
            {CARDS.map((c) => (
              <div key={c.label} className="xform-card">
                <img alt={c.alt} src={c.src} />
                <span className="ba">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
