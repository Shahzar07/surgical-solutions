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
          <p>Specialists in single-use surgical instruments, bespoke procedure packs and theatre consumables. Slough, UK.</p>
          <p style={{ marginTop: 14 }}>
            Unit 860, Plymouth Road,<br />
            Slough Trading Estate, SL1 4LP
          </p>
        </div>
        <div>
          <h5>Catalogue</h5>
          <ul>
            <li><a href="/procedure-packs">Procedure Packs</a></li>
            <li><a href="/singles">Single Instruments</a></li>
            <li><a href="/shop">Consumables</a></li>
            <li><a href="/contact">Bespoke Design</a></li>
          </ul>
        </div>
        <div>
          <h5>Shop</h5>
          <ul>
            <li><a href="/shop">All Products</a></li>
            <li><a href="/cart">Your Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
            <li><a href="/contact">Trade Enquiries</a></li>
          </ul>
        </div>
        <div>
          <h5>Account</h5>
          <ul>
            <li><a href="/contact">Open Trade Account</a></li>
            <li><a href="/contact">Request a Quote</a></li>
            <li><a href="/cart">View Cart</a></li>
            <li><a href="/shop">Re-order</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+441753299353">+44 (0) 1753 299 353</a></li>
            <li><a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@<br />surgicalsolution.co.uk</a></li>
            <li><a href="/contact">Send an enquiry</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Surgical Solutions Ltd. All rights reserved.</span>
        <span>VAT GB 123 4567 89 · ISO 13485 · NHS Supply Chain</span>
      </div>
    </footer>
  );
}
