import Link from 'next/link';

export function EditorialSlab() {
  return (
    <div className="wrap">
      <section className="slab" id="about">
        <p className="eyebrow">Slough Trading Estate · United Kingdom</p>
        <h2 className="display">
          Quality Instruments<br />
          for the Moments<br />
          That&nbsp;Matter Most.
        </h2>
        <p className="lede">
          Surgical Solutions is a leading UK provider and distributor of high-quality
          stainless-steel surgical instruments, single-use products and bespoke procedure
          packs. Every item is packed in a cleanroom environment after stringent quality
          control and offered with full &lsquo;trace me&rsquo; functionality.
        </p>
        <Link href="/about" className="btn btn-primary">About Surgical Solutions</Link>

        <div className="slab-meta">
          <div className="stat"><strong>4</strong><span>Clinical Specialties</span></div>
          <div className="stat"><strong>NHS</strong><span>&amp; Private Healthcare</span></div>
          <div className="stat"><strong>Trace&nbsp;Me</strong><span>Full Traceability</span></div>
          <div className="stat"><strong>Cleanroom</strong><span>Packed &amp; QC&apos;d</span></div>
        </div>
      </section>
    </div>
  );
}
