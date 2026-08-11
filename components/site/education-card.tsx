import Link from 'next/link';
import { Check, Compass } from 'lucide-react';
import type { EducationProgram } from '@/lib/site';

export default function EducationCard({ program }: { program: EducationProgram }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#082B5C]/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={program.image}
          alt={program.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/80 via-[#082B5C]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="inline-flex items-center rounded-lg bg-[#F5B51B] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#082B5C]">
            {program.level}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">{program.name}</h3>
          <p className="mt-1 text-sm text-white/75">{program.tagline}</p>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-relaxed text-[#64748B]">{program.description}</p>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0759B8]">Keunggulan</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {program.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[#172033]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF6FF] text-[#0759B8]">
                  <Check className="h-3 w-3" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0759B8]">Fasilitas</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {program.facilities.map((f) => (
              <span key={f} className="rounded-lg border border-[#EAF6FF] bg-[#EAF6FF] px-3 py-1 text-xs font-medium text-[#0759B8]">
                {f}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/virtual-tour"
          className="inline-flex items-center gap-2 rounded-xl bg-[#F5B51B] px-5 py-2.5 text-sm font-semibold text-[#082B5C] shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift"
        >
          <Compass className="h-4 w-4" />
          Jelajahi di Virtual Tour
        </Link>
      </div>
    </article>
  );
}
