import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Database, Menu, X, MessageCircle, Server, Monitor, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT GAMBAR PROJECT & FOTO PROFIL ---
import enumaImg from './assets/Enuma.jpeg';
import souvImg from './assets/Souv.jpeg';
import profileImg from './assets/profile.jpeg';
import posImg from './assets/pos-mockup.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      title: 'Point of Sale (POS) Fullstack',
      desc: 'Sistem POS modern dengan backend Go (Golang) dan frontend React. Menampilkan laporan penjualan, manajemen produk, dan checkout yang responsif.',
      tech: ['Golang', 'React JS', 'Tailwind CSS', 'PostgreSQL'],
      link: '#',
      image: posImg,
      icon: <LayoutDashboard size={20} className="text-cyan-400" />
    },
    {
      title: 'Enuma Lens & Camera',
      desc: 'Platform E-Commerce untuk penyewaan dan penjualan alat fotografi. Aplikasi fullstack yang menangani pemesanan & inventaris.',
      tech: ['PHP', 'MySQL', 'HTML/CSS'],
      link: '#',
      image: enumaImg,
      icon: <Server size={20} className="text-purple-400" />
    },
    {
      title: 'Souv ID',
      desc: 'Website branding modern dengan fokus pada UI/UX yang responsif dan interaktif menggunakan React.',
      tech: ['React JS', 'Tailwind CSS', 'Vite'],
      link: '#',
      image: souvImg,
      icon: <Monitor size={20} className="text-blue-400" />
    },
  ];

  const techStack = [
    { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
    { name: 'Golang', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    { name: 'Tailwind CSS', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
    { name: 'Node.js', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'PostgreSQL', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'PHP', color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
    { name: 'MySQL', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
    { name: 'Git', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Glow Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none"></div>

      {/* --- NAVBAR (Premium Glassmorphism) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-cyan-900/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
            >
              Portofolio.
            </motion.span>

            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-8 items-center font-medium text-slate-300"
            >
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                Contact
              </a>
            </motion.div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-cyan-400 transition">
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
              <a href="#about" className="block text-lg text-slate-300 hover:text-cyan-400 px-4 py-2" onClick={toggleMenu}>About</a>
              <a href="#skills" className="block text-lg text-slate-300 hover:text-cyan-400 px-4 py-2" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="block text-lg text-slate-300 hover:text-cyan-400 px-4 py-2" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="block text-lg text-cyan-400 font-semibold px-4 py-2" onClick={toggleMenu}>Contact</a>
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
            <motion.span variants={fadeInUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Welcome to my space
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-2 mb-6 text-white leading-tight tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Sattyatma Naryndra</span>
            </motion.h1>
            
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
              IT Student & React Developer
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
              Mahasiswa semester 6 Jurusan Teknologi Informasi di Universitas Pendidikan Nasional (Undiknas). Fokus menciptakan pengalaman web modern, cepat, dan responsif.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-5">
              <a href="#projects" className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105">
                Lihat Projek
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/Rastyaa" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group">
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
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
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full filter blur-3xl scale-150 animate-pulse-slow"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-2xl shadow-purple-500/20">
              <img src={profileImg} alt="Foto Profil" className="w-full h-full rounded-full object-cover border-4 border-slate-950" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-slate-950/50">
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
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-cyan-950/50 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Code2 className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Frontend Modern</h3>
              <p className="text-slate-400 leading-relaxed text-lg">Membangun antarmuka yang interaktif dan responsif dengan React JS, Tailwind CSS, dan Vite.</p>
            </motion.div>

            {/* Skill 2 */}
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-purple-950/50 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Database className="text-purple-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Backend Fundamental</h3>
              <p className="text-slate-400 leading-relaxed text-lg">Pengembangan server-side yang tangguh menggunakan Golang, PHP, dan database MySQL/PostgreSQL.</p>
            </motion.div>

            {/* Skill 3 */}
            <motion.div variants={fadeInUp} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-950/50 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Terminal className="text-blue-400" size={32} />
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
      <section id="projects" className="py-24 px-4 relative z-10">
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
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

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-8 text-white">Let's Build Something<br/><span className="text-cyan-400">Amazing Together</span></h2>
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
          
          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
            <p>© 2026 Sattyatma Naryndra. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with React, Tailwind & Framer Motion.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
