import { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import VirtualTourEmbed from '@/components/site/virtual-tour-embed';
import { VIRTUAL_TOUR_URL } from '@/lib/site';

export const metadata = {
  title: 'Virtual Tour 360° — Pondok Pesantren Darul Abror IBS Garut',
  description:
    'Jelajahi lingkungan, fasilitas, dan ruang pendidikan Pondok Pesantren Darul Abror IBS secara interaktif melalui Virtual Tour 360°.',
};

export default function VirtualTourPage() {
  return (
    <>
      {/* Page intro — compact, above the iframe */}
      <section className="pb-6 pt-28 lg:pt-32" style={{ background: 'linear-gradient(135deg, #082B5C 0%, #0759B8 55%, #168BEA 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-white/80">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90">Virtual Tour</span>
          </nav>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-px w-5 bg-[#F5B51B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5B51B]">
                  Pengalaman Interaktif
                </span>
              </div>
              <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Virtual Tour 360° Darul Abror IBS
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
                Jelajahi lingkungan, fasilitas, dan ruang pendidikan Pondok Pesantren
                Darul Abror IBS secara interaktif melalui Virtual Tour 360°.
              </p>
            </div>
            <a
              href={VIRTUAL_TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" />
              Buka di Tab Baru
            </a>
          </div>
        </div>
      </section>

      {/* Virtual Tour iframe — full focus */}
      <section className="pb-10 pt-4" style={{ background: 'linear-gradient(180deg, #071d3d 0%, #082B5C 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingFallback />}>
            <VirtualTourEmbed
              className="min-h-[650px] lg:min-h-[calc(100vh-10rem)]"
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex min-h-[650px] items-center justify-center rounded-2xl bg-[#0B2D5C] lg:min-h-[calc(100vh-10rem)]">
      <p className="font-display text-lg text-white/70">Memuat Virtual Tour…</p>
    </div>
  );
}
