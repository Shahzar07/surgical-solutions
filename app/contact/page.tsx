import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Surgical Solutions',
  description:
    'Get in touch with Surgical Solutions. Unit 860, Plymouth Road, Slough Trading Estate, SL1 4LP. Call +44 (0) 1753 299 353 or email enquiries@surgicalsolution.co.uk.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&rsquo;s Talk."
        intro="Whether you need a standard line item, a complete procedure pack designed to your specification, or trade pricing for your department — our team is here to help."
        crumbs={[{ href: '/', label: 'Home' }, { href: '/contact', label: 'Contact' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <aside className="contact-info">
              <div className="contact-block">
                <h3>Visit / Write</h3>
                <p>
                  Surgical Solutions<br />
                  Unit 860, Plymouth Road,<br />
                  Slough Trading Estate,<br />
                  Slough, SL1 4LP
                </p>
              </div>
              <div className="contact-block">
                <h3>Call</h3>
                <p><a href="tel:+441753299353">+44 (0) 1753 299 353</a></p>
              </div>
              <div className="contact-block">
                <h3>Email</h3>
                <p><a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@surgicalsolution.co.uk</a></p>
              </div>
              <div className="contact-block">
                <h3>Opening Hours</h3>
                <p>Monday – Friday<br />09:00 – 18:00</p>
              </div>
            </aside>

            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="wrap" style={{ marginTop: 40 }}>
          <div className="contact-map">
            <iframe
              title="Surgical Solutions location — Slough Trading Estate"
              src="https://www.google.com/maps?q=Plymouth+Road,+Slough+Trading+Estate,+SL1+4LP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
