import Header from '@/components/header';
import Hero from '@/components/hero';
import Places from '@/components/places';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import MobileDock from '@/components/mobile-dock';

export default function Home() {
  return (
    <div className="min-h-screen min-h-[100dvh]">
      <Header />
      <main>
        <Hero />
        <Places />
      </main>
      <Footer />
      <ScrollToTop />
      <MobileDock />
    </div>
  );
}
