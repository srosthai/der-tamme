import Header from '@/components/header';
import Hero from '@/components/hero';
import Places from '@/components/places';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Places />
      <Footer />
    </main>
  );
}