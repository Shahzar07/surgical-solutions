const QUOTES = [
  { initials: 'DS', name: 'Dr. Sarah Patel',   role: 'Consultant Dermatologist · Manchester',     quote: 'The bespoke dermatology pack Surgical Solutions built for our clinic shaved four minutes off every excision. Re-order is one email. That’s it.' },
  { initials: 'JR', name: 'James Reeves',      role: 'Procurement Lead · Nuffield Health',        quote: 'We switched our entire single-use range to Surgical Solutions in 2022. Three years in, zero supply incidents and meaningful savings on each procedure.' },
  { initials: 'MO', name: "Maya O'Brien",      role: 'Theatre Manager · The London Clinic',       quote: 'They actually pick up the phone. When our ENT list grew last spring they redesigned our pack in under a fortnight and held stock for us.' },
  { initials: 'AH', name: 'Dr. Adam Hughes',   role: 'GP Principal · Cotswold Medical',           quote: 'Their consumables shop is the cleanest re-ordering experience in the sector — what we need, when we need it, at a price that makes sense.' },
];

function QuoteIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
      <path d="M9 0H3a3 3 0 00-3 3v6a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V3a3 3 0 00-3-3zm10 0h-6a3 3 0 00-3 3v6a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V3a3 3 0 00-3-3z" fill="#0E2A47" opacity=".25" />
    </svg>
  );
}

export function Testimonials() {
  const loop = [...QUOTES, ...QUOTES];
  return (
    <section className="test">
      <div className="test-head wrap">
        <p className="eyebrow">Testimonials</p>
        <h2 className="display">From the People Who Use It.</h2>
      </div>

      <div className="test-track">
        {loop.map((q, i) => (
          <article key={i} className="test-card">
            <QuoteIcon />
            <p className="quote">&ldquo;{q.quote}&rdquo;</p>
            <div className="who">
              <span className="avi">{q.initials}</span>
              <div>
                <strong>{q.name}</strong>
                <span>{q.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
