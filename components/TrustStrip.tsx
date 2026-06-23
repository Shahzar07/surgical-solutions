export function TrustStrip() {
  const logos = [
    "NHS Trusts",
    "BUPA",
    "Nuffield Health",
    "HCA Healthcare",
    "Spire",
    "The London Clinic",
  ];

  return (
    <div className="wrap">
      <div className="trust">
        <span className="trust-label">Trusted across the UK by</span>
        <div className="trust-marquee" aria-hidden="true">
          <div className="trust-track">
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="trust-logo">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
