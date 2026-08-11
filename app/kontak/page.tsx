import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/site/page-header';
import Reveal from '@/components/site/reveal';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Kontak — Pondok Pesantren Darul Abror IBS Garut',
  description:
    'Hubungi Pondok Pesantren Darul Abror IBS Garut. Alamat, telepon, email, dan peta lokasi.',
};

export default function KontakPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Hubungi Darul Abror"
        description="Kami senang menyambut Anda. Hubungi kami atau kunjungi langsung lingkungan Pondok Pesantren Darul Abror."
        crumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Kontak' },
        ]}
        image="https://images.pexels.com/photos/11122257/pexels-photo-11122257.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Info */}
            <Reveal>
              <div className="space-y-5">
                <div className="rounded-2xl border border-[#082B5C]/8 bg-white p-6 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-[#082B5C]">Informasi Kontak</h2>
                  <ul className="mt-5 space-y-5">
                    <ContactRow icon={MapPin} label="Alamat" value={SITE.address} />
                    <ContactRow icon={Phone} label="Telepon" value={SITE.phone} href={`tel:${SITE.phone}`} />
                    <ContactRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                    <ContactRow icon={Clock} label="Jam Kunjungan" value="Setiap hari, 08.00 – 16.00 WIB" />
                  </ul>
                </div>

                {/* Social */}
                <div className="rounded-2xl border border-[#082B5C]/8 bg-white p-6 shadow-soft">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0759B8]">
                    Media Sosial
                  </h3>
                  <div className="mt-4 flex gap-3">
                    {[
                      { href: SITE.social.instagram, icon: Instagram, label: 'Instagram' },
                      { href: SITE.social.youtube, icon: Youtube, label: 'YouTube' },
                      { href: SITE.social.facebook, icon: Facebook, label: 'Facebook' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#082B5C]/10 bg-[#EAF6FF] text-[#0759B8] transition-all hover:border-[#F5B51B] hover:bg-[#F5B51B] hover:text-[#082B5C]"
                      >
                        <s.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#0759B8] text-white shadow-soft hover:bg-[#082B5C]"
                >
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Kunjungi Pondok Pesantren Darul Abror
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={150}>
              <div className="h-full overflow-hidden rounded-2xl border border-[#082B5C]/8 shadow-card">
                <iframe
                  src={mapSrc}
                  title="Peta lokasi Pondok Pesantren Darul Abror"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[420px] w-full"
                  style={{ border: 0 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF6FF] text-[#0759B8]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">{label}</p>
        <p className="mt-1 text-[#172033]/85">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="transition-opacity hover:opacity-80">{content}</a>
      ) : content}
    </li>
  );
}
