import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { LiveChat } from '@/components/LiveChat';

/** Shared page chrome: announcement bar + header on top, footer + cart + chat below. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      {children}
      <Footer />
      <CartDrawer />
      <LiveChat />
    </>
  );
}
