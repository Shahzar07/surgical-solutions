import Link from 'next/link';

export function Footer() {
  return (
    <footer className="foot wrap">
      <div className="foot-top">
        <div className="foot-brand-col">
          <div className="foot-brand-video" aria-label="Surgical Solutions">
            <video
              src="/logo.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          </div>
          <p>Specialists in single-use surgical instruments, bespoke procedure packs and reusable instruments. Slough, UK.</p>
          <p style={{ marginTop: 14 }}>
            Unit 860, Plymouth Road,<br />
            Slough Trading Estate, SL1 4LP
          </p>
          <p style={{ marginTop: 14 }}>
            Open 09:00 – 18:00, weekdays
          </p>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li><Link href="/procedure-packs">Procedure Packs</Link></li>
            <li><Link href="/singles">Single Instruments</Link></li>
            <li><Link href="/reusable">Reusable Instruments</Link></li>
            <li><Link href="/contact">Bespoke Design</Link></li>
          </ul>
        </div>
        <div>
          <h5>Specialty</h5>
          <ul>
            <li><Link href="/singles">Dermatology</Link></li>
            <li><Link href="/singles">ENT</Link></li>
            <li><Link href="/singles">General Surgery</Link></li>
            <li><Link href="/singles">Gynaecology</Link></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/procedure-packs">Catalogue</Link></li>
            <li><Link href="/contact">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+441753299353">+44 (0) 1753 299 353</a></li>
            <li><a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@<br />surgicalsolution.co.uk</a></li>
            <li><Link href="/contact">Find on map</Link></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Surgical Solutions. All rights reserved.</span>
        <span>Single-Use · Reusable · Bespoke Procedure Packs</span>
      </div>
    </footer>
  );
}
