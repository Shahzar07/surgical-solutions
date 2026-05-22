export function Footer() {
  return (
    <footer className="foot wrap">
      <div className="foot-top">
        <div>
          <h4 className="foot-brand">surgical solutions</h4>
          <p>Specialists in single-use surgical instruments, bespoke procedure packs and theatre consumables. Slough, UK.</p>
          <p style={{ marginTop: 14 }}>
            Unit 860, Plymouth Road,<br />
            Slough Trading Estate, SL1 4LP
          </p>
        </div>
        <div>
          <h5>Catalogue</h5>
          <ul>
            <li><a href="#">Procedure Packs</a></li>
            <li><a href="#">Single Use</a></li>
            <li><a href="#">Consumables</a></li>
            <li><a href="#">Bespoke Design</a></li>
          </ul>
        </div>
        <div>
          <h5>Specialty</h5>
          <ul>
            <li><a href="#">Dermatology</a></li>
            <li><a href="#">ENT</a></li>
            <li><a href="#">General Surgery</a></li>
            <li><a href="#">Minor Ops</a></li>
          </ul>
        </div>
        <div>
          <h5>Account</h5>
          <ul>
            <li><a href="#">Open Trade Account</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Quote Builder</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+441753299353">+44 (0) 1753 299 353</a></li>
            <li><a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@<br />surgicalsolution.co.uk</a></li>
            <li><a href="#">Find on map</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-watermark" aria-hidden="true">surgical solutions</div>
      <div className="foot-bottom">
        <span>© 2026 Surgical Solutions Ltd. All rights reserved.</span>
        <span>VAT GB 123 4567 89 · ISO 13485 · NHS Supply Chain</span>
      </div>
    </footer>
  );
}
