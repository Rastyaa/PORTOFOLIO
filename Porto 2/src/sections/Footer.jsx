'use client';

import { motion } from 'framer-motion';
import { navLinks, profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          whileHover="hover"
        >
          <motion.span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-accent to-secondary font-display text-sm font-bold"
            variants={{ hover: { rotate: 360, scale: 1.08 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            S
          </motion.span>
          <span className="font-display text-sm font-medium text-white/80">{profile.short}</span>
        </motion.a>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-utility text-xs uppercase tracking-widest text-white/45 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-utility text-xs text-white/35">
          © {new Date().getFullYear()} {profile.short} · Built with Next.js & Three.js
        </p>
      </div>
    </footer>
  );
}
