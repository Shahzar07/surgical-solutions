import Link from 'next/link';

const SPECS = [
  {
    n: '01',
    label: 'Dermatology',
    blurb: 'Excision and biopsy instruments, punches, fine forceps and complete skin-surgery packs.',
  },
  {
    n: '02',
    label: 'ENT',
    blurb: 'Nasal and aural speculae, applicators and examination packs for busy ENT clinics.',
  },
  {
    n: '03',
    label: 'General Surgery',
    blurb: 'Scalpels, sutures, gowns, drapes and minor-operation packs ready for the sterile field.',
  },
  {
    n: '04',
    label: 'Gynaecology',
    blurb: 'Single-use speculae, swabs and examination packs designed for patient comfort.',
  },
];

export function Specialties() {
  return (
    <section className="section" id="specialties">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="eyebrow">Specialties We Supply</p>
            <h2 className="display">Four Disciplines,<br />One Trusted Supplier.</h2>
          </div>
          <Link href="/singles" className="btn btn-ghost">Shop Single Instruments</Link>
        </div>

        <div className="specs">
          {SPECS.map((s) => (
            <article key={s.label} className="spec">
              <span className="spec-n">{s.n}</span>
              <h3>{s.label}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
