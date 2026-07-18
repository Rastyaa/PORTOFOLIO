export const profile = {
  name: 'Made Sattyatma Naryndra Pradnyana',
  short: 'Sattyatma',
  headline: 'Building Digital Experiences That Feel Alive.',
  subheadline:
    'Full Stack Developer specialized in modern web applications, scalable backend systems, and immersive user experiences.',
  location: 'Bali, Indonesia',
  email: 'reenkdk2314@gmail.com',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/Rastyaa',
    linkedin: 'https://www.linkedin.com/in/made-sattyatma-naryndra-pradnyana-b61481336/',
    whatsapp: 'https://wa.me/6281246743426?text=Hi,%20I%27d%20love%20to%20discuss%20a%20project',
  },
};

export const stats = [
  { value: 4, suffix: '+', label: 'Projects shipped' },
  { value: 15, suffix: '+', label: 'REST API endpoints built' },
  { value: 1000, suffix: '+', label: 'Active clients served' },
  { value: 98, suffix: '%', label: 'Production uptime' },
];

export const timeline = [
  {
    year: '2026',
    title: 'Fullstack Engineer — Guestlist.ID',
    body: 'Building a curated experience marketplace in Bali: consumer app, partner portal, backoffice dashboard, and a cross-platform React Native app.',
  },
  {
    year: '2026',
    title: 'Freelance Frontend Engineer — PT Sinar Mahira Bali',
    body: 'Owned the full lifecycle of a company-profile site, from wireframe to deployment, scoring 90+ on Google PageSpeed.',
  },
  {
    year: '2025',
    title: 'Fullstack POS System',
    body: 'Designed and built a complete point-of-sale platform with Golang, React, and PostgreSQL — QR self-ordering, real-time kitchen queue, Excel reports.',
  },
  {
    year: '2024',
    title: 'First production apps',
    body: 'Shipped an e-commerce rental platform and a branding site — the start of building for real clients.',
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    accent: '#00F5FF',
  },
  {
    category: 'Backend',
    items: ['Golang', 'Node.js', 'Express.js', 'REST API'],
    accent: '#7C3AED',
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
    accent: '#FF4ECD',
  },
  {
    category: 'Cloud',
    items: ['Vercel', 'Supabase', 'GitHub Pages'],
    accent: '#00F5FF',
  },
  {
    category: 'DevOps',
    items: ['Docker', 'GitHub Actions', 'Git'],
    accent: '#7C3AED',
  },
  {
    category: 'Mobile',
    items: ['React Native', 'iOS & Android'],
    accent: '#FF4ECD',
  },
  {
    category: 'UI/UX',
    items: ['Figma', 'Design Systems', 'Micro-interactions'],
    accent: '#00F5FF',
  },
];

export const projects = [
  {
    slug: 'guestlist',
    title: 'Guestlist',
    desc: 'Curated experience & booking marketplace in Bali — nightlife, tours, and in-room services with instant e-tickets. I build the consumer app, partner portal, backoffice, and the React Native mobile app.',
    tech: ['Next.js', 'TypeScript', 'React Native', 'Golang', 'Supabase'],
    live: 'https://guestlist.id',
    github: null,
    image: '/projects/guestlist-home.webp',
    device: 'phone',
    from: 'left',
    accent: '#34d399',
  },
  {
    slug: 'pos',
    title: 'Point of Sale Fullstack',
    desc: 'Modern POS for cafés and shops: real-time sales dashboard, QR self-ordering per table, kitchen queue, and one-click Excel reports — Golang backend, React frontend.',
    tech: ['Golang', 'React', 'PostgreSQL', 'Tailwind CSS'],
    live: null,
    github: 'https://github.com/Rastyaa',
    image: '/projects/pos-dashboard.webp',
    device: 'laptop',
    from: 'right',
    accent: '#10b981',
  },
  {
    slug: 'biosmb',
    title: 'Biosmb — PT Sinar Mahira Bali',
    desc: 'Company profile for a premium fiberglass sanitation & wastewater-treatment provider. Solo project from consultation to deployment, 90+ PageSpeed score.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    live: 'https://www.biosmb.com',
    github: null,
    image: '/projects/biosmb-home.webp',
    device: 'laptop',
    from: 'left',
    accent: '#fbbf24',
  },
  {
    slug: 'enuma',
    title: 'Enuma Lens & Camera',
    desc: 'E-commerce platform for photography-gear rental and sales — catalog, availability, orders, and inventory in one fullstack app.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    live: null,
    github: 'https://github.com/Rastyaa',
    image: '/projects/Enuma.webp',
    device: 'phone',
    from: 'right',
    accent: '#a3e635',
  },
  {
    slug: 'souv',
    title: 'Souv ID',
    desc: 'Modern branding website with an interactive, responsive UI and micro-animations built on React and Tailwind.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    live: null,
    github: 'https://github.com/Rastyaa',
    image: '/projects/Souv.webp',
    device: 'laptop',
    from: 'left',
    accent: '#2dd4bf',
  },
];

export const featured = {
  title: 'Guestlist.ID',
  eyebrow: 'Featured work',
  body: 'Three products in one ecosystem — consumer app, partner portal, and operations backoffice — serving 1,000+ active clients at 98% uptime.',
  image: '/projects/guestlist-home.webp',
  secondImage: '/projects/guestlist-detail.webp',
  live: 'https://guestlist.id',
};

export const orbitTech = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Golang', icon: 'SiGo', color: '#00ADD8' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
  { name: 'Express', icon: 'SiExpress', color: '#FFFFFF' },
  { name: 'React Native', icon: 'SiReact', color: '#61DAFB' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'Supabase', icon: 'SiSupabase', color: '#3FCF8E' },
  { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
  { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
];

// TODO: ganti dengan testimoni asli dari klien.
export const testimonials = [
  {
    quote:
      'Sattyatma took our landing page from a rough idea to a live, fast website — and handled everything himself, start to finish.',
    name: 'PT Sinar Mahira Bali',
    role: 'Company profile client',
  },
  {
    quote:
      'Reliable across the whole stack. API design, database work, frontend polish — he moves between them without slowing down.',
    name: 'Guestlist.ID',
    role: 'Engineering team',
  },
  {
    quote:
      'The POS system covers everything our café flow needs, from QR ordering at the table to end-of-day reports.',
    name: 'POS pilot user',
    role: 'F&B owner',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];
