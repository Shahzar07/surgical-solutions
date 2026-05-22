import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { EditorialSlab } from '@/components/EditorialSlab';
import { Categories } from '@/components/Categories';
import { Products } from '@/components/Products';
import { Bespoke } from '@/components/Bespoke';
import { ExpertSection } from '@/components/ExpertSection';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustStrip />
      <EditorialSlab />
      <Categories />
      <Products />
      <Bespoke />
      <ExpertSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <CartDrawer />
    </>
  );
}
