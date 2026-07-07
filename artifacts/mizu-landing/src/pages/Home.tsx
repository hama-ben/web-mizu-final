import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Registration from '@/components/sections/Registration';
import Timeline from '@/components/sections/Timeline';
import DriverPreview from '@/components/sections/DriverPreview';
import CustomerPreview from '@/components/sections/CustomerPreview';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-hidden flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Registration />
        <Timeline />
        <DriverPreview />
        <CustomerPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
