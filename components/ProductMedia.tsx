'use client';

import { useState } from 'react';
import { ART, productImage, type Product } from '@/lib/products';

/**
 * Renders a product's real photograph, falling back to the hand-drawn SVG
 * instrument art if the remote image fails to load (offline, blocked CDN, etc).
 */
export function ProductMedia({
  product,
  w = 900,
  className,
}: {
  product: Product;
  w?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: ART[product.art] || '' }}
      />
    );
  }

  return (
    <img
      className={className}
      src={productImage(product, w)}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
