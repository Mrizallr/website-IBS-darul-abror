import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { SITE, navItems } from '@/lib/site';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #082B5C 0%, #0759B8 70%, #168BEA 100%)' }}
    >
      <div className="pattern-islamic absolute inset-0 opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white">
                <Image
                  src="/assets/logo/mahad.png"
                  alt="Logo Darul Abror IBS"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">Darul Abror</p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/55">IBS Garut</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {SITE.description}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white/75 transition-all hover:border-[#F5B51B] hover:bg-[#F5B51B] hover:text-[#082B5C]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5B51B]">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5B51B]">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F5B51B]" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#F5B51B]" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#F5B51B]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 {SITE.fullName}</p>
          <p>Dibuat dengan niat baik untuk umat</p>
        </div>
      </div>
    </footer>
  );
}
