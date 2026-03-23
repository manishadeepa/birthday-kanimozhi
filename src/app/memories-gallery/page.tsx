import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GalleryGrid from './components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Our Memories | Forever Yours',
  description: 'A beautiful gallery of our precious moments together. Every photo tells a story of our love and adventures.',
};

export default function MemoriesGallery() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Gallery Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Journey Together
              </p>
              <h2 className="text-5xl md:text-7xl font-cursive font-medium tracking-tight">
                Precious <span className="text-primary italic">Memories.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every moment captured is a treasure. These photos remind us of the laughter, adventures, and love
                we've shared together.
              </p>
            </div>

            {/* Gallery Grid */}
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}