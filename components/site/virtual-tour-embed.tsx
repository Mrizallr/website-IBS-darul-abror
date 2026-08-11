'use client';

import { useRef, useState } from 'react';
import { Compass, Maximize2, RotateCcw, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VIRTUAL_TOUR_URL } from '@/lib/site';

type Props = {
  className?: string;
};

export default function VirtualTourEmbed({ className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [key, setKey] = useState(0);

  const retry = () => {
    setError(false);
    setLoading(true);
    setKey((k) => k + 1);
  };

  const enterFullscreen = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div
      ref={wrapRef}
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-[#082B5C]/10 bg-[#082B5C] shadow-card',
        className
      )}
    >
      {/* Loading overlay */}
      {loading && !error && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#082B5C]">
          <span className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-[#F5B51B]/50" />
            <Compass className="h-7 w-7 animate-pulse text-[#F5B51B]" />
          </span>
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-white">
              Memuat Virtual Tour…
            </p>
            <p className="mt-1 text-sm text-white/55">
              Menyiapkan pengalaman 360°
            </p>
          </div>
        </div>
      )}

      {/* Error overlay */}
      {error && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-[#082B5C] px-6 text-center">
          <Compass className="h-10 w-10 text-white/30" />
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Gagal memuat Virtual Tour
            </p>
            <p className="mt-1 text-sm text-white/55">
              Periksa koneksi internet Anda, lalu coba lagi.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <RotateCcw className="h-4 w-4" />
              Coba Lagi
            </button>
            <a
              href={VIRTUAL_TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F5B51B] px-5 py-2.5 text-sm font-semibold text-[#082B5C] transition-all hover:bg-[#F5B51B]/90"
            >
              <ExternalLink className="h-4 w-4" />
              Buka di Tab Baru
            </a>
          </div>
        </div>
      )}

      {/* iframe */}
      <iframe
        key={key}
        src={VIRTUAL_TOUR_URL}
        title="Virtual Tour 360° Darul Abror IBS"
        allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr-spatial-tracking"
        allowFullScreen
        className={cn(
          'h-full w-full border-0 transition-opacity duration-700',
          loading || error ? 'opacity-0' : 'opacity-100'
        )}
        style={{ position: 'absolute', inset: 0 }}
        onLoad={() => setLoading(false)}
        onError={() => { setError(true); setLoading(false); }}
      />

      {/* Bottom controls — only visible when loaded */}
      {!loading && !error && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-3">
          <a
            href={VIRTUAL_TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <ExternalLink className="h-3 w-3" />
            Buka di Tab Baru
          </a>
          <button
            type="button"
            onClick={enterFullscreen}
            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <Maximize2 className="h-3 w-3" />
            Layar Penuh
          </button>
        </div>
      )}
    </div>
  );
}
