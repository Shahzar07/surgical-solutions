import type { Metadata } from 'next';
import { SINGLES } from '@/lib/catalog';
import { EnquiryCard } from '@/components/EnquiryCard';

export const metadata: Metadata = {
  title: 'Single Instruments — Forceps, Scissors, Speculums | Surgical Solutions',
  description:
    'Precision single surgical instruments — forceps, scissors, needle holders, speculums, curettes and more, crafted from premium stainless steel. Enquire for pricing.',
};

export default function SinglesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Precision Instruments</p>
          <h1 className="display">Single Instruments.</h1>
          <p className="lede">
            A complete range of precision surgical instruments — forceps, scissors, needle holders,
            speculums, hooks, clamps and curettes — crafted from premium surgical stainless steel.
            Reusable, autoclavable and built to last.
          </p>
        </div>
        <div className="prod-grid">
          {SINGLES.map((p) => (
            <EnquiryCard key={p.slug} p={p} basePath="/singles" cat="Instrument" meta="Stainless steel" />
          ))}
        </div>
      </div>
    </section>
  );
}
