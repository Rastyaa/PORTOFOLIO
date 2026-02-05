import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Menu, X } from 'lucide-react';

// --- IMPORT GAMBAR PROJECT & FOTO PROFIL ---
// Pastikan file profile.jpg sudah ada di folder src/assets/
import enumaImg from './assets/Enuma.jpeg';
import souvImg from './assets/Souv.jpeg';
import profileImg from './assets/profile.jpeg'; // <--- FOTO BARU KAMU

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      title: 'Enuma Lens & Camera',
      desc: 'Platform E-Commerce untuk penyewaan dan penjualan alat fotografi. Fullstack dengan PHP Native dan MySQL.',
      tech: ['PHP', 'MySQL', 'HTML/CSS'],
      link: '#',
      image: enumaImg,
    },
    {
      title: 'Souv ID',
      desc: 'Website branding modern dengan fokus pada UI/UX yang responsif dan interaktif menggunakan React.',
      tech: ['React JS', 'Tailwind CSS', 'Vite'],
      link: '#',
      image: souvImg,
    },
  ];

  return (
    // Menambahkan background gradient halus di container utama
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden relative">
      {/* Dekorasi Background Blob (Opsional, membuat lebih hidup) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* --- NAVBAR (Glassmorphism Style) --- */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-lg border-b border-white/20 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo dengan gradient text */}
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Portofolio</span>

            <div className="hidden md:flex space-x-8 font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
              <a href="#skills" className="hover:text-blue-600 transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-600 transition">
                Projects
              </a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                Contact
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-blue-600 transition">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-t p-4 space-y-4 shadow-lg">
            <a href="#about" className="block text-lg hover:text-blue-600" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="block text-lg hover:text-blue-600" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="block text-lg hover:text-blue-600" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="block text-lg text-blue-600 font-semibold" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (RESIZN & ADA FOTO) --- */}
      <section id="about" className="pt-36 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Bagian Teks (Kiri di desktop) */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4"> Welcome!</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-6 text-slate-900 leading-tight">
              Hi, Saya <br className="hidden md:block" />
              {/* Ganti Nama Anda di sini */}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Made Sattyatma Naryndra Pradnyana</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-6">Mahasiswa IT & React Developer</h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
              Mahasiswa semester 6 Jurusan Teknologi Informasi di Universitas Pendidikan Nasional (Undiknas). Fokus menciptakan pengalaman web yang modern, cepat, dan responsif menggunakan teknologi terkini.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-5">
              <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1">
                Lihat Projek
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/Rastyaa" target="_blank" rel="noreferrer" className="p-3 bg-white border border-slate-200 rounded-full hover:border-blue-400 hover:text-blue-600 transition shadow-sm hover:shadow-md">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bagian Foto (Kanan di desktop) */}
          <div className="relative flex-1 flex justify-center">
            {/* Lingkaran dekorasi di belakang foto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full filter blur-2xl opacity-50 scale-110 animate-pulse-slow"></div>
            {/* Foto Profil */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white shadow-2xl ring-1 ring-slate-100/50">
              <img src={profileImg} alt="Foto Profil" className="w-full h-full rounded-full object-cover border-4 border-blue-50 hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (Card yang lebih modern) --- */}
      <section id="skills" className="py-24 bg-white/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <p className="text-slate-600 mt-4">Alat dan teknologi yang saya gunakan untuk menghidupkan ide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Skill Card 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Code2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Modern</h3>
              <p className="text-slate-600 leading-relaxed">Membangun antarmuka yang interaktif dengan React JS, Tailwind CSS v4, dan Vite.</p>
            </div>

            {/* Skill Card 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Fundamental</h3>
              <p className="text-slate-600 leading-relaxed">Pengalaman dalam pengembangan server-side menggunakan PHP Native dan database MySQL.</p>
            </div>

            {/* Skill Card 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Terminal size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Development Tools</h3>
              <p className="text-slate-600 leading-relaxed">Terbiasa menggunakan Git untuk kontrol versi, VS Code, dan tools debugging modern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (Card yang lebih bersih) --- */}
      <section id="projects" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-slate-600 mt-4">Beberapa hasil karya terbaik yang pernah saya kerjakan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:-translate-y-1 flex flex-col h-full">
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">{project.desc}</p>

                  <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-100">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Dekorasi background hijau halus */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-600/20 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Mari Bekerja Sama!</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Saya selalu terbuka untuk peluang baru. Apakah Anda memiliki pertanyaan atau proyek menarik? Jangan ragu untuk menghubungi saya via WhatsApp.</p>

          {/* TOMBOL WHATSAPP - JANGAN LUPA GANTI NOMOR DI SINI */}
          <a
            href="https://wa.me/6281246743426?text=Halo,%20saya%20tertarik%20untuk%20diskusi%20project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-10 py-5 bg-green-600 rounded-full font-bold text-lg hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-600/30 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat WhatsApp
          </a>
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            Dibuat dengan <span className="text-red-500">❤</span> menggunakan React & Tailwind CSS. © 2026.
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
