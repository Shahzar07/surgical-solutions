import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact & Enquiries | Surgical Solutions',
  description:
    'Talk to a Surgical Solutions specialist about products, trade pricing or a bespoke procedure pack. Slough, UK.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="display">Talk to a Specialist.</h1>
          <p className="lede">
            Whether you need trade pricing, a product recommendation or a fully bespoke procedure
            pack, our team is here to help. We typically reply within one working day.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-block">
              <h4>Phone</h4>
              <a href="tel:+441753299353">+44 (0) 1753 299 353</a>
            </div>
            <div className="contact-block">
              <h4>Email</h4>
              <a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@surgicalsolution.co.uk</a>
            </div>
            <div className="contact-block">
              <h4>Address</h4>
              <p>Unit 860, Plymouth Road,<br />Slough Trading Estate, SL1 4LP</p>
            </div>
            <div className="contact-block">
              <h4>Hours</h4>
              <p>Mon–Fri, 08:30–17:30<br />Same-day dispatch before 14:00</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>{product ? 'Product enquiry' : 'Send us a message'}</h3>
            <EnquiryForm product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
