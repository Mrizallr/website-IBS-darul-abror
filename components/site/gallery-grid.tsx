'use client';

import { useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GalleryItem } from '@/lib/site';

const categories = ['Semua', 'Lingkungan', 'Fasilitas', 'Kegiatan', 'Pendidikan'] as const;
type Category = (typeof categories)[number];

export default function GalleryGrid({ items, className }: { items: GalleryItem[]; className?: string }) {
  const [active, setActive] = useState<Category>('Semua');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => active === 'Semua' ? items : items.filter((i) => i.category === active),
    [active, items]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((v) => v === null ? v : (v + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightbox((v) => v === null ? v : (v - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox, filtered.length]);

  return (
    <div className={className}>
      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              'rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200',
              active === c
                ? 'border-[#0759B8] bg-[#0759B8] text-white shadow-soft'
                : 'border-[#082B5C]/10 bg-white text-[#64748B] hover:border-[#0759B8]/30 hover:text-[#082B5C]'
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(idx)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-[#082B5C]/8 bg-white shadow-soft transition-all duration-300 hover:shadow-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={cn(
                'w-full object-cover transition-transform duration-700 group-hover:scale-105',
                item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/10]' : 'aspect-square'
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#F5B51B]">{item.category}</p>
                <p className="text-sm font-medium text-white">{item.alt}</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                <ZoomIn className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#082B5C]/95 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Tutup"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Sebelumnya"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? v : (v - 1 + filtered.length) % filtered.length); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/65">
              <span className="font-semibold text-[#F5B51B]">{filtered[lightbox].category}</span>
              {' '}— {filtered[lightbox].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Berikutnya"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? v : (v + 1) % filtered.length); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
