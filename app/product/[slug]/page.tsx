import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CONSUMABLES, priceLabel } from '@/lib/catalog';
import { ProductDetail } from '@/components/ProductDetail';
import { RelatedProducts } from '@/components/RelatedProducts';

export function generateStaticParams() {
  return CONSUMABLES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = CONSUMABLES.find((c) => c.slug === slug);
  if (!p) return { title: 'Product not found | Surgical Solutions' };
  return {
    title: `${p.name} — ${priceLabel(p)} | Surgical Solutions`,
    description: p.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = CONSUMABLES.find((c) => c.slug === slug);
  if (!p) notFound();

  return (
    <section className="section">
      <div className="wrap">
        <ProductDetail p={p} />
        <RelatedProducts currentSlug={p.slug} />
      </div>
    </section>
  );
}
