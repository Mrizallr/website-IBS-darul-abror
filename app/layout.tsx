import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';
import BackToTop from '@/components/site/back-to-top';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Pondok Pesantren Darul Abror IBS Garut — Virtual Tour 360°',
  description:
    'Jelajahi lingkungan, fasilitas, dan ruang pendidikan Pondok Pesantren Darul Abror IBS Garut secara interaktif melalui pengalaman Virtual Tour 360°.',
  keywords: [
    'pesantren garut',
    'darul abror',
    'virtual tour 360',
    'smpit',
    'smait',
    'pondok pesantren',
  ],
  icons: {
    icon: '/assets/logo/mahad.png',
    apple: '/assets/logo/mahad.png',
  },
  openGraph: {
    title: 'Pondok Pesantren Darul Abror IBS Garut — Virtual Tour 360°',
    description:
      'Jelajahi lingkungan, fasilitas, dan ruang pendidikan Pondok Pesantren Darul Abror secara interaktif melalui Virtual Tour 360°.',
    type: 'website',
    images: ['/assets/logo/mahad.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
