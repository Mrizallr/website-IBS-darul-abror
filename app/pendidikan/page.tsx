import PageHeader from '@/components/site/page-header';
import EducationCard from '@/components/site/education-card';
import Reveal from '@/components/site/reveal';
import CTASection from '@/components/site/cta-section';
import { educationPrograms } from '@/lib/site';

export const metadata = {
  title: 'Pendidikan — Pondok Pesantren Darul Abror IBS Garut',
  description:
    'Program pendidikan SMPIT dan SMAIT Darul Abror — memadukan kurikulum nasional dengan pendidikan agama Islam.',
};

export default function PendidikanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pendidikan"
        title="Pendidikan Darul Abror"
        description="Dua jenjang pendidikan terpadu yang memadukan kurikulum nasional dengan pendidikan agama Islam yang mendalam."
        crumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Pendidikan' },
        ]}
        image="https://images.pexels.com/photos/7092523/pexels-photo-7092523.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #EAF6FF 0%, #FFFFFF 100%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:gap-12">
            {educationPrograms.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <EducationCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Jelajahi Ruang Pendidikan Darul Abror"
        description="Lihat langsung suasana kelas, laboratorium, dan perpustakaan melalui Virtual Tour 360°."
      />
    </>
  );
}
