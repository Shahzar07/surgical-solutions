import Link from 'next/link';
import type { EnquiryProduct } from '@/lib/catalog';
import { EnquiryForm } from '@/components/EnquiryForm';

export function EnquiryDetail({
  p,
  basePath,
  listLabel,
  cat,
}: {
  p: EnquiryProduct;
  basePath: string;
  listLabel: string;
  cat: string;
}) {
  return (
    <div className="pdp">
      <div className="pdp-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} />
      </div>

      <div className="pdp-info">
        <nav className="crumbs">
          <Link href="/">Home</Link> <span>/</span> <Link href={basePath}>{listLabel}</Link>{' '}
          <span>/</span> <span className="crumb-current">{p.name}</span>
        </nav>

        <p className="eyebrow">{cat}</p>
        <h1 className="pdp-title">{p.name}</h1>

        <div className="pdp-price">
          <span className="pdp-enquire-label">Price on enquiry</span>
        </div>

        <p className="pdp-desc">{p.description}</p>

        <ul className="pdp-meta">
          <li><span>Type</span><strong>{cat}</strong></li>
          <li><span>Configuration</span><strong>Standard or bespoke</strong></li>
          <li><span>Sterility</span><strong>Supplied sterile</strong></li>
          <li><span>Lead time</span><strong>Enquire for details</strong></li>
        </ul>

        <div className="pdp-enquire-box" id="enquire">
          <h3>Request a quote</h3>
          <p>Tell us what you need and a specialist will come back with specification and pricing.</p>
          <EnquiryForm product={p.name} />
        </div>
      </div>
    </div>
  );
}
