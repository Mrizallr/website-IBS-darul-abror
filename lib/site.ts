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
    thumbnail:
      'https://images.pexels.com/photos/11122257/pexels-photo-11122257.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pusat ibadah dan kegiatan keagamaan santri.',
  },
  {
    id: 'asrama-putra',
    name: 'Asrama Putra',
    category: 'Asrama',
    thumbnail:
      'https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tempat tinggal santri putra yang nyaman dan aman.',
  },
  {
    id: 'asrama-putri',
    name: 'Asrama Putri',
    category: 'Asrama',
    thumbnail:
      'https://images.pexels.com/photos/4907212/pexels-photo-4907212.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    thumbnail:
      'https://images.pexels.com/photos/31584584/pexels-photo-31584584.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    thumbnail:
      'https://images.pexels.com/photos/8926894/pexels-photo-8926894.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    thumbnail:
      'https://images.pexels.com/photos/36159723/pexels-photo-36159723.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image:
      'https://images.pexels.com/photos/11122257/pexels-photo-11122257.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image:
      'https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Asrama santri putra dengan lingkungan yang nyaman, aman, dan terawat.',
    location: 'Blok barat kompleks',
    inTour: true,
    icon: 'Building2',
  },
  {
    id: 'asrama-putri',
    name: 'Asrama Putri',
    category: 'Asrama',
    image:
      'https://images.pexels.com/photos/4907212/pexels-photo-4907212.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image:
      'https://images.pexels.com/photos/37758607/pexels-photo-37758607.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    id: 'laboratorium',
    name: 'Laboratorium',
    category: 'Pendidikan',
    image:
      'https://images.pexels.com/photos/19393166/pexels-photo-19393166.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Laboratorium IPA lengkap dengan peralatan modern untuk praktikum sains.',
    location: 'Gedung pendidikan sayap kiri',
    inTour: true,
    icon: 'FlaskConical',
  },
  {
    id: 'perpustakaan',
    name: 'Perpustakaan',
    category: 'Pendidikan',
    image:
      'https://images.pexels.com/photos/8926894/pexels-photo-8926894.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image:
      'https://images.pexels.com/photos/31584584/pexels-photo-31584584.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image:
      'https://images.pexels.com/photos/36159723/pexels-photo-36159723.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Kantin sehat dengan menu harian bergizi dan standar kebersihan tinggi.',
    location: 'Area makan pusat kompleks',
    inTour: true,
    icon: 'UtensilsCrossed',
  },
  {
    id: 'laundry',
    name: 'Laundry',
    category: 'Umum',
    image:
      'https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Layanan laundry santri dengan mesin cuci modern dan terjadwal.',
    location: 'Gedung utilitas kompleks',
    inTour: false,
    icon: 'WashingMachine',
  },
  {
    id: 'dapur',
    name: 'Dapur',
    category: 'Umum',
    image:
      'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Dapur bersih dengan standar higienitas untuk memasak menu santri harian.',
    location: 'Gedung utilitas kompleks',
    inTour: false,
    icon: 'CookingPot',
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
    image:
      'https://images.pexels.com/photos/37758607/pexels-photo-37758607.jpeg?auto=compress&cs=tinysrgb&w=1000',
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
    image:
      'https://images.pexels.com/photos/37812834/pexels-photo-37812834.jpeg?auto=compress&cs=tinysrgb&w=1000',
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
    src: 'https://images.pexels.com/photos/11122257/pexels-photo-11122257.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Masjid Darul Abror di pagi hari',
    category: 'Fasilitas',
    span: 'wide',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/36463780/pexels-photo-36463780.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Santri belajar mengaji bersama',
    category: 'Kegiatan',
    span: 'tall',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/31690905/pexels-photo-31690905.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Lapangan olahraga pesantren',
    category: 'Lingkungan',
    span: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/8926894/pexels-photo-8926894.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Santri di perpustakaan',
    category: 'Pendidikan',
    span: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/28141968/pexels-photo-28141968.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior masjid pesantren',
    category: 'Fasilitas',
    span: 'wide',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/37758607/pexels-photo-37758607.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kelas SMPIT Darul Abror',
    category: 'Pendidikan',
    span: 'normal',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/36493690/pexels-photo-36493690.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Diskusi santri di luar masjid',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Asrama santri putra',
    category: 'Fasilitas',
    span: 'tall',
  },
  {
    id: 'g9',
    src: 'https://images.pexels.com/photos/33750570/pexels-photo-33750570.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Santri membaca Al-Qur\'an',
    category: 'Kegiatan',
    span: 'normal',
  },
  {
    id: 'g10',
    src: 'https://images.pexels.com/photos/19393166/pexels-photo-19393166.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Laboratorium IPA pesantren',
    category: 'Fasilitas',
    span: 'normal',
  },
  {
    id: 'g11',
    src: 'https://images.pexels.com/photos/32989914/pexels-photo-32989914.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Lingkungan hijau pesantren',
    category: 'Lingkungan',
    span: 'wide',
  },
  {
    id: 'g12',
    src: 'https://images.pexels.com/photos/37812834/pexels-photo-37812834.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kelas SMAIT Darul Abror',
    category: 'Pendidikan',
    span: 'normal',
  },
];

export const stats = [
  { value: 11, label: 'Kelas SMPIT', suffix: '' },
  { value: 4, label: 'Kelas SMAIT', suffix: '' },
  { value: 12, label: 'Asrama Putra & Putri', suffix: '' },
  { value: 360, label: 'Pengalaman Virtual Tour', suffix: '°' },
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
