'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { SiGo, SiNextdotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { stats, timeline } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        ref.current.textContent = Math.round(v).toLocaleString('en-US') + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB', style: { top: '8%', right: '6%' }, dur: 7 },
  { Icon: SiGo, color: '#00ADD8', style: { top: '44%', right: '3%' }, dur: 9 },
  { Icon: SiNextdotjs, color: '#fff', style: { top: '66%', right: '4%' }, dur: 8 },
  { Icon: SiPostgresql, color: '#4169E1', style: { top: '18%', left: '4%' }, dur: 10 },
  { Icon: SiTailwindcss, color: '#06B6D4', style: { top: '78%', left: '8%' }, dur: 7.5 },
  { Icon: SiSupabase, color: '#3FCF8E', style: { top: '52%', left: '2%' }, dur: 8.5 },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, style, dur }, i) => (
        <motion.div
          key={i}
          className="glass absolute hidden h-14 w-14 items-center justify-center rounded-2xl lg:flex"
          style={style}
          animate={{ y: [0, -16, 0], rotate: [0, i % 2 ? 6 : -6, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={24} color={color} />
        </motion.div>
      ))}

      <SectionHeading
        eyebrow="About me"
        title={
          <>
            Engineer by craft, <span className="gradient-text">storyteller</span> by instinct.
          </>
        }
        sub="I build products end to end — from database schema and Golang APIs to pixel-level frontend polish — for real businesses in Bali and beyond."
      />

      {/* Animated statistics */}
      <div className="mb-24 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="glass group rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 md:p-8">
              <p className="font-display text-4xl font-semibold text-white md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-utility text-xs uppercase tracking-widest text-white/50">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />
        {timeline.map((item, i) => (
          <Reveal key={i} delay={0.05}>
            <div
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
              }`}
            >
              <span
                className={`glow-secondary absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-secondary md:left-auto ${
                  i % 2 === 0 ? 'md:-right-1.5 md:translate-x-1/2' : 'md:-left-1.5 md:-translate-x-1/2'
                }`}
              />
              <p className="font-utility text-xs font-medium uppercase tracking-[0.3em] text-secondary">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
