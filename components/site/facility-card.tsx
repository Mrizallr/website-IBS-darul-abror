'use client';

import Link from 'next/link';
import {
  ArrowRight, Compass, MapPin, Building2, Landmark, School,
  FlaskConical, BookOpen, Presentation, Trees, UtensilsCrossed,
  WashingMachine, CookingPot, type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Facility } from '@/lib/site';

const iconMap: Record<string, LucideIcon> = {
  Dome: Landmark, Landmark, Building2, School, FlaskConical,
  BookOpen, Presentation, Trees, UtensilsCrossed, WashingMachine, CookingPot,
};

export default function FacilityCard({ facility, className }: { facility: Facility; className?: string }) {
  const Icon = iconMap[facility.icon] ?? Building2;

  return (
    <article className={cn(
      'group relative overflow-hidden rounded-2xl border border-[#082B5C]/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0759B8]/20 hover:shadow-card',
      className
    )}>
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={facility.image}
          alt={facility.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-lg bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0759B8] backdrop-blur">
          {facility.category}
        </span>
        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0759B8] text-white shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-col gap-2.5 p-5">
        <h3 className="font-display text-base font-semibold text-[#082B5C]">
          {facility.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#64748B]">
          {facility.description}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
          <MapPin className="h-3.5 w-3.5 text-[#168BEA]" />
          {facility.location}
        </div>
        <div className="mt-1 border-t border-[#EAF6FF] pt-3">
          {facility.inTour ? (
            <Link
              href={`/virtual-tour?loc=${facility.id}`}
              className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-[#0759B8] transition-colors hover:text-[#082B5C]"
            >
              <Compass className="h-4 w-4" />
              Jelajahi
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          ) : (
            <span className="text-xs text-[#64748B]/60">Tidak tersedia di tur</span>
          )}
        </div>
      </div>
    </article>
  );
}
