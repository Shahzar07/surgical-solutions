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
            <h2 className="display">Engineered with<br />Clinicians, Trusted in&nbsp;Theatre.</h2>
            <p>
              Every product is specified with the surgeon who&apos;ll use it. We source from a
              tight bench of vetted manufacturers, batch-test on receipt, and ship from a
              single UK warehouse — so what arrives on your shelf is exactly what was signed off.
            </p>
            <div className="row">
              <a href="#about" className="btn btn-primary btn-on-dark">Meet the Team</a>
              <a href="#bespoke-form" className="btn-link" style={{ color: 'var(--c-on-prim)' }}>
                Talk to a Specialist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
