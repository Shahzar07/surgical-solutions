import Link from 'next/link';
import type { EnquiryProduct } from '@/lib/catalog';

export function EnquiryCard({
  p,
  basePath,
  cat,
  meta,
}: {
  p: EnquiryProduct;
  basePath: string;
  cat: string;
  meta: string;
}) {
  const href = `${basePath}/${p.slug}`;
  return (
    <article className="prod">
      <Link href={href} className="prod-media prod-media--photo" aria-label={p.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className="prod-quick prod-quick--ghost">Enquire →</span>
      </Link>
      <Link href={href} className="prod-body">
        <span className="prod-cat">{cat}</span>
        <span className="prod-name">{p.name}</span>
        <div className="prod-foot">
          <span className="prod-price prod-price--enq">Price on enquiry</span>
          <span className="prod-unit">{meta}</span>
        </div>
      </Link>
    </article>
  );
}
