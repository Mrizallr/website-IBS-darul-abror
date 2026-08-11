'use client';

import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: Props) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className={cn('mb-3 flex items-center gap-2', align === 'center' && 'justify-center')}>
          <span className="h-px w-5 bg-[#F5B51B]" />
          <span className={cn(
            'text-xs font-semibold uppercase tracking-[0.22em]',
            light ? 'text-[#F5B51B]' : 'text-[#0759B8]'
          )}>
            {eyebrow}
          </span>
          <span className="h-px w-5 bg-[#F5B51B]" />
        </div>
      )}
      <h2 className={cn(
        'font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]',
        light ? 'text-white' : 'text-[#082B5C]'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-base leading-relaxed sm:text-lg',
          light ? 'text-white/75' : 'text-[#64748B]'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
