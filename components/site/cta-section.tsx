import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  ctaLabel?: string;
  href?: string;
};

export default function CTASection({
  title = 'Ingin Mengenal Darul Abror Lebih Dekat?',
  description = 'Jelajahi lingkungan Pondok Pesantren Darul Abror melalui pengalaman Virtual Tour 360°.',
  image = 'https://images.pexels.com/photos/12565201/pexels-photo-12565201.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ctaLabel = 'Jelajahi Virtual Tour 360°',
  href = '/virtual-tour',
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(8,43,92,0.94) 0%, rgba(7,89,184,0.90) 55%, rgba(22,139,234,0.88) 100%)'
        }} />
        <div className="pattern-islamic absolute inset-0 opacity-15" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5B51B]/30 bg-[#F5B51B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5B51B]">
          Virtual Tour 360°
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-[#F5B51B] text-[#082B5C] font-semibold shadow-gold transition-all hover:bg-[#F5B51B]/90 hover:shadow-lift"
          >
            <Link href={href}>
              <Compass className="mr-2 h-5 w-5" />
              {ctaLabel}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/8 text-white backdrop-blur transition-all hover:bg-white/15"
          >
            <Link href="/kontak">
              Hubungi Kami
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
