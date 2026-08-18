'use client';

import Link from 'next/link';
import { Compass, ArrowRight, ArrowUpRight, Play, View } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/site/hero';
import SectionHeader from '@/components/site/section-header';
import FacilityCard from '@/components/site/facility-card';
import EducationCard from '@/components/site/education-card';
import GalleryGrid from '@/components/site/gallery-grid';
import CTASection from '@/components/site/cta-section';
import Reveal from '@/components/site/reveal';
import Counter from '@/components/site/counter';
import { facilities, educationPrograms, galleryItems, stats, SITE } from '@/lib/site';

const TOUR_PREVIEW = '/assets/images/Gerbang.webp';
const INTRO_IMAGE = '/assets/images/DepanSMPIT.webp';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SECTION 2 — Introduction */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={INTRO_IMAGE}
                  alt="Kegiatan santri Pondok Pesantren Darul Abror"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[#082B5C]/8 bg-white p-5 shadow-lift sm:block">
                <p className="font-display text-3xl font-semibold text-[#082B5C]">
                  {new Date().getFullYear() - SITE.establishedYear}+
                </p>
                <p className="text-sm text-[#64748B]">Tahun Mendidik Generasi</p>
              </div>
              <div className="absolute -left-4 -top-4 hidden h-20 w-20 rounded-2xl border border-[#F5B51B]/30 bg-[#F5B51B]/8 lg:block" />
            </Reveal>

            <Reveal delay={120}>
              <SectionHeader
                eyebrow="Tentang Darul Abror"
                title="Pesantren Terpadu dengan Visi Generasi Qur'ani"
                description="Pondok Pesantren Darul Abror IBS Garut adalah lembaga pendidikan Islam yang memadukan kurikulum nasional dengan pendidikan agama yang mendalam, dalam lingkungan asri yang menumbuhkan akhlak mulia."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  'Pendidikan akademik dan agama yang seimbang',
                  'Lingkungan asri di kaki Gunung Garut',
                  'Pembinaan akhlak dan kemandirian santri',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF6FF] text-[#0759B8]">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[#172033]/85">{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-9 bg-[#0759B8] text-white transition-all hover:bg-[#082B5C]"
              >
                <Link href="/profil">
                  Selengkapnya
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Virtual Tour Feature */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: 'linear-gradient(135deg, #082B5C 0%, #0759B8 55%, #168BEA 100%)' }}
      >
        <div className="pattern-islamic absolute inset-0 opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow="Pengalaman Interaktif"
                title="Jelajahi Darul Abror Secara Virtual"
                description="Rasakan pengalaman menjelajahi lingkungan Pondok Pesantren Darul Abror melalui teknologi Virtual Tour 360°. Putar, zoom, dan navigasi setiap sudut pesantren dari mana saja."
                light
              />
              <div className="mt-8 flex flex-wrap gap-5">
                {[
                  { icon: View, label: '360° Panorama' },
                  { icon: Compass, label: '10+ Lokasi' },
                  { icon: Play, label: 'Mudah Dijelajah' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-white/80">{f.label}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="mt-9 bg-[#F5B51B] text-[#082B5C] font-semibold shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift"
              >
                <a href="https://virtual-tour-darul-abror.web.app/" target="_blank" rel="noopener noreferrer">
                  <Compass className="mr-2 h-5 w-5" />
                  Mulai Virtual Tour 360°
                </a>
              </Button>
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative">
                <div className="absolute -inset-3 rounded-[2rem] border border-[#F5B51B]/25 bg-[#F5B51B]/5" />
                <div className="relative overflow-hidden rounded-2xl shadow-lift">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TOUR_PREVIEW}
                    alt="Preview Virtual Tour 360°"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/80 via-[#082B5C]/15 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <a
                    href="https://virtual-tour-darul-abror.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mulai Virtual Tour"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#F5B51B] text-[#082B5C] shadow-gold transition-transform duration-300 group-hover:scale-110">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#F5B51B]/40" />
                      <Play className="ml-1 h-8 w-8" />
                    </span>
                  </a>
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-lg bg-white/92 px-3 py-1.5 text-xs font-semibold text-[#0759B8] backdrop-blur">
                    <View className="h-4 w-4" />
                    360°
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-[#F5B51B]">Virtual Tour</p>
                      <p className="font-display text-lg font-semibold text-white">Tur Utama Darul Abror</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Statistics */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="rounded-2xl border border-[#082B5C]/8 bg-white p-8 text-center shadow-soft">
                  <p className="font-display text-4xl font-semibold text-[#0759B8] lg:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#64748B]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Facilities */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Fasilitas Pesantren"
              title="Fasilitas yang Mendukung Pendidikan Santri"
              description="Setiap fasilitas dirancang untuk menunjang kenyamanan, keamanan, dan kualitas pendidikan santri di Pondok Pesantren Darul Abror."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facilities.slice(0, 8).map((f, i) => (
              <Reveal key={f.id} delay={(i % 4) * 80}>
                <FacilityCard facility={f} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#0759B8]/25 text-[#0759B8] transition-all hover:bg-[#0759B8] hover:text-white"
            >
              <Link href="/fasilitas">
                Lihat Semua Fasilitas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Education */}
      <section className="relative py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #EAF6FF 0%, #FFFFFF 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Pendidikan"
              title="Jenjang Pendidikan Darul Abror"
              description="Dari jenjang SMP hingga SMA, Darul Abror menyiapkan santri menjadi generasi yang berilmu, berakhlak, dan siap berkontribusi."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {educationPrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 120}>
                <EducationCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Gallery preview */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeader
                eyebrow="Galeri"
                title="Momen di Lingkungan Darul Abror"
                description="Sekilas potret kegiatan, fasilitas, dan keseharian santri di pesantren."
              />
              <Button
                asChild
                variant="outline"
                className="border-[#0759B8]/25 text-[#0759B8] transition-all hover:bg-[#0759B8] hover:text-white"
              >
                <Link href="/galeri">
                  Lihat Semua
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <CTASection />
    </>
  );
}
