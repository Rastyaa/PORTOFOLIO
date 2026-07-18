'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { navLinks, profile } from '@/lib/data';
import Magnetic from './Magnetic';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHidden(latest > 120 && latest > scrollY.getPrevious());
  });

  return (
    <motion.header
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass flex items-center gap-1 rounded-full px-3 py-2 md:gap-2">
        <a
          href="#"
          className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-bold"
        >
          S
        </a>
        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 font-utility text-sm text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${profile.email}`}
            className="glow-primary ml-1 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 font-utility text-sm font-medium transition-transform duration-300 hover:scale-105"
          >
            Hire me
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
