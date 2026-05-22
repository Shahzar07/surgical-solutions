'use client';

import { useCart } from '@/lib/cart';

export function Header() {
  const { count, open } = useCart();

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <nav className="hdr-nav">
          <a href="#catalogue" className="has-caret">Catalogue</a>
          <a href="#packs">Procedure Packs</a>
          <a href="#shop">Shop</a>
        </nav>

        <a className="brand brand-video" href="#" aria-label="Surgical Solutions home">
          <video
            className="brand-video-el"
            src="/logo.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </a>

        <div className="hdr-right">
          <button className="cart-pill" onClick={open} aria-label="Open cart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6h15l-1.5 9h-12z" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M6 6 4 2H2" />
            </svg>
            <span className="label-text">Cart</span> <span className="count">{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
