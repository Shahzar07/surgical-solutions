import type { Metadata } from 'next';
import { PACKS } from '@/lib/catalog';
import { EnquiryCard } from '@/components/EnquiryCard';

export const metadata: Metadata = {
  title: 'Procedure Packs — Standard & Bespoke | Surgical Solutions',
  description:
    'Sterile procedure packs for dermatology, ENT, plastics and minor ops — supplied standard or engineered bespoke to your specification. Enquire for pricing.',
};

export default function ProcedurePacksPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Bespoke &amp; Standard</p>
          <h1 className="display">Procedure Packs.</h1>
          <p className="lede">
            Pre-assembled sterile packs configured with the exact instruments and consumables your
            list needs. Choose a standard configuration or work with us on a fully bespoke pack —
            every component picked, every tray laid out for the way you work.
          </p>
        </div>
        <div className="prod-grid">
          {PACKS.map((p) => (
            <EnquiryCard key={p.slug} p={p} basePath="/procedure-packs" cat="Procedure Pack" meta="Sterile" />
          ))}
        </div>
      </div>
    </section>
  );
}
