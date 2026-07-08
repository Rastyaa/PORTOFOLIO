import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../lib/motion';
import profileImg from '../assets/Profile.jpeg';

const highlights = [
  { icon: MapPin, label: 'Bali, Indonesia' },
  { icon: Briefcase, label: 'Software Engineer @ guestlist.id' },
  { icon: GraduationCap, label: 'IT · Undiknas' },
];

const Hero = () => (
  <section id="about" className="pt-40 pb-20 px-4 relative z-10 min-h-screen flex items-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto text-center flex flex-col items-center"
    >
      <motion.div variants={fadeInUp} className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/40 to-lime-500/40 blur-2xl scale-125 animate-pulse-slow" />
        <img
          src={profileImg}
          alt="Foto Profil"
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-emerald-400/40 shadow-[0_0_30px_rgba(52,211,153,0.25)]"
        />
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-6xl md:text-8xl font-extrabold font-display text-white leading-[0.95] tracking-tight mb-8"
      >
        Sattyatma&apos;s{' '}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
          Portfolio
        </span>
      </motion.h1>

      <motion.p variants={fadeInUp} className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-2xl mb-12">
        &quot;Fullstack engineer turning complex problems into fast, elegant web experiences.&quot;
      </motion.p>

      <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
        >
          View Projects <ArrowDown size={16} />
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border border-white/15 text-slate-200 rounded-full font-bold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
        >
          Contact
        </a>
      </motion.div>

    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute inset-x-0 bottom-12 flex justify-center px-4"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md px-6 py-3 shadow-xl">
        <span className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </span>
        {highlights.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="hidden sm:inline text-slate-700">|</span>
            <Icon size={15} className="text-slate-500" />
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
