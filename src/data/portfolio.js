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

export const socials = {
  github: 'https://github.com/Rastyaa',
  linkedin: 'https://www.linkedin.com/in/made-sattyatma-naryndra-pradnyana-b61481336/',
  email: 'reenkdk2314@gmail.com',
  whatsapp: "https://wa.me/6281246743426?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project",
};

export const projects = [
  {
    slug: 'guestlist',
    title: 'Guestlist',
    desc: 'Curated-experience marketplace for Bali — nightlife, tours, and in-room services with verified partners and instant e-tickets. I build the consumer app, the partner portal, and the internal backoffice serving 1,000+ active clients.',
    tech: ['Next.js', 'TypeScript', 'React Native', 'Golang', 'Express.js', 'Supabase'],
    link: 'https://guestlist.id',
    image: guestlistHome,
    images: [guestlistHome, guestlistDetail],
    iconKey: 'guestlist',
    scene: { color: '#3aa896', device: 'phone' },
    caseStudy: {
      subtitle: 'A modern concierge platform for nightlife, services, and curated experiences in Bali.',
      meta: {
        client: 'Guestlist.ID',
        role: 'Fullstack Engineer',
        year: '2026',
        timeline: 'Feb 2026 – Present',
        scope: 'Web, Mobile, Backoffice & Partner Portal',
        location: 'Bali, Indonesia',
      },
      liveUrl: 'https://guestlist.id',
      overview:
        'Guestlist is a curated-experience marketplace connecting travelers with verified nightlife, tours, and in-room services across Bali. As a fullstack engineer I build and maintain three products in one ecosystem — the consumer app, Guestlist Partner for business partners, and the Backoffice dashboard for the operations team — serving 1,000+ active clients at 98% uptime.',
      stats: [
        { value: '1,000+', label: 'Active clients' },
        { value: '15+', label: 'REST API endpoints' },
        { value: '98%', label: 'Uptime' },
      ],
      sections: [
        {
          title: 'Discovery & Booking',
          body: 'Search with category and location filters, quick categories, and listings curated by a local team — built so guests find the right experience in a few clicks.',
          image: guestlistHome,
        },
        {
          title: 'Product Detail & Checkout',
          body: 'Detail pages carry galleries, package options, a real-time availability calendar, and promoter codes — wired into the booking system with instant e-tickets.',
          image: guestlistDetail,
        },
        {
          title: 'Guestlist Partner',
          body: 'A dedicated portal where business partners manage listings, monitor incoming bookings, and coordinate directly with the Guestlist operations team.',
        },
        {
          title: 'Operations Backoffice',
          body: 'The internal dashboard for the ops team: large-scale service-catalog management, transaction monitoring, and day-to-day fullstack debugging tooling.',
        },
        {
          title: 'Mobile App',
          body: 'A cross-platform React Native app (iOS & Android) for end users — booking, e-tickets, and order history in your pocket.',
        },
      ],
      tech: ['React Js', 'Next.js', 'TypeScript', 'React Native', 'Golang', 'Express.js', 'PostgreSQL', 'Supabase'],
      responsibilities: [
        'Designed and implemented 15+ RESTful API endpoints in Golang and Express.js, cutting average response time by 40%.',
        'Built responsive web interfaces with React and Next.js, and a cross-platform mobile app with React Native.',
        'Managed and optimized PostgreSQL on Supabase, including schema design and onboarding a large-scale service catalog.',
        'Worked with the product team to turn business requirements into technical specs, with regular code review and fullstack debugging.',
        'Integrated third-party services to extend product capabilities and simplify client workflows.',
      ],
    },
  },
  {
    slug: 'biosmb',
    title: 'Biosmb — PT Sinar Mahira Bali',
    desc: 'Company profile for a provider of premium fiberglass sanitation and wastewater treatment (IPAL) systems, serving residential, commercial, and industrial clients.',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://www.biosmb.com',
    image: biosmbHome,
    iconKey: 'biosmb',
    scene: { color: '#c9973f' },
    caseStudy: {
      subtitle: 'Company-profile landing page for premium fiberglass sanitation & wastewater systems.',
      meta: {
        client: 'PT Sinar Mahira Bali',
        role: 'Freelance Frontend Engineer',
        year: '2026',
        timeline: 'June 2026',
        scope: 'Landing Page, UI/UX, SEO',
        location: 'Bali, Indonesia',
      },
      liveUrl: 'https://www.biosmb.com',
      overview:
        'Designed and built the company-profile landing page for Biosmb, a provider of fiberglass sanitation and wastewater treatment systems. Ran the whole project independently — client consultation, UI/UX wireframes, development, testing, deployment, and handover.',
      stats: [
        { value: '90+', label: 'Google PageSpeed score' },
        { value: '100%', label: 'Responsive across devices' },
        { value: 'Solo', label: 'Full project lifecycle' },
      ],
      sections: [
        {
          title: 'Hero & Value Proposition',
          body: 'The hero leads with the core proposition — best-in-class sanitation and wastewater treatment systems — backed by a free-consultation CTA and a showcase of the production facility.',
          image: biosmbHome,
        },
      ],
      tech: ['React', 'Tailwind CSS'],
      responsibilities: [
        'Applied SEO best practices: semantic HTML, meta tags, and asset-loading optimization for organic search visibility.',
        'Built a fully responsive layout optimized for desktop, tablet, and mobile.',
        'Managed the project end to end — consultation, wireframes, development, testing, and deployment.',
      ],
    },
  },
  {
    slug: 'pos-fullstack',
    title: 'Point of Sale (POS) Fullstack',
    desc: 'A modern point-of-sale system with a Go backend and React frontend — sales reporting, product management, QR table ordering, and a fast checkout flow.',
    tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
    link: '#',
    image: posDashboard,
    images: [posDashboard, posMenu, posKasir, posLaporan, posMeja, posPesanan, posSelforder],
    iconKey: 'pos',
    scene: { color: '#2f8f83' },
    caseStudy: {
      subtitle: 'Fullstack cashier & store management system on a Golang backend.',
      meta: {
        client: 'Personal Project',
        role: 'Fullstack Developer',
        year: '2025',
        scope: 'Web App',
        location: 'Bali, Indonesia',
      },
      overview:
        'A modern point-of-sale system for small-to-medium shops and cafés: a sales dashboard, menu and stock management, a real-time cashier cart, and transaction reports with Excel export — on a fast Golang backend and a lightweight React frontend.',
      stats: [
        { value: '7+', label: 'Operational modules' },
        { value: 'Real-time', label: 'Sales & stock trends' },
        { value: '1-click', label: 'Excel report export' },
      ],
      sections: [
        {
          title: 'Table Map & QR Ordering',
          body: "A real-time table-status map (open/occupied) with a QR code generated per table so customers order straight from their seat — each QR downloadable as a PNG.",
          image: posMeja,
        },
        {
          title: 'Customer Self-Order',
          body: "The mobile-friendly ordering page customers land on after scanning their table's QR — browse categories, build a cart, and order without calling a waiter.",
          image: posSelforder,
        },
        {
          title: 'Table Orders',
          body: "Orders from QR scans flow straight into the kitchen queue — statuses run from 'New' to 'Serving', with per-order accept or reject actions.",
          image: posPesanan,
        },
        {
          title: 'Dashboard',
          body: 'A real-time summary of sales and inventory: revenue, net profit, revenue trends, payment-method split, best sellers, peak hours, and low-stock alerts.',
          image: posDashboard,
        },
        {
          title: 'Menu / Stock Management',
          body: 'A product catalog with categories, prices, and stock managed in place — fast search by name or SKU, with per-item edit and delete.',
          image: posMenu,
        },
        {
          title: 'Cashier',
          body: 'A fast checkout flow: pick items by category, the cart updates subtotal, tax, and discounts automatically, ready to process in a few clicks.',
          image: posKasir,
        },
        {
          title: 'Sales Reports',
          body: 'Full daily transaction history with payment method and cashier on duty, plus Excel export for bookkeeping.',
          image: posLaporan,
        },
      ],
      tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
      responsibilities: [
        'Designed the Golang REST API backend for transactions, products, and reports.',
        'Built the responsive React frontend for the dashboard, menu management, cashier, and sales reports.',
        'Implemented Excel report export and low-stock notifications.',
        'Built the per-table QR system for customer self-ordering, including PNG download.',
        "Built the real-time order flow from QR scan to kitchen queue, with statuses from 'New' to 'Serving'.",
        'Designed the mobile-friendly self-order page for ordering straight from the table.',
      ],
    },
  },
  {
    slug: 'enuma-lens-camera',
    title: 'Enuma Lens & Camera',
    desc: 'E-commerce platform for photography gear rental and sales — a fullstack app handling orders and inventory in one place.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    link: '#',
    image: enumaImg,
    iconKey: 'enuma',
    scene: { color: '#e8c98a' },
    caseStudy: {
      subtitle: 'E-commerce platform for photography gear rental & sales.',
      meta: {
        client: 'Enuma Lens & Camera',
        role: 'Fullstack Developer',
        year: '2024',
        scope: 'Web App',
        location: 'Bali, Indonesia',
      },
      overview:
        'A fullstack application for a photography gear rental and sales business, handling the product catalog, orders, and inventory management in one platform.',
      sections: [
        {
          title: 'Catalog & Ordering',
          body: 'A photography-gear catalog with real-time availability and a single flow for both rental and purchase orders.',
          image: enumaImg,
        },
      ],
      tech: ['PHP', 'MySQL', 'HTML/CSS'],
      responsibilities: [
        'Built the PHP & MySQL backend for inventory and order management.',
        'Developed an easy-to-use product catalog interface.',
      ],
    },
  },
  {
    slug: 'souv-id',
    title: 'Souv ID',
    desc: 'A modern branding website focused on responsive, interactive UI/UX, built with React.',
    tech: ['React JS', 'Tailwind CSS', 'Vite'],
    link: '#',
    image: souvImg,
    iconKey: 'souv',
    scene: { color: '#b7783a' },
    caseStudy: {
      subtitle: 'Modern branding website with interactive UI/UX.',
      meta: {
        client: 'Souv ID',
        role: 'Frontend Developer',
        year: '2024',
        scope: 'Website',
        location: 'Bali, Indonesia',
      },
      overview:
        'Branding website for Souv ID focused on a modern, interactive, responsive look across devices, built with React and Tailwind CSS.',
      sections: [
        {
          title: 'Landing & Branding',
          body: 'A landing page with a consistent visual identity and micro-animations that make browsing feel alive.',
          image: souvImg,
        },
      ],
      tech: ['React JS', 'Tailwind CSS', 'Vite'],
      responsibilities: ['Built interactive, responsive UI with React and Tailwind CSS on Vite.'],
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
    { name: 'Next.js', icon: 'SiNextdotjs', brand: '#ECE5D8' },
    { name: 'React Native', icon: 'SiReact', brand: '#61DAFB' },
    { name: 'Node.js', icon: 'SiNodedotjs', brand: '#5FA04E' },
    { name: 'Express.js', icon: 'SiExpress', brand: '#ECE5D8' },
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
    { name: 'Vercel', icon: 'SiVercel', brand: '#ECE5D8' },
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
