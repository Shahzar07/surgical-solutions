'use client';

import { useState } from 'react';
import Link from 'next/link';
import { fmtGBP, type Product } from '@/lib/products';
import { ProductMedia } from '@/components/ProductMedia';
import { useCart } from '@/lib/cart';

function badgeClass(badge: Product['badge']): string {
  if (badge === 'IN STOCK') return 'is-stock';
  if (badge === 'NEW') return 'is-new';
  if (badge === 'BEST SELLER') return 'is-best';
  return '';
}

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { add, open } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="section pdp">
      <div className="wrap">
        <div className="pdp-grid">
          <div className="pdp-media">
            {product.badge && (
              <span className={`prod-badge ${badgeClass(product.badge)}`}>{product.badge}</span>
            )}
            <ProductMedia product={product} w={1200} className="pdp-photo" />
          </div>

          <div className="pdp-info">
            <span className="prod-cat">{product.cat} · {product.sku}</span>
            <h2 className="pdp-name display">{product.name}</h2>
            <div className="pdp-price">
              {fmtGBP(product.price)} <span>/ {product.unit}</span>
            </div>
            <p className="pdp-desc">{product.description}</p>

            <ul className="pdp-features">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="pdp-buy">
              <div className="qty-stepper" aria-label="Quantity">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button className="btn btn-primary" onClick={handleAdd}>
                {added ? 'Added ✓' : `Add to Cart · ${fmtGBP(product.price * qty)}`}
              </button>
              <button className="btn btn-ghost" onClick={open}>View Cart</button>
            </div>

            <div className="pdp-trust">
              <span>✓ Same-day dispatch before 14:00</span>
              <span>✓ Free P&amp;P over £100</span>
              <span>✓ Full lot traceability</span>
            </div>

            <table className="pdp-specs">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label}>
                    <th scope="row">{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {related.length > 0 && (
          <div className="pdp-related">
            <div className="shead">
              <div>
                <p className="eyebrow">You May Also Need</p>
                <h2 className="display">Related Products.</h2>
              </div>
              <Link href="/products" className="btn btn-ghost">View All</Link>
            </div>
            <div className="prod-grid">
              {related.map((p) => (
                <article key={p.id} className="prod">
                  <div className="prod-media">
                    {p.badge && <span className={`prod-badge ${badgeClass(p.badge)}`}>{p.badge}</span>}
                    <ProductMedia product={p} w={600} />
                  </div>
                  <div className="prod-body">
                    <span className="prod-cat">{p.cat} · {p.sku}</span>
                    <span className="prod-name">{p.name}</span>
                    <div className="prod-foot">
                      <span className="prod-price">{fmtGBP(p.price)}</span>
                      <span className="prod-unit">{p.unit}</span>
                    </div>
                  </div>
                  <Link className="prod-stretch" href={`/products/${p.id}`} aria-label={`View ${p.name}`} />
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
