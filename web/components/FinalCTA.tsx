export function FinalCTA() {
  return (
    <section className="wrap">
      <div className="cta">
        <div className="pic">
          <img alt="Surgeon" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop" />
        </div>
        <div className="cta-mid">
          <p className="eyebrow" style={{ color: 'rgba(246,241,230,.55)' }}>Get Started</p>
          <h3>Place Your Next Order<br />in Under Two Minutes.</h3>
          <p>
            New customer? Open a trade account and we&apos;ll match your usual pack list,
            share trade pricing and arrange a free sample box.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-primary btn-on-dark">Open Trade Account</a>
            <a href="#" className="btn-link" style={{ color: 'var(--c-on-prim)' }}>
              +44 (0) 1753 299 353 →
            </a>
          </div>
        </div>
        <div className="pic">
          <img alt="Theatre" src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}
