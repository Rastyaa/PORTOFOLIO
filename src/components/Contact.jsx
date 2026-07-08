import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { fadeInUp } from '../lib/motion';
import { socials } from '../data/portfolio';

const Contact = () => (
  <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full filter blur-[100px] pointer-events-none" />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="max-w-4xl mx-auto px-4 text-center relative z-10"
    >
      <h2 className="text-5xl font-bold font-display mb-8 text-white">
        Let's Build Something
        <br />
        <span className="font-serif italic text-emerald-400">Amazing Together</span>
      </h2>
      <p className="text-slate-400 mb-12 max-w-xl mx-auto text-xl leading-relaxed">
        Terbuka untuk peluang baru, diskusi proyek, atau sekadar ngobrol santai seputar teknologi.
      </p>

      <a
        href={socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-bold text-lg text-white hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6 mr-3" />
        Chat via WhatsApp
      </a>

      <div className="flex justify-center gap-4 mt-10">
        <a href={socials.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
          <Github className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
          <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </a>
        <a href={`mailto:${socials.email}`} className="p-4 bg-slate-900 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-105 group">
          <Mail className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </a>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
        <p>© 2026 Sattyatma Naryndra. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with React, Tailwind & Framer Motion.</p>
      </div>
    </motion.div>
  </section>
);

export default Contact;
