import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProduct, productImage } from '@/lib/products';
import { SiteShell } from '@/components/SiteShell';
import { PageBanner } from '@/components/PageBanner';
import { ProductDetail } from '@/components/ProductDetail';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: 'Product not found — Surgical Solutions' };
  return {
    title: `${product.name} — Surgical Solutions`,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.cat === product.cat)
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.cat !== product.cat))
    .slice(0, 4);

  return (
    <SiteShell>
      <PageBanner
        eyebrow={`${product.cat} · ${product.sku}`}
        title={product.name}
        subtitle={product.blurb}
        image={productImage(product, 1600)}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Catalogue', href: '/products' },
          { label: product.name },
        ]}
      />
      <ProductDetail product={product} related={related} />
    </SiteShell>
  );
}
