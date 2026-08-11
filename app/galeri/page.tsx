import PageHeader from '@/components/site/page-header';
import GalleryGrid from '@/components/site/gallery-grid';
import Reveal from '@/components/site/reveal';
import CTASection from '@/components/site/cta-section';
import { galleryItems } from '@/lib/site';

export const metadata = {
  title: 'Galeri — Pondok Pesantren Darul Abror IBS Garut',
  description:
    'Kumpulan foto lingkungan, fasilitas, kegiatan, dan pendidikan di Pondok Pesantren Darul Abror.',
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Galeri Darul Abror"
        description="Potret lingkungan, fasilitas, kegiatan, dan momen pendidikan di Pondok Pesantren Darul Abror."
        crumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Galeri' },
        ]}
        image="https://images.pexels.com/photos/20627703/pexels-photo-20627703.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
