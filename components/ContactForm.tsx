'use client';

import { useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-done">
        <div className="form-done-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Thank you — message received.</h3>
        <p>A member of our team will be in touch shortly. For anything urgent, call us on +44 (0) 1753 299 353.</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Organisation</span>
          <input type="text" name="organisation" autoComplete="organization" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label className="field">
        <span>How can we help?</span>
        <select name="topic" defaultValue="">
          <option value="" disabled>Select an enquiry type…</option>
          <option>Procedure packs</option>
          <option>Single instruments</option>
          <option>Reusable instruments</option>
          <option>Bespoke pack design</option>
          <option>Trade account &amp; pricing</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn-primary">Send Enquiry</button>
      <p className="form-note">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
