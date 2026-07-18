'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Send } from 'lucide-react';
import { profile } from '@/lib/data';
import Magnetic from '@/components/Magnetic';

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), { ssr: false });

const words = profile.headline.split(' ');

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient gradient lights */}
      <motion.div
        className="blob h-[480px] w-[480px] bg-primary"
        style={{ top: '-10%', left: '-10%' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob h-[420px] w-[420px] bg-secondary"
        style={{ bottom: '-15%', right: '10%', opacity: 0.18 }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob h-[380px] w-[380px] bg-accent"
        style={{ top: '30%', right: '-8%', opacity: 0.2 }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="grid-overlay absolute inset-0" />

      {/* 3D backdrop */}
      <div className="absolute inset-y-0 right-0 hidden w-3/5 lg:block">
        <HeroCanvas />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 pt-28 md:px-10 md:pb-0">
        {/* Glass intro card */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass mb-8 inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-xs font-bold">
            S
          </span>
          <span className="font-utility text-sm text-white/70">
            {profile.short} · Full Stack Developer · {profile.location}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        </motion.div>

        {/* Headline word-by-word reveal */}
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`mr-[0.28em] inline-block ${
                word === 'Alive.' ? 'gradient-text' : ''
              }`}
              initial={{ opacity: 0, y: 60, rotateX: 45, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href={profile.resumeUrl}
              className="glow-primary group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-utility text-sm font-medium transition-transform duration-300 hover:scale-105"
            >
              <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="glass group flex items-center gap-2 rounded-full px-7 py-3.5 font-utility text-sm font-medium transition-colors duration-300 hover:bg-white/10"
            >
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              Contact
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-utility text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-secondary"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
