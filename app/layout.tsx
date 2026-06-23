import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LenisProvider } from '@/components/LenisProvider';
import { CartProvider } from '@/lib/cart';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { LiveChat } from '@/components/LiveChat';

export const metadata: Metadata = {
  title: 'Surgical Solutions — Specialists in Surgical Instruments & Procedure Packs',
  description:
    "For 20 years we've supplied UK hospitals, surgeries and clinics with single-use instruments, bespoke procedure packs and theatre consumables — built to clinical spec and delivered on time.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>
        <LenisProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <LiveChat />
          </CartProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
