'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Compass, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';

const HERO_IMAGE =
  'https://images.pexels.com/photos/12565201/pexels-photo-12565201.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Lingkungan Pondok Pesantren Darul Abror"
          className="h-full w-full object-cover"
          style={{
            transform: mounted ? 'scale(1)' : 'scale(1.08)',
            transition: 'transform 2.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {/* Brand gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(8,43,92,0.82) 0%, rgba(7,89,184,0.65) 55%, rgba(22,139,234,0.45) 100%)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 pt-24 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur transition-all duration-700',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B51B]" />
            {SITE.fullName}
          </div>

          {/* Headline */}
          <h1 className={cn(
            'font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl transition-all duration-700 delay-100',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}>
            Kenali Lebih Dekat Lingkungan
            <span className="block text-[#F5B51B]">Pondok Pesantren Darul Abror</span>
          </h1>

          {/* Description */}
          <p className={cn(
            'mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg transition-all duration-700 delay-200',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}>
            Jelajahi lingkungan, fasilitas, dan berbagai ruang pendidikan Pondok
            Pesantren Darul Abror secara interaktif melalui pengalaman Virtual Tour 360°.
          </p>

          {/* CTAs */}
          <div className={cn(
            'mt-7 flex flex-col gap-3 transition-all duration-700 delay-300 sm:flex-row sm:items-center',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}>
            <Button
              asChild
              size="lg"
              className="bg-[#F5B51B] text-[#082B5C] font-semibold shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift"
            >
              <Link href="/virtual-tour">
                <Compass className="mr-2 h-5 w-5" />
                Jelajahi Virtual Tour 360°
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/8 text-white backdrop-blur transition-all hover:bg-white/15 hover:border-white/50"
            >
              <Link href="/profil">
                Tentang Darul Abror
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
          Scroll untuk menjelajah
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-hint rounded-full bg-white/70" />
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
