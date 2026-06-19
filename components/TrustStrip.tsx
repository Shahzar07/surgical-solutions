const LOGOS = ['NHS Trusts', 'BUPA', 'Nuffield Health', 'HCA Healthcare', 'Spire', 'The London Clinic'];

export function TrustStrip() {
  return (
    <div className="wrap">
      <div className="trust">
        <span className="trust-label">
          <span className="trust-dot" />
          Trusted across the UK by 800+ clinics
        </span>
        <div className="trust-logos">
          {LOGOS.map((l) => (
            <span key={l} className="trust-chip">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
