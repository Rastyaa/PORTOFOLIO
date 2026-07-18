import guestlistHome from '../assets/guestlist-home.webp';
import guestlistDetail from '../assets/guestlist-detail.webp';
import posDashboard from '../assets/pos-dashboard.webp';
import posMenu from '../assets/pos-menu.webp';
import posLaporan from '../assets/pos-laporan.webp';
import posKasir from '../assets/pos-kasir.webp';
import posMeja from '../assets/pos-meja.webp';
import posPesanan from '../assets/pos-pesanan.webp';
import posSelforder from '../assets/pos-selforder.webp';
import biosmbHome from '../assets/biosmb-home.webp';
import enumaImg from '../assets/Enuma.webp';
import souvImg from '../assets/Souv.webp';

export const roles = ['Software Engineer', 'React Developer', 'Fullstack Enthusiast'];

export const socials = {
  github: 'https://github.com/Rastyaa',
  linkedin: 'https://www.linkedin.com/in/made-sattyatma-naryndra-pradnyana-b61481336/',
  email: 'reenkdk2314@gmail.com',
  whatsapp: 'https://wa.me/6281246743426?text=Halo,%20saya%20tertarik%20untuk%20diskusi%20project',
};

export const stats = [
  { label: 'Tahun Coding', value: '1+' },
  { label: 'Project Selesai', value: '4+' },
  { label: 'Teknologi Dikuasai', value: '8+' },
];

export const projects = [
  {
    slug: 'guestlist',
    title: 'Guestlist',
    desc: 'Marketplace curated experience & booking di Bali — mulai dari nightlife, tur, hingga layanan in-room, lengkap dengan e-ticket instan dan mitra terverifikasi. Berkontribusi membangun dashboard Backoffice (operasional internal), Guestlist Partner (portal mitra), dan aplikasi mobile.',
    tech: ['Next.js', 'TypeScript', 'React Native', 'Golang', 'Express.js', 'Supabase'],
    link: 'https://guestlist.id',
    image: guestlistHome,
    images: [guestlistHome, guestlistDetail],
    iconKey: 'guestlist',
    scene: { color: '#34d399', device: 'phone' },
    caseStudy: {
      subtitle: 'Platform concierge modern untuk nightlife, layanan, dan pengalaman curated di Bali.',
      meta: {
        client: 'Guestlist.ID',
        role: 'Fullstack Engineer',
        year: '2026',
        timeline: 'Feb 2026 – Sekarang',
        scope: 'Web, Mobile, Backoffice & Partner Portal',
        location: 'Bali, Indonesia',
      },
      liveUrl: 'https://guestlist.id',
      overview:
        'Guestlist adalah marketplace curated experience yang menghubungkan wisatawan dengan nightlife, tur, dan layanan in-room terverifikasi di Bali. Sebagai fullstack engineer, saya membangun dan memelihara tiga produk dalam satu ekosistem: aplikasi konsumen, Guestlist Partner untuk mitra bisnis, dan dashboard Backoffice untuk tim operasional — melayani 1.000+ klien aktif dengan uptime 98%.',
      stats: [
        { value: '1.000+', label: 'Klien aktif' },
        { value: '15+', label: 'Endpoint REST API' },
        { value: '98%', label: 'Uptime' },
      ],
      sections: [
        {
          title: 'Discovery & Booking',
          body: 'Halaman pencarian dengan filter kategori & lokasi, quick category, dan listing yang di-curate tim lokal — dirancang agar tamu menemukan pengalaman yang tepat dalam beberapa klik.',
          image: guestlistHome,
        },
        {
          title: 'Detail Produk & Checkout',
          body: 'Halaman detail menampilkan galeri, pilihan paket, kalender tanggal real-time, dan kode promotor — terintegrasi dengan sistem booking & e-ticket instan.',
          image: guestlistDetail,
        },
        {
          title: 'Guestlist Partner',
          body: 'Portal khusus mitra bisnis untuk mengelola listing, memantau pemesanan masuk, dan berkoordinasi langsung dengan tim operasional Guestlist.',
        },
        {
          title: 'Backoffice Operasional',
          body: 'Dashboard internal untuk tim ops: manajemen katalog layanan skala besar, monitoring transaksi, dan tooling debugging fullstack sehari-hari.',
        },
        {
          title: 'Aplikasi Mobile',
          body: 'Aplikasi React Native lintas platform (iOS & Android) untuk pengguna akhir — booking, e-ticket, dan riwayat pemesanan dalam genggaman.',
        },
      ],
      tech: ['React Js', 'Next.js', 'TypeScript', 'React Native', 'Golang', 'Express.js', 'PostgreSQL', 'Supabase'],
      responsibilities: [
        'Merancang & mengimplementasikan 15+ endpoint RESTful API dengan Golang dan Express.js, menurunkan response time rata-rata 40%.',
        'Membangun antarmuka web responsif dengan React JS & Next.js, dan aplikasi mobile cross-platform dengan React Native.',
        'Mengelola & mengoptimasi database PostgreSQL via Supabase, termasuk desain skema dan onboarding data katalog layanan skala besar.',
        'Berkolaborasi dengan tim product menerjemahkan kebutuhan bisnis jadi spesifikasi teknis, serta rutin melakukan code review & debugging fullstack.',
        'Mengintegrasikan layanan pihak ketiga untuk memperluas kapabilitas produk dan mempermudah workflow klien.',
      ],
    },
  },
  {
    slug: 'biosmb',
    title: 'Biosmb — PT Sinar Mahira Bali',
    desc: 'Company profile untuk penyedia solusi infrastruktur sanitasi & pengolahan air limbah (IPAL) berbahan fiberglass premium, melayani segmen residensial, komersial, dan industri.',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://www.biosmb.com',
    image: biosmbHome,
    iconKey: 'biosmb',
    scene: { color: '#fbbf24' },
    caseStudy: {
      subtitle: 'Landing page company profile untuk solusi sanitasi & IPAL fiberglass premium.',
      meta: {
        client: 'PT Sinar Mahira Bali',
        role: 'Freelance Frontend Engineer',
        year: '2026',
        timeline: 'Juni 2026',
        scope: 'Landing Page, UI/UX, SEO',
        location: 'Bali, Indonesia',
      },
      liveUrl: 'https://www.biosmb.com',
      overview:
        'Mendesain dan mengembangkan landing page company profile untuk Biosmb, penyedia sistem sanitasi & pengolahan air limbah berbahan fiberglass. Mengelola seluruh siklus proyek secara independen — dari konsultasi klien, wireframing UI/UX, development, testing, hingga deployment & handover.',
      stats: [
        { value: '90+', label: 'Google PageSpeed score' },
        { value: '100%', label: 'Responsive di semua device' },
        { value: 'Solo', label: 'Full project lifecycle' },
      ],
      sections: [
        {
          title: 'Hero & Value Proposition',
          body: 'Hero section menonjolkan proposisi utama "Sistem Sanitasi & Pengolahan Air Limbah Terbaik di Kelasnya" dengan CTA konsultasi gratis dan showcase fasilitas produksi.',
          image: biosmbHome,
        },
      ],
      tech: ['React', 'Tailwind CSS'],
      responsibilities: [
        'Menerapkan SEO best practice: semantic HTML, meta tags, dan optimasi asset loading untuk visibilitas pencarian organik.',
        'Membangun layout fully responsive yang teroptimasi untuk desktop, tablet, dan mobile.',
        'Mengelola proyek dari konsultasi awal, wireframe, development, testing, hingga deployment secara mandiri.',
      ],
    },
  },
  {
    slug: 'pos-fullstack',
    title: 'Point of Sale (POS) Fullstack',
    desc: 'Sistem POS modern dengan backend Go (Golang) dan frontend React. Menampilkan laporan penjualan, manajemen produk, dan checkout yang responsif.',
    tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
    image: posDashboard,
    images: [posDashboard, posMenu, posKasir, posLaporan, posMeja, posPesanan, posSelforder],
    iconKey: 'pos',
    scene: { color: '#10b981' },
    caseStudy: {
      subtitle: 'Sistem kasir & manajemen toko fullstack dengan backend Golang.',
      meta: {
        client: 'Personal Project',
        role: 'Fullstack Developer',
        year: '2025',
        scope: 'Web App',
        location: 'Bali, Indonesia',
      },
      overview:
        'Sistem Point of Sale modern untuk kebutuhan toko/kafe kecil-menengah: dashboard ringkasan penjualan, manajemen menu & stok, kasir dengan keranjang real-time, hingga laporan transaksi yang bisa diekspor ke Excel — dengan backend Golang yang cepat dan frontend React yang ringan.',
      stats: [
        { value: '7+', label: 'Modul operasional' },
        { value: 'Real-time', label: 'Tren penjualan & stok' },
        { value: '1-klik', label: 'Export laporan Excel' },
      ],
      sections: [
        {
          title: 'Posisi Meja & QR Order',
          body: 'Peta status meja real-time (kosong/terisi) dan generate QR code per meja agar pelanggan bisa langsung memesan dari mejanya masing-masing, lengkap dengan opsi unduh QR sebagai PNG.',
          image: posMeja,
        },
        {
          title: 'Self-Order Pelanggan',
          body: 'Halaman pemesanan mobile-friendly yang muncul setelah pelanggan scan QR meja — pilih kategori menu, tambah ke keranjang, dan pesan langsung tanpa perlu panggil pelayan.',
          image: posSelforder,
        },
        {
          title: 'Pesanan Meja',
          body: 'Pesanan dari pemindaian QR pelanggan masuk otomatis ke antrian dapur — status berjalan dari "Baru Masuk" hingga "Sedang Disajikan", dengan aksi Tolak atau Proses per pesanan.',
          image: posPesanan,
        },
        {
          title: 'Dashboard Ringkasan',
          body: 'Ringkasan performa penjualan & inventaris real-time: total pendapatan, keuntungan bersih, tren pendapatan, distribusi metode pembayaran, produk terlaris, jam sibuk, hingga notifikasi stok menipis.',
          image: posDashboard,
        },
        {
          title: 'Manajemen Menu / Stok',
          body: 'Katalog produk dengan kategori, harga, dan stok yang bisa dikelola langsung — pencarian cepat berdasarkan nama atau SKU, lengkap dengan aksi edit & hapus per item.',
          image: posMenu,
        },
        {
          title: 'Kasir',
          body: 'Alur checkout cepat: pilih menu per kategori, keranjang otomatis terupdate dengan subtotal, pajak, dan diskon, siap diproses dalam beberapa klik.',
          image: posKasir,
        },
        {
          title: 'Laporan Penjualan',
          body: 'Histori transaksi harian lengkap dengan metode pembayaran dan kasir yang bertugas, serta export laporan ke Excel untuk kebutuhan rekap.',
          image: posLaporan,
        },
      ],
      tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
      responsibilities: [
        'Merancang REST API backend dengan Golang untuk transaksi, produk, dan laporan.',
        'Membangun frontend React responsif untuk dashboard, manajemen menu, kasir, dan laporan penjualan.',
        'Mengimplementasikan fitur export laporan ke Excel dan notifikasi stok menipis.',
        'Membuat sistem QR code per meja untuk self-order pelanggan, termasuk fitur unduh QR sebagai PNG.',
        'Membangun alur pesanan real-time dari scan QR meja ke antrian dapur, dengan status "Baru Masuk" hingga "Sedang Disajikan".',
        'Mendesain halaman self-order mobile-friendly untuk pelanggan memesan langsung dari meja via QR code.',
      ],
    },
  },
  {
    slug: 'enuma-lens-camera',
    title: 'Enuma Lens & Camera',
    desc: 'Platform E-Commerce untuk penyewaan dan penjualan alat fotografi. Aplikasi fullstack yang menangani pemesanan & inventaris.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    link: '#',
    image: enumaImg,
    iconKey: 'enuma',
    scene: { color: '#a3e635' },
    caseStudy: {
      subtitle: 'Platform e-commerce penyewaan & penjualan alat fotografi.',
      meta: {
        client: 'Enuma Lens & Camera',
        role: 'Fullstack Developer',
        year: '2024',
        scope: 'Web App',
        location: 'Bali, Indonesia',
      },
      overview:
        'Aplikasi fullstack untuk bisnis penyewaan dan penjualan alat fotografi, menangani katalog produk, pemesanan, dan manajemen inventaris dalam satu platform.',
      sections: [
        {
          title: 'Katalog & Pemesanan',
          body: 'Katalog alat fotografi dengan status ketersediaan real-time dan alur pemesanan sewa/beli dalam satu platform.',
          image: enumaImg,
        },
      ],
      tech: ['PHP', 'MySQL', 'HTML/CSS'],
      responsibilities: [
        'Membangun backend PHP & MySQL untuk manajemen inventaris dan pemesanan.',
        'Mengembangkan antarmuka katalog produk yang mudah digunakan.',
      ],
    },
  },
  {
    slug: 'souv-id',
    title: 'Souv ID',
    desc: 'Website branding modern dengan fokus pada UI/UX yang responsif dan interaktif menggunakan React.',
    tech: ['React JS', 'Tailwind CSS', 'Vite'],
    link: '#',
    image: souvImg,
    iconKey: 'souv',
    scene: { color: '#2dd4bf' },
    caseStudy: {
      subtitle: 'Website branding modern dengan UI/UX interaktif.',
      meta: {
        client: 'Souv ID',
        role: 'Frontend Developer',
        year: '2024',
        scope: 'Website',
        location: 'Bali, Indonesia',
      },
      overview:
        'Website branding untuk Souv ID dengan fokus pada tampilan modern, interaktif, dan responsif di seluruh perangkat, dibangun dengan React dan Tailwind CSS.',
      sections: [
        {
          title: 'Landing & Branding',
          body: 'Landing page dengan identitas visual brand yang konsisten dan interaksi micro-animation untuk pengalaman menjelajah yang lebih hidup.',
          image: souvImg,
        },
      ],
      tech: ['React JS', 'Tailwind CSS', 'Vite'],
      responsibilities: ['Membangun UI interaktif dan responsif dengan React JS & Tailwind CSS menggunakan Vite.'],
    },
  },
];

// `brand` is the official mark colour, revealed only on hover.
export const techStack = {
  Languages: [
    { name: 'JavaScript', icon: 'SiJavascript', brand: '#F7DF1E' },
    { name: 'TypeScript', icon: 'SiTypescript', brand: '#3178C6' },
    { name: 'Golang', icon: 'SiGo', brand: '#00ADD8' },
    { name: 'PHP', icon: 'SiPhp', brand: '#777BB4' },
    { name: 'HTML/CSS', icon: 'SiHtml5', brand: '#E34F26' },
  ],
  Frameworks: [
    { name: 'React', icon: 'SiReact', brand: '#61DAFB' },
    { name: 'Next.js', icon: 'SiNextdotjs', brand: '#E9E7E2' },
    { name: 'React Native', icon: 'SiReact', brand: '#61DAFB' },
    { name: 'Node.js', icon: 'SiNodedotjs', brand: '#5FA04E' },
    { name: 'Express.js', icon: 'SiExpress', brand: '#E9E7E2' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', brand: '#06B6D4' },
    { name: 'Framer Motion', icon: 'SiFramer', brand: '#0055FF' },
    { name: 'Vite', icon: 'SiVite', brand: '#646CFF' },
  ],
  Database: [
    { name: 'PostgreSQL', icon: 'SiPostgresql', brand: '#4169E1' },
    { name: 'Supabase', icon: 'SiSupabase', brand: '#3FCF8E' },
    { name: 'MySQL', icon: 'SiMysql', brand: '#4479A1' },
    { name: 'Firebase', icon: 'SiFirebase', brand: '#FFCA28' },
  ],
  Tools: [
    { name: 'Git', icon: 'SiGit', brand: '#F05032' },
    { name: 'Docker', icon: 'SiDocker', brand: '#2496ED' },
    { name: 'GitHub Actions', icon: 'SiGithubactions', brand: '#2088FF' },
    { name: 'Figma', icon: 'SiFigma', brand: '#F24E1E' },
    { name: 'Postman', icon: 'SiPostman', brand: '#FF6C37' },
    { name: 'Vercel', icon: 'SiVercel', brand: '#E9E7E2' },
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
