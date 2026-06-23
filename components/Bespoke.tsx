import Link from 'next/link';

const CARDS = [
  { src: '/products/0001-DermatologyPack-2-scaled.jpg', href: '/procedure-packs/eus-778a-bcf-dermatology-pack', label: 'Dermatology Pack' },
  { src: '/products/0022-MinorOpsPack.png', href: '/procedure-packs/eus-766a-minor-ops-pack', label: 'Minor Ops Pack' },
  { src: '/products/0038-FineSuturePack.png', href: '/procedure-packs/eus-769a-fine-suture-pack-2', label: 'Fine Suture Pack' },
  { src: '/products/0029-PunchBiopsyPackGallipot.png', href: '/procedure-packs/eus-768a-punch-biopsy-pack', label: 'Punch Biopsy Pack' },
];

export function Bespoke() {
  return (
    <section className="section" id="bespoke">
      <div className="wrap">
        <div className="xform">
          <div className="xform-left">
            <p className="eyebrow">Bespoke Design</p>
            <h2 className="display">See the Procedure Packs in&nbsp;Action.</h2>
            <p className="lede">
              A library of custom packs we&apos;ve engineered with surgeons across Dermatology,
              ENT and General Surgery — every component picked, every tray laid out for the
              way you actually work.
            </p>
            <Link href="/procedure-packs" className="btn btn-primary">Browse Procedure Packs</Link>
          </div>

          <div className="xform-right">
            {CARDS.map((c) => (
              <Link key={c.label} href={c.href} className="xform-card xform-card--photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={c.label} src={c.src} />
                <span className="ba">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
