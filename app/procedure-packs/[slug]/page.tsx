import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PACKS } from '@/lib/catalog';
import { EnquiryDetail } from '@/components/EnquiryDetail';

export function generateStaticParams() {
  return PACKS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = PACKS.find((x) => x.slug === slug);
  if (!p) return { title: 'Pack not found | Surgical Solutions' };
  return { title: `${p.name} | Surgical Solutions`, description: p.description };
}

export default async function PackDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PACKS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <section className="section">
      <div className="wrap">
        <EnquiryDetail p={p} basePath="/procedure-packs" listLabel="Procedure Packs" cat="Procedure Pack" />
      </div>
    </section>
  );
}
