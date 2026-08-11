import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  align?: 'left' | 'center';
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
  image,
  align = 'left',
}: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 text-white lg:pt-40 lg:pb-20"
      style={{ background: 'linear-gradient(135deg, #082B5C 0%, #0759B8 55%, #168BEA 100%)' }}
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(8,43,92,0.88) 0%, rgba(7,89,184,0.80) 55%, rgba(22,139,234,0.72) 100%)'
          }} />
        </>
      )}
      <div className="pattern-islamic absolute inset-0 opacity-20" />

      <div className={cn(
        'relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        align === 'center' && 'text-center'
      )}>
        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              'mb-5 flex flex-wrap items-center gap-1.5 text-sm text-white/55',
              align === 'center' && 'justify-center'
            )}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5 text-white/35" />
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className={cn('mb-3 flex items-center gap-2', align === 'center' && 'justify-center')}>
            <span className="h-px w-5 bg-[#F5B51B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5B51B]">
              {eyebrow}
            </span>
            <span className="h-px w-5 bg-[#F5B51B]" />
          </div>
        )}

        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
          {title}
        </h1>
        {description && (
          <p className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg',
            align === 'center' && 'mx-auto'
          )}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
