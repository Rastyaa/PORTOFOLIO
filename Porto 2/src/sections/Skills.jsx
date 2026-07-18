'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="blob h-[400px] w-[400px] bg-primary" style={{ top: '20%', left: '-12%', opacity: 0.2 }} />

      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            Every layer of <span className="gradient-text">the stack</span>.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, rotate: i % 2 ? 0.6 : -0.6 }}
            className="glass group relative overflow-hidden rounded-3xl p-7"
            style={{ '--accent': skill.accent }}
          >
            {/* Hover glow */}
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: skill.accent }}
            />
            <div
              className="mb-5 h-1 w-8 rounded-full transition-all duration-500 group-hover:w-16"
              style={{ background: skill.accent }}
            />
            <h3 className="font-display text-xl font-medium">{skill.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-utility text-xs text-white/60 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
