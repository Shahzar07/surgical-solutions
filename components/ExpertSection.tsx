export function ExpertSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="two-up dark">
          <div className="panel-img">
            <img
              alt="Surgeons in theatre"
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop"
            />
          </div>
          <div className="panel-txt">
            <p className="eyebrow" style={{ color: 'rgba(246,241,230,.55)' }}>Why Surgical Solutions</p>
            <h2 className="display">Cleanroom Packed,<br />Fully Traceable,<br />Trusted in&nbsp;Theatre.</h2>
            <p>
              All of our single-use and reusable products are packaged in a cleanroom
              environment after undergoing stringent quality-control measures, and are offered
              with full &lsquo;trace me&rsquo; functionality. It&apos;s how we&apos;ve earned a high reputation
              with customers across the NHS and the private healthcare sector.
            </p>
            <div className="row">
              <a href="/about" className="btn btn-primary btn-on-dark">About Us</a>
              <a href="/contact" className="btn-link" style={{ color: 'var(--c-on-prim)' }}>
                Talk to a Specialist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
