'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, Compass } from 'lucide-react';
import PageHeader from '@/components/site/page-header';
import FacilityCard from '@/components/site/facility-card';
import Reveal from '@/components/site/reveal';
import CTASection from '@/components/site/cta-section';
import { facilities } from '@/lib/site';
import { cn } from '@/lib/utils';

const categories = ['Semua', 'Ibadah', 'Pendidikan', 'Asrama', 'Umum'] as const;
type Category = (typeof categories)[number];

export default function FasilitasPage() {
  const [active, setActive] = useState<Category>('Semua');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return facilities.filter((f) => {
      const matchCat = active === 'Semua' || f.category === active;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.location.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHeader
        eyebrow="Fasilitas"
        title="Fasilitas Pondok Pesantren Darul Abror"
        description="Jelajahi berbagai fasilitas yang tersedia untuk menunjang pendidikan dan keseharian santri."
        crumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Fasilitas' },
        ]}
        image="https://images.pexels.com/photos/15621411/pexels-photo-15621411.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-[#64748B]" />
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={cn(
                    'shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200',
                    active === c
                      ? 'border-[#0759B8] bg-[#0759B8] text-white shadow-soft'
                      : 'border-[#082B5C]/10 bg-white text-[#64748B] hover:border-[#0759B8]/30 hover:text-[#082B5C]'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari fasilitas…"
                className="w-full rounded-xl border border-[#082B5C]/10 bg-white py-2.5 pl-10 pr-4 text-sm text-[#172033] placeholder:text-[#64748B]/60 focus:border-[#0759B8] focus:outline-none focus:ring-2 focus:ring-[#0759B8]/15"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-[#64748B]">
            Menampilkan <span className="font-semibold text-[#082B5C]">{filtered.length}</span> fasilitas
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((f, i) => (
                <Reveal key={f.id} delay={(i % 4) * 70}>
                  <FacilityCard facility={f} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#082B5C]/10 bg-[#EAF6FF]/40 py-20 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#0759B8]">
                <Search className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-[#082B5C]">
                Fasilitas tidak ditemukan
              </p>
              <p className="mt-1 text-sm text-[#64748B]">
                Coba kata kunci atau kategori lain.
              </p>
              <button
                type="button"
                onClick={() => { setQuery(''); setActive('Semua'); }}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0759B8] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#082B5C]"
              >
                <Compass className="h-4 w-4" />
                Reset pencarian
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
