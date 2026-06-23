import { CONSUMABLES } from '@/lib/catalog';
import { ProductCard } from '@/components/ProductCard';

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const idx = CONSUMABLES.findIndex((p) => p.slug === currentSlug);
  const others = CONSUMABLES.filter((p) => p.slug !== currentSlug);
  // Pick the 4 that follow this product in the catalogue (wraps around).
  const start = Math.max(0, idx);
  const picks = [...others.slice(start), ...others.slice(0, start)].slice(0, 4);

  return (
    <div className="related">
      <div className="shead">
        <h2 className="display" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>You May Also Need</h2>
      </div>
      <div className="prod-grid">
        {picks.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
