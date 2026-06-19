'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const QUOTES = [
  { initials: 'DS', name: 'Dr. Sarah Patel',   role: 'Consultant Dermatologist · Manchester',     quote: 'The bespoke dermatology pack Surgical Solutions built for our clinic shaved four minutes off every excision. Re-order is one email. That’s it.', tone: 'teal' },
  { initials: 'JR', name: 'James Reeves',      role: 'Procurement Lead · Nuffield Health',        quote: 'We switched our entire single-use range to Surgical Solutions in 2022. Three years in, zero supply incidents and meaningful savings on each procedure.', tone: 'sky' },
  { initials: 'MO', name: "Maya O'Brien",      role: 'Theatre Manager · The London Clinic',       quote: 'They actually pick up the phone. When our ENT list grew last spring they redesigned our pack in under a fortnight and held stock for us.', tone: 'coral' },
  { initials: 'AH', name: 'Dr. Adam Hughes',   role: 'GP Principal · Cotswold Medical',           quote: 'Their consumables shop is the cleanest re-ordering experience in the sector — what we need, when we need it, at a price that makes sense.', tone: 'gold' },
  { initials: 'PK', name: 'Priya Kapoor',      role: 'Lead Nurse · Spire Healthcare',             quote: 'Sterile packs arrive consistent every single time. Onboarding our new theatre took an afternoon instead of a week.', tone: 'mint' },
];

function QuoteIcon() {
  return (
    <svg width="26" height="20" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <path d="M9 0H3a3 3 0 00-3 3v6a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V3a3 3 0 00-3-3zm10 0h-6a3 3 0 00-3 3v6a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V3a3 3 0 00-3-3z" fill="currentColor" />
    </svg>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.children;
    const idx = ((i % cards.length) + cards.length) % cards.length;
    const card = cards[idx] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft - track.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < best) { best = d; nearest = i; }
    });
    setActive(nearest);
  }, []);

  // Auto-advance unless paused (hover / focus).
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => {
        const nextIdx = (prev + 1) % QUOTES.length;
        scrollToIndex(nextIdx);
        return nextIdx;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, scrollToIndex]);

  return (
    <section className="test">
      <div className="test-head wrap">
        <p className="eyebrow">Testimonials</p>
        <h2 className="display">From the People Who Use It.</h2>
      </div>

      <div
        className="test-slider wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <button
          className="test-arrow test-prev"
          onClick={() => scrollToIndex(active - 1)}
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className="test-track" ref={trackRef} onScroll={onScroll}>
          {QUOTES.map((q, i) => (
            <article key={i} className={`test-card tone-${q.tone}`}>
              <span className="test-quote-icon"><QuoteIcon /></span>
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

        <button
          className="test-arrow test-next"
          onClick={() => scrollToIndex(active + 1)}
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <div className="test-dots">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            className={`test-dot${i === active ? ' is-active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
