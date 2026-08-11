'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems, SITE } from '@/lib/site';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        transparent
          ? 'border-b border-transparent py-5'
          : 'glass-nav border-b border-[#082B5C]/10 bg-white/95 py-3 shadow-soft'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className={cn(
            'relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300',
            transparent
              ? 'border-white/25 bg-white/10 backdrop-blur-sm'
              : 'border-[#082B5C]/10 bg-white shadow-soft'
          )}>
            <Image
              src="/assets/logo/mahad.png"
              alt="Logo Darul Abror IBS"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={cn(
              'font-display text-base font-semibold tracking-tight transition-colors duration-300',
              transparent ? 'text-white' : 'text-[#082B5C]'
            )}>
              Darul Abror
            </span>
            <span className={cn(
              'text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300',
              transparent ? 'text-white/65' : 'text-[#64748B]'
            )}>
              IBS Garut
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
                  transparent
                    ? active ? 'text-white' : 'text-white/75 hover:text-white hover:bg-white/10'
                    : active ? 'text-[#082B5C]' : 'text-[#64748B] hover:text-[#082B5C] hover:bg-[#EAF6FF]'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#F5B51B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-[#F5B51B] text-[#082B5C] font-semibold shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift sm:inline-flex"
          >
            <Link href="/virtual-tour">
              <Compass className="mr-1.5 h-4 w-4" />
              Jelajahi Virtual Tour
            </Link>
          </Button>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden',
              transparent
                ? 'border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                : 'border-[#082B5C]/15 bg-white text-[#082B5C] hover:bg-[#EAF6FF]'
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 bottom-0 top-[var(--nav-h,4rem)] z-40 overflow-y-auto bg-white transition-all duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        style={{ ['--nav-h' as string]: '0px' }}
      >
        <div className="flex flex-col gap-1 px-4 pb-10 pt-6">
          {navItems.map((item, i) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center justify-between rounded-xl border px-5 py-4 text-base font-medium transition-all',
                  active
                    ? 'border-[#F5B51B]/30 bg-[#EAF6FF] text-[#082B5C]'
                    : 'border-transparent bg-[#F8FAFC] text-[#64748B] hover:border-[#082B5C]/10 hover:text-[#082B5C]',
                  open ? 'animate-fade-in-up' : ''
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
                {active && <span className="h-2 w-2 rounded-full bg-[#F5B51B]" />}
              </Link>
            );
          })}
          <Button
            asChild
            className="mt-4 bg-[#F5B51B] text-[#082B5C] font-semibold hover:bg-[#F5B51B]/90"
            size="lg"
          >
            <Link href="/virtual-tour">
              <Compass className="mr-2 h-5 w-5" />
              Jelajahi Virtual Tour
            </Link>
          </Button>
          <p className="mt-6 text-center text-sm text-[#64748B]">{SITE.fullName}</p>
        </div>
      </div>
    </header>
  );
}
