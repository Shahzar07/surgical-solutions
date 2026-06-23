'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';

const NAV = [
  { href: '/shop', label: 'Shop' },
  { href: '/procedure-packs', label: 'Procedure Packs' },
  { href: '/singles', label: 'Singles' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { count, open } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <button
          className="hdr-burger"
          aria-label="Open menu"
          aria-expanded={menu}
          onClick={() => setMenu((m) => !m)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menu ? <path d="M6 6l12 12M18 6l-12 12" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>

        <nav className="hdr-nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>

        <Link className="brand brand-video" href="/" aria-label="Surgical Solutions home">
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
        </div>
      </div>

      {menu && (
        <nav className="hdr-mobile" onClick={() => setMenu(false)}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
