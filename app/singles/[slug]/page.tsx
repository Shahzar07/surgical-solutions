import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SINGLES } from '@/lib/catalog';
import { EnquiryDetail } from '@/components/EnquiryDetail';

export function generateStaticParams() {
  return SINGLES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = SINGLES.find((x) => x.slug === slug);
  if (!p) return { title: 'Instrument not found | Surgical Solutions' };
  return { title: `${p.name} | Surgical Solutions`, description: p.description };
}

export default async function SingleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = SINGLES.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <section className="section">
      <div className="wrap">
        <EnquiryDetail p={p} basePath="/singles" listLabel="Single Instruments" cat="Single Instrument" />
      </div>
    </section>
  );
}
