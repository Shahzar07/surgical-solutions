'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { Logo } from '@/components/Logo';

const NAV = [
  { href: '/products', label: 'Catalogue' },
  { href: '/#bespoke', label: 'Procedure Packs' },
  { href: '/#about', label: 'Why Us' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <div className="hdr-left">
          <button
            className={`hdr-burger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          <nav className="hdr-nav">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href}>{n.label}</Link>
            ))}
          </nav>
        </div>

        <Link className="brand" href="/" aria-label="Surgical Solutions home" onClick={() => setMenuOpen(false)}>
          <Logo />
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

      {/* Mobile menu drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-top">
          <Logo />
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
        <nav>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/products" onClick={() => setMenuOpen(false)}>Shop All</Link>
          <Link href="/cart" className="mobile-menu-cart" onClick={() => setMenuOpen(false)}>Cart ({count})</Link>
        </nav>
      </div>
      <div
        className={`mobile-menu-mask${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
