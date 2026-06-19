'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';

const PRODUCT_LINKS = [
  { href: '/procedure-packs', label: 'Procedure Packs' },
  { href: '/singles', label: 'Single Instruments' },
  { href: '/reusable', label: 'Reusable Instruments' },
];

export function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <nav className="hdr-nav">
          <Link href="/about">About</Link>
          <div className="hdr-drop">
            <button type="button" className="hdr-drop-trigger has-caret">Products</button>
            <div className="hdr-drop-menu">
              {PRODUCT_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>
          </div>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className="brand brand-video" href="/" aria-label="Surgical Solutions home" onClick={close}>
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
        </Link>

        <div className="hdr-right">
          <button className="cart-pill" onClick={open} aria-label="Open cart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6h15l-1.5 9h-12z" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M6 6 4 2H2" />
            </svg>
            <span className="label-text">Cart</span> <span className="count">{count}</span>
          </button>
          <button
            className={`hdr-burger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`hdr-mobile${menuOpen ? ' open' : ''}`}>
        <Link href="/" onClick={close}>Home</Link>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/procedure-packs" onClick={close}>Procedure Packs</Link>
        <Link href="/singles" onClick={close}>Single Instruments</Link>
        <Link href="/reusable" onClick={close}>Reusable Instruments</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
      </div>
    </header>
  );
}
