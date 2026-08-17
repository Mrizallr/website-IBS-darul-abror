export const SITE = {
  name: 'Pondok Pesantren Darul Abror',
  fullName: 'Pondok Pesantren Darul Abror IBS Garut',
  shortName: 'Darul Abror',
  tagline: 'Membentuk Generasi Qur\'ani yang Berakhlak Mulia',
  description:
    'Pondok Pesantren Terpadu yang memadukan pendidikan agama Islam dengan kurikulum nasional, membentuk generasi yang berilmu, berakhlak, dan siap menghadapi era modern.',
  email: 'info@darulabroribs.sch.id',
  phone: '0813-9090-6600',
  whatsapp: '6281390906600',
  address: 'Jalan Raya Samarang (Malayu), Desa Mekarwangi, Kecamatan Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151',
  mapsQuery: 'Pondok Pesantren Darul Abror IBS Garut Mekarwangi Tarogong Kaler',
  social: {
    instagram: 'https://www.instagram.com/darul.abror_ibs/?hl=id',
    youtube: 'https://www.youtube.com/@OfficialDarulAbror',
    facebook: 'https://www.facebook.com/Darulabror.malayu/',
  },
  establishedYear: 1998,
} as const;

/**
 * Virtual Tour 3DVista — ganti URL ini dengan URL hasil hosting 3DVista.
 * Setiap lokasi dapat memiliki URL terpisah, atau menggunakan satu tur utama.
 */
export const VIRTUAL_TOUR_URL = 'https://virtual-tour-darul-abror.web.app/';

export type TourLocation = {
  id: string;
  name: string;
  category: 'Ibadah' | 'Pendidikan' | 'Asrama' | 'Umum';
  thumbnail: string;
  tourUrl?: string;
  description: string;
};

export const tourLocations: TourLocation[] = [
  {
    id: 'masjid',
    name: 'Masjid',
    category: 'Ibadah',
    thumbnail: '/assets/images/Masjid.webp',
    description: 'Pusat ibadah dan kegiatan keagamaan santri.',
  },
  {
    id: 'asrama-putra',
    name: 'Asrama Putra',
    category: 'Asrama',
    thumbnail: '/assets/images/AsramaPutra.webp',
    description: 'Tempat tinggal santri putra yang nyaman dan aman.',
  },
  {
    id: 'asrama-putri',
    name: 'Asrama Akhwat Lt.2',
    category: 'Asrama',
    thumbnail: '/assets/images/AsramaAkhwat.webp',
    description: 'Asrama santri putri dengan pengawasan penuh.',
  },
  {
    id: 'smpit',
    name: 'SMPIT',
    category: 'Pendidikan',
    thumbnail:
      'https://images.pexels.com/photos/37758607/pexels-photo-37758607.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ruang kelas SMP Terpadu Islam Darul Abror.',
  },
  {
    id: 'smait',
    name: 'SMAIT',
    category: 'Pendidikan',
    thumbnail:
      'https://images.pexels.com/photos/37812834/pexels-photo-37812834.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ruang kelas SMA Terpadu Islam Darul Abror.',
  },
  {
    id: 'aula',
    name: 'Aula',
    category: 'Umum',
    thumbnail: '/assets/images/GorSerbaguna.webp',
    description: 'Aula serbaguna untuk acara dan kegiatan besar.',
  },
  {
    id: 'laboratorium',
    name: 'Laboratorium',
    category: 'Pendidikan',
    thumbnail:
      'https://images.pexels.com/photos/19393166/pexels-photo-19393166.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Laboratorium IPA lengkap untuk praktikum santri.',
  },
  {
    id: 'perpustakaan',
    name: 'Perpustakaan',
    category: 'Pendidikan',
    thumbnail: '/assets/images/Perpustakaan.webp',
    description: 'Perpustakaan dengan koleksi buku Islami dan umum.',
  },
  {
    id: 'lapangan',
    name: 'Lapangan',
    category: 'Umum',
    thumbnail:
      'https://images.pexels.com/photos/37478244/pexels-photo-37478244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Lapangan olahraga dan upacara santri.',
  },
  {
    id: 'kantin',
    name: 'Kantin',
    category: 'Umum',
    thumbnail: '/assets/images/Kantin.webp',
    description: 'Kantin sehat dengan menu harian bergizi.',
  },
];

export type Facility = {
  id: string;
  name: string;
  category: 'Ibadah' | 'Pendidikan' | 'Asrama' | 'Umum';
  image: string;
  description: string;
  location: string;
  inTour: boolean;
  icon: string;
};

export const facilities: Facility[] = [
  {
    id: 'masjid',
    name: 'Masjid',
    category: 'Ibadah',
    image: '/assets/images/Masjid.webp',
    description:
      'Pusat ibadah dan kegiatan keagamaan santri, dengan kapasitas jamaah yang luas.',
    location: 'Pusat kompleks pesantren',
    inTour: true,
    icon: 'Dome',
  },
  {
    id: 'asrama-putra',
    name: 'Asrama Putra',
    category: 'Asrama',
    image: '/assets/images/AsramaPutra.webp',
    description:
      'Asrama santri putra dengan lingkungan yang nyaman, aman, dan terawat.',
    location: 'Blok barat kompleks',
    inTour: true,
    icon: 'Building2',
  },
  {
    id: 'asrama-putri',
    name: 'Asrama Akhwat Lt.2',
    category: 'Asrama',
    image: '/assets/images/AsramaAkhwat.webp',
    description:
      'Asrama santri putri dengan pengawasan penuh dan fasilitas yang memadai.',
    location: 'Blok timur kompleks',
    inTour: true,
    icon: 'Building2',
  },
  {
    id: 'smpit',
    name: 'SMPIT',
    category: 'Pendidikan',
    image: '/assets/images/DepanSMPIT.webp',
    description:
      'Sekolah Menengah Pertama Terpadu Islam dengan kurikulum nasional dan agama.',
    location: 'Gedung pendidikan lantai 1',
    inTour: true,
    icon: 'School',
  },
  {
    id: 'smait',
    name: 'SMAIT',
    category: 'Pendidikan',
    image:
      'https://images.pexels.com/photos/37812834/pexels-photo-37812834.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Sekolah Menengah Atas Terpadu Islam yang mempersiapkan santri menuju perguruan tinggi.',
    location: 'Gedung pendidikan lantai 2',
    inTour: true,
    icon: 'School',
  },
  {
    id: 'perpustakaan',
    name: 'Perpustakaan',
    category: 'Pendidikan',
    image: '/assets/images/Perpustakaan.webp',
    description:
      'Perpustakaan dengan koleksi buku Islami dan umum, ruang baca yang tenang.',
    location: 'Gedung pendidikan sayap kanan',
    inTour: true,
    icon: 'BookOpen',
  },
  {
    id: 'aula',
    name: 'Aula',
    category: 'Umum',
    image: '/assets/images/GorSerbaguna.webp',
    description:
      'Aula serbaguna untuk acara besar, pertemuan, dan kegiatan santri.',
    location: 'Gedung pusat kompleks',
    inTour: true,
    icon: 'Presentation',
  },
  {
    id: 'lapangan',
    name: 'Lapangan',
    category: 'Umum',
    image:
      'https://images.pexels.com/photos/37478244/pexels-photo-37478244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Lapangan olahraga dan upacara dengan rumput hijau yang terawat.',
    location: 'Area terbuka pusat kompleks',
    inTour: true,
    icon: 'Trees',
  },
  {
    id: 'kantin',
    name: 'Kantin',
    category: 'Umum',
    image: '/assets/images/Kantin.webp',
    description:
      'Kantin sehat dengan menu harian bergizi dan standar kebersihan tinggi.',
    location: 'Area makan pusat kompleks',
    inTour: true,
    icon: 'UtensilsCrossed',
  },
  {
    id: 'lab-komputer',
    name: 'Laboratorium Komputer',
    category: 'Pendidikan',
    image: '/assets/images/LabKomputer.webp',
    description:
      'Laboratorium komputer dengan perangkat modern untuk menunjang pembelajaran teknologi santri.',
    location: 'Gedung pendidikan sayap kiri',
    inTour: false,
    icon: 'Monitor',
  },
  {
    id: 'lapangan-basket',
    name: 'Lapangan Basket',
    category: 'Umum',
    image: '/assets/images/LapangBasket.webp',
    description: 'Lapangan basket untuk kegiatan olahraga dan ekstrakurikuler santri.',
    location: 'Area olahraga kompleks',
    inTour: false,
    icon: 'Trophy',
  },
  {
    id: 'ruang-tunggu',
    name: 'Ruang Tunggu Orang Tua',
    category: 'Umum',
    image: '/assets/images/RTungguOrtu.webp',
    description:
      'Ruang tunggu nyaman bagi orang tua santri saat berkunjung ke pesantren.',
    location: 'Gedung penerimaan tamu',
    inTour: false,
    icon: 'Sofa',
  },
];

export type EducationProgram = {
  id: string;
  name: string;
  level: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  facilities: string[];
  tourUrl?: string;
};

export const educationPrograms: EducationProgram[] = [
  {
    id: 'smpit',
    name: 'SMPIT Darul Abror',
    level: 'Sekolah Menengah Pertama Terpadu Islam',
    image: '/assets/images/DepanSMPIT.webp',
    tagline: 'Membentuk fondasi akademik dan akhlak santri muda',
    description:
      'Program SMP Terpadu Islam Darul Abror memadukan kurikulum nasional dengan pendidikan agama Islam yang intensif. Santri belajar dalam lingkungan yang Islami, dengan pendekatan pembelajaran modern yang menumbuhkan rasa ingin tahu dan akhlak mulia.',
    highlights: [
      'Kurikulum Nasional + Diniyah Terpadu',
      '11 kelas dengan rasio guru-santri ideal',
      'Tahfidz Al-Qur\'an terbimbing',
      'Bahasa Arab & Inggris aktif',
    ],
    facilities: [
      'Ruang kelas ber-AC',
      'Laboratorium IPA',
      'Perpustakaan',
      'Lapangan olahraga',
    ],
  },
  {
    id: 'smait',
    name: 'SMAIT Darul Abror',
    level: 'Sekolah Menengah Atas Terpadu Islam',
    image: '/assets/images/DepanSMAIT.webp',
    tagline: 'Mempersiapkan santri menuju perguruan tinggi dan kepemimpinan',
    description:
      'Program SMA Terpadu Islam Darul Abror dirancang untuk mempersiapkan santri menuju perguruan tinggi unggulan. Dengan fokus pada akademik, kepemimpinan, dan kedalaman agama, santri dilatih menjadi generasi yang siap berkontribusi bagi umat dan bangsa.',
    highlights: [
      '4 kelas dengan program peminatan IPA & IPS',
      'Bimbingan masuk perguruan tinggi',
      'Tahfidz & Tafsir Al-Qur\'an',
      'Program kepemimpinan santri',
    ],
    facilities: [
      'Ruang kelas ber-AC',
      'Laboratorium IPA & Komputer',
      'Perpustakaan referensi',
      'Aula serbaguna',
    ],
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: 'Lingkungan' | 'Fasilitas' | 'Kegiatan' | 'Pendidikan';
  span?: 'wide' | 'tall' | 'normal';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: '/assets/images/Masjid.webp',
    alt: 'Masjid Pondok Pesantren Darul Abror',
    category: 'Fasilitas',
    span: 'wide',
  },
  {
    id: 'g2',
    src: '/assets/images/KegiatanTadarus.webp',
    alt: 'Kegiatan Tadarus santri Darul Abror',
    category: 'Kegiatan',
    span: 'tall',
  },
  {
    id: 'g3',
    src: '/assets/images/DepanSMPIT.webp',
    alt: 'Halaman Depan SMPIT Darul Abror',
    category: 'Pendidikan',
    span: 'wide',
  },
  {
    id: 'g4',
    src: '/assets/images/DepanSMAIT.webp',
    alt: 'Halaman Depan SMAIT Darul Abror',
    category: 'Pendidikan',
    span: 'normal',
  },
  {
    id: 'g5',
    src: '/assets/images/KegiatanDzuhur.webp',
    alt: 'Kegiatan Kajian Dzuhur santri',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g6',
    src: '/assets/images/Kegiatan2.webp',
    alt: 'Kegiatan santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g7',
    src: '/assets/images/Kegiatan3.webp',
    alt: 'Kegiatan santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g8',
    src: '/assets/images/LapangBasket.webp',
    alt: 'Lapangan Basket Darul Abror',
    category: 'Fasilitas',
    span: 'wide',
  },
  {
    id: 'g9',
    src: '/assets/images/Mukhoyam1.webp',
    alt: 'Kegiatan Mukhoyam santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g10',
    src: '/assets/images/Mukhoyam2.webp',
    alt: 'Kegiatan Mukhoyam santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g11',
    src: '/assets/images/Mukhoyam3.webp',
    alt: 'Kegiatan Mukhoyam santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g12',
    src: '/assets/images/pnd1.webp',
    alt: 'Kegiatan santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g13',
    src: '/assets/images/pnd2.webp',
    alt: 'Kegiatan santri Darul Abror',
    category: 'Kegiatan',
    span: 'normal',
  },
];

export const stats = [
  { value: 11, label: 'Kelas SMPIT', suffix: '' },
  { value: 4, label: 'Kelas SMAIT', suffix: '' },
  { value: 6, label: 'Asrama Putra', suffix: '' },
  { value: 5, label: 'Asrama Putri', suffix: '' },
];

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  { label: 'Pendidikan', href: '/pendidikan' },
  { label: 'Virtual Tour', href: '/virtual-tour' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
];
