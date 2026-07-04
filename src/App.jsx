import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Database, Menu, X, MessageCircle, Server, Monitor, LayoutDashboard, Briefcase, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT GAMBAR PROJECT & FOTO PROFIL ---
import enumaImg from './assets/Enuma.jpeg';
import souvImg from './assets/Souv.jpeg';
import profileImg from './assets/Profile.jpeg';
import posImg from './assets/pos-mockup.png';

const roles = ['Software Engineer', 'React Developer', 'Fullstack Enthusiast'];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const experience = [
    {
      company: 'guestlist.id',
      role: 'Software Engineer',
      period: '2026 - Sekarang',
      desc: 'Membangun dan memelihara fitur produk web, berkolaborasi dengan tim product & design, serta berkontribusi pada peningkatan performa dan kualitas kode.',
      // TODO: sesuaikan deskripsi role guestlist.id
    },
  ];

  const stats = [
    { label: 'Tahun Coding', value: '3+' },      // TODO: sesuaikan angka
    { label: 'Project Selesai', value: '10+' },  // TODO: sesuaikan angka
    { label: 'Teknologi Dikuasai', value: '8+' },// TODO: sesuaikan angka
  ];

  const projects = [
    {
      title: 'Point of Sale (POS) Fullstack',
      desc: 'Sistem POS modern dengan backend Go (Golang) dan frontend React. Menampilkan laporan penjualan, manajemen produk, dan checkout yang responsif.',
      tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
      link: '#',
      image: posImg,
      icon: <LayoutDashboard size={20} className="text-emerald-400" />
    },
    {
      title: 'Enuma Lens & Camera',
      desc: 'Platform E-Commerce untuk penyewaan dan penjualan alat fotografi. Aplikasi fullstack yang menangani pemesanan & inventaris.',
      tech: ['PHP', 'MySQL', 'HTML/CSS'],
      link: '#',
      image: enumaImg,
      icon: <Server size={20} className="text-lime-400" />
    },
    {
      title: 'Souv ID',
      desc: 'Website branding modern dengan fokus pada UI/UX yang responsif dan interaktif menggunakan React.',
      tech: ['React JS', 'Tailwind CSS', 'Vite'],
      link: '#',
      image: souvImg,
      icon: <Monitor size={20} className="text-teal-400" />
    },
  ];

  const techStack = [
    { name: 'React', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
    { name: 'Golang', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
    { name: 'Tailwind CSS', color: 'text-lime-400', bg: 'bg-lime-400/10', border: 'border-lime-400/20' },
    { name: 'Node.js', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'PostgreSQL', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { name: 'PHP', color: 'text-teal-500', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
    { name: 'MySQL', color: 'text-lime-500', bg: 'bg-lime-500/10', border: 'border-lime-500/20' },
    { name: 'Git', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-emerald-500/30">

      {/* Background Glow Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-lime-600/20 blur-[120px] pointer-events-none"></div>

      {/* --- NAVBAR (Premium Glassmorphism) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-emerald-900/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent tracking-tight"
            >
              Portofolio.
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-8 items-center font-medium text-slate-300"
            >
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-full hover:from-emerald-500 hover:to-lime-500 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                Contact
              </a>
            </motion.div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-emerald-400 transition">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-4 shadow-2xl overflow-hidden"
            >
              <a href="#about" className="block text-lg text-slate-300 hover:text-emerald-400 px-4 py-2" onClick={toggleMenu}>About</a>
              <a href="#experience" className="block text-lg text-slate-300 hover:text-emerald-400 px-4 py-2" onClick={toggleMenu}>Experience</a>
              <a href="#skills" className="block text-lg text-slate-300 hover:text-emerald-400 px-4 py-2" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="block text-lg text-slate-300 hover:text-emerald-400 px-4 py-2" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="block text-lg text-emerald-400 font-semibold px-4 py-2" onClick={toggleMenu}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-24 px-4 relative z-10 flex min-h-screen items-center">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 w-full">
          {/* Bagian Teks */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 text-center md:text-left"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Available for opportunities
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-2 mb-6 text-white leading-tight tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">Sattyatma Naryndra</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-medium mb-6 h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-emerald-400 font-semibold"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span> @ guestlist.id</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
              Saat ini bekerja sebagai Software Engineer di <span className="text-emerald-400 font-medium">guestlist.id</span>, sambil menyelesaikan studi Teknologi Informasi di Universitas Pendidikan Nasional (Undiknas). Fokus menciptakan pengalaman web modern, cepat, dan responsif.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-5">
              <a href="#projects" className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
                Lihat Projek
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/Rastyaa" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                {/* TODO: ganti URL LinkedIn */}
                <a href="https://linkedin.com/in/USERNAME" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                {/* TODO: ganti email */}
                <a href="mailto:EMAIL@example.com" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bagian Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-lime-500/20 rounded-full filter blur-3xl scale-150 animate-pulse-slow"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-emerald-500 to-lime-600 shadow-2xl shadow-emerald-500/20">
              <img src={profileImg} alt="Foto Profil" className="w-full h-full rounded-full object-cover border-4 border-slate-950" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-4 relative z-10 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Experience</h2>
            <p className="text-slate-400 mt-4 text-lg">Perjalanan profesional saya sejauh ini.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative pl-8 md:pl-10 border-l-2 border-emerald-500/20 space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <span className="absolute -left-[2.65rem] md:-left-[3.15rem] top-1 w-6 h-6 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </span>
                <div className="p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-emerald-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-500/20">
                      <Briefcase className="text-emerald-400" size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-emerald-400">@ {exp.company}</span></h3>
                      <p className="text-slate-500 text-sm font-medium">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Technical Arsenal</h2>
            <p className="text-slate-400 mt-4 text-lg">Alat dan teknologi yang saya gunakan untuk menghidupkan ide.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Skill 1 */}
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-emerald-950/50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Code2 className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Modern</h3>
              <p className="text-slate-400 leading-relaxed text-lg">Membangun antarmuka yang interaktif dan responsif dengan React JS, Tailwind CSS, dan Vite.</p>
            </motion.div>

            {/* Skill 2 */}
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-lime-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-lime-950/50 rounded-2xl flex items-center justify-center mb-8 border border-lime-500/20 group-hover:bg-lime-500/20 transition-colors">
                <Database className="text-lime-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Backend Fundamental</h3>
              <p className="text-slate-400 leading-relaxed text-lg">Pengembangan server-side yang tangguh menggunakan Golang, PHP, dan database MySQL/PostgreSQL.</p>
            </motion.div>

            {/* Skill 3 */}
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-teal-950/50 rounded-2xl flex items-center justify-center mb-8 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                <Terminal className="text-teal-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Development Tools</h3>
              <p className="text-slate-400 leading-relaxed text-lg">Terbiasa menggunakan Git, terminal modern, dan integrasi API untuk workflow yang efisien.</p>
            </motion.div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 pt-16 border-t border-white/5"
          >
            <h3 className="text-center text-2xl font-bold text-white mb-10">Tech Stack & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-6 py-3 rounded-xl border ${tech.border} ${tech.bg} backdrop-blur-sm shadow-lg transition-all duration-300`}
                >
                  <span className={`font-semibold text-lg ${tech.color}`}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-4 relative z-10 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Featured Projects</h2>
            <p className="text-slate-400 mt-4 text-lg">Eksplorasi karya terbaik saya dalam pengembangan fullstack.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/40 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col h-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 pointer-events-none"></div>

                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse"></div> {/* Placeholder while loading */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105 group-hover:rotate-1 relative z-0" />
                </div>

                <div className="p-10 flex flex-col flex-grow relative z-20 -mt-20 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/5">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-8 text-lg leading-relaxed flex-grow">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-full border border-white/10 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS / HIGHLIGHTS SECTION --- */}
      <section className="py-24 px-4 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 mb-6">
              <Sparkles className="text-emerald-400" size={26} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Highlights</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-emerald-500/50 transition-all duration-500"
              >
                <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-8 text-white">Let's Build Something<br/><span className="text-emerald-400">Amazing Together</span></h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-xl leading-relaxed">Terbuka untuk peluang baru, diskusi proyek, atau sekadar ngobrol santai seputar teknologi.</p>

          <a
            href="https://wa.me/6281246743426?text=Halo,%20saya%20tertarik%20untuk%20diskusi%20project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-bold text-lg text-white hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat via WhatsApp
          </a>

          <div className="flex justify-center gap-4 mt-10">
            <a href="https://github.com/Rastyaa" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
              <Github className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            {/* TODO: ganti URL LinkedIn */}
            <a href="https://linkedin.com/in/USERNAME" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            {/* TODO: ganti email */}
            <a href="mailto:EMAIL@example.com" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
            <p>© 2026 Sattyatma Naryndra. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with React, Tailwind & Framer Motion.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
