import Link from 'next/link';
import { ArrowRight, Target, Eye, Flag, FileCheck, Building2, BookOpen, LayoutGrid, Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/site/page-header';
import SectionHeader from '@/components/site/section-header';
import Reveal from '@/components/site/reveal';
import CTASection from '@/components/site/cta-section';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Profil — Pondok Pesantren Darul Abror IBS Garut',
  description:
    'Sejarah, profil, visi, misi, dan tujuan Pondok Pesantren Darul Abror IBS Garut.',
};

type TimelineItem = {
  marker: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  isYear?: boolean;
  isCta?: boolean;
};

const timeline: TimelineItem[] = [
  {
    marker: '2017',
    isYear: true,
    icon: FileCheck,
    title: 'Tonggak Izin Operasional SMPIT',
    desc: 'Darul Abror Islamic Boarding School memperoleh izin operasional untuk jenjang SMP Islam Terpadu Darul Abror Islamic Boarding School.',
  },
  {
    marker: 'Pendidikan Boarding',
    icon: Building2,
    title: 'Pengembangan Pendidikan Berbasis Asrama',
    desc: 'Darul Abror IBS menyelenggarakan pendidikan dengan sistem boarding yang memadukan pendidikan umum dan pendidikan keislaman untuk membentuk karakter serta kemandirian santri.',
  },
  {
    marker: 'Program Unggulan',
    icon: BookOpen,
    title: 'Penguatan Pendidikan Islam',
    desc: 'Pendidikan dikembangkan melalui program seperti Tahfidz dan Tahsin Al-Qur\'an, pembinaan karakter Islami, Bahasa Arab dan Bahasa Inggris, serta berbagai kegiatan pengembangan potensi santri.',
  },
  {
    marker: 'Fasilitas Pendidikan',
    icon: LayoutGrid,
    title: 'Lingkungan Belajar dan Fasilitas Pendukung',
    desc: 'Darul Abror IBS menyediakan lingkungan pendidikan dan fasilitas yang mendukung kegiatan belajar, ibadah, kehidupan asrama, olahraga, serta aktivitas santri.',
  },
  {
    marker: '2026',
    isYear: true,
    isCta: true,
    icon: Compass,
    title: 'Pengembangan Virtual Tour 360°',
    desc: 'Virtual Tour 360° dikembangkan sebagai media informasi berbasis website untuk membantu masyarakat, calon santri, dan wali santri mengenal lingkungan serta fasilitas Pondok Pesantren Darul Abror IBS secara lebih interaktif.',
  },
];

const misi = [
  'Menyelenggarakan pendidikan agama Islam yang berlandaskan Al-Qur\'an dan Sunnah.',
  'Memberikan pendidikan akademik sesuai kurikulum nasional yang berkualitas.',
  'Membentuk akhlak mulia dan kemandirian santri dalam kehidupan sehari-hari.',
  'Menumbuhkan semangat kepemimpinan dan kepedulian sosial santri.',
];

const tujuan = [
  'Menghasilkan generasi yang hafal dan memahami Al-Qur\'an.',
  'Mempersiapkan santri melanjutkan pendidikan ke jenjang yang lebih tinggi.',
  'Membentuk pribadi muslim yang berakhlak mulia, mandiri, dan berjiwa sosial.',
];

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Profil Pesantren"
        title="Profil Pondok Pesantren Darul Abror"
        description="Mengenal lebih dekat sejarah, visi, misi, dan tujuan Pondok Pesantren Darul Abror IBS Garut sebagai lembaga pendidikan Islam."
        crumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Profil' },
        ]}
        image="https://images.pexels.com/photos/36351421/pexels-photo-36351421.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Profil singkat */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/36463780/pexels-photo-36463780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Kegiatan belajar santri"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeader
                eyebrow="Profil"
                title="Lembaga Pendidikan Islam Terpadu di Garut"
                description={SITE.description}
              />
              <p className="mt-6 text-[#172033]/80">
                Berlokasi di kaki Gunung Garut yang asri, Pondok Pesantren Darul
                Abror IBS Garut hadir sebagai rumah kedua bagi santri yang
                menuntut ilmu agama dan umum. Dengan sistem asrama yang terawat,
                santri dibimbing menjadi pribadi yang berilmu, berakhlak, dan
                mandiri.
              </p>
              <Button asChild className="mt-8 bg-[#0759B8] text-white hover:bg-[#082B5C]">
                <Link href="/pendidikan">
                  Lihat Program Pendidikan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline — Perjalanan Darul Abror IBS */}
      <section className="relative py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #EAF6FF 0%, #FFFFFF 100%)' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Perkembangan"
              title="Perjalanan Darul Abror IBS"
              description="Tonggak perkembangan pendidikan dan layanan Pondok Pesantren Darul Abror IBS Garut."
              className="mx-auto"
            />
          </Reveal>

          <div className="relative mt-16">
            {/* Vertical line — desktop center, mobile left */}
            <div className="absolute left-[1.1rem] top-0 h-full w-px bg-gradient-to-b from-[#F5B51B] via-[#0759B8]/40 to-[#0759B8]/10 sm:left-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                const isRight = i % 2 !== 0;
                return (
                  <Reveal key={item.marker} delay={i * 80}>
                    <div
                      className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                        isRight ? 'sm:flex-row-reverse' : 'sm:flex-row'
                      }`}
                    >
                      {/* Dot */}
                      <div
                        className={`absolute left-[1.1rem] z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 shadow-soft sm:left-1/2 ${
                          item.isYear
                            ? 'border-[#F5B51B] bg-[#F5B51B] text-[#082B5C]'
                            : 'border-[#0759B8] bg-white text-[#0759B8]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      {/* Card */}
                      <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                        <div
                          className={`rounded-2xl border bg-white p-6 shadow-soft transition-shadow hover:shadow-card ${
                            item.isCta
                              ? 'border-[#F5B51B]/35 bg-gradient-to-br from-[#EAF6FF] to-white'
                              : 'border-[#082B5C]/8'
                          }`}
                        >
                          {/* Marker badge */}
                          <span
                            className={`inline-flex items-center rounded-lg px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                              item.isYear
                                ? 'bg-[#F5B51B]/15 text-[#8a5e00]'
                                : 'bg-[#EAF6FF] text-[#0759B8]'
                            }`}
                          >
                            {item.marker}
                          </span>
                          <h3 className="mt-3 font-display text-base font-semibold text-[#082B5C] sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                            {item.desc}
                          </p>
                          {item.isCta && (
                            <Link
                              href="/virtual-tour"
                              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#F5B51B] px-4 py-2 text-xs font-semibold text-[#082B5C] shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift"
                            >
                              <Compass className="h-3.5 w-3.5" />
                              Jelajahi Virtual Tour 360°
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Spacer opposite side */}
                      <div className="hidden sm:block sm:w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Tujuan */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Visi */}
            <Reveal>
              <div className="h-full rounded-2xl border border-[#082B5C]/8 bg-white p-8 shadow-soft transition-shadow hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6FF] text-[#0759B8]">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#082B5C]">Visi</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  Menjadi pusat pendidikan Islam yang membentuk generasi
                  Qur\'ani yang berakhlak mulia, berilmu, mandiri, dan bermanfaat
                  bagi umat serta bangsa.
                </p>
              </div>
            </Reveal>

            {/* Misi */}
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-[#082B5C]/8 bg-white p-8 shadow-soft transition-shadow hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6FF] text-[#0759B8]">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#082B5C]">Misi</h3>
                <ul className="mt-3 space-y-2.5">
                  {misi.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-[#64748B]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5B51B]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Tujuan */}
            <Reveal delay={240}>
              <div className="h-full rounded-2xl border border-[#082B5C]/8 bg-white p-8 shadow-soft transition-shadow hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6FF] text-[#0759B8]">
                  <Flag className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#082B5C]">Tujuan</h3>
                <ul className="mt-3 space-y-2.5">
                  {tujuan.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-[#64748B]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5B51B]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Jelajahi Lingkungan Darul Abror"
        description="Lihat langsung suasana dan fasilitas pesantren melalui Virtual Tour 360°."
      />
    </>
  );
}
