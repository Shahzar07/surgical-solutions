'use client';

import { useState } from 'react';

export function EnquiryForm({ product }: { product?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    quantity: '',
    message: product ? `I'd like to enquire about: ${product}` : '',
  });

  function update(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // No mail backend is wired in this build — open the user's mail client
    // with a pre-filled enquiry as a dependable fallback, then confirm.
    const subject = encodeURIComponent(
      product ? `Enquiry: ${product}` : 'Product enquiry',
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
        `Organisation: ${form.organisation}\nQuantity: ${form.quantity}\n\n${form.message}`,
    );
    window.location.href = `mailto:enquiries@surgicalsolution.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="enq-success">
        <div className="enq-success-icon">✓</div>
        <h3>Thank you — your enquiry is on its way.</h3>
        <p>
          A specialist will be in touch shortly. If your email client didn&apos;t open, call us on{' '}
          <a href="tel:+441753299353">+44 (0) 1753 299 353</a> or email{' '}
          <a href="mailto:enquiries@surgicalsolution.co.uk">enquiries@surgicalsolution.co.uk</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="enq-form" onSubmit={submit}>
      <div className="enq-row">
        <label>
          <span>Full name *</span>
          <input required value={form.name} onChange={update('name')} placeholder="Jane Smith" />
        </label>
        <label>
          <span>Organisation</span>
          <input value={form.organisation} onChange={update('organisation')} placeholder="Clinic / Hospital" />
        </label>
      </div>
      <div className="enq-row">
        <label>
          <span>Email *</span>
          <input required type="email" value={form.email} onChange={update('email')} placeholder="you@clinic.co.uk" />
        </label>
        <label>
          <span>Phone</span>
          <input value={form.phone} onChange={update('phone')} placeholder="07000 000000" />
        </label>
      </div>
      <label>
        <span>Estimated quantity</span>
        <input value={form.quantity} onChange={update('quantity')} placeholder="e.g. 50 packs / month" />
      </label>
      <label>
        <span>Message *</span>
        <textarea required rows={5} value={form.message} onChange={update('message')} />
      </label>
      <button className="btn btn-primary" type="submit">Send Enquiry</button>
      <p className="enq-note">We typically reply within one working day. No spam, ever.</p>
    </form>
  );
}
