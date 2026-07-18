'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Magnetic from '@/components/Magnetic';

const DeviceCanvas = dynamic(() => import('@/components/three/DeviceCanvas'), { ssr: false });

// Entrance pattern: left, right, scale-from-background, repeat.
const entrance = (i) => {
  const mode = i % 3;
  if (mode === 0) return { hidden: { opacity: 0, x: -120 }, show: { opacity: 1, x: 0 } };
  if (mode === 1) return { hidden: { opacity: 0, x: 120 }, show: { opacity: 1, x: 0 } };
  return { hidden: { opacity: 0, scale: 0.75 }, show: { opacity: 1, scale: 1 } };
};

function ProjectItem({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const [hovered, setHovered] = useState(false);
  const flip = index % 2 === 1;
  const variants = entrance(index);

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 3D device — canvas only mounts while near the viewport */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`relative h-[340px] md:h-[460px] ${flip ? 'md:order-2' : ''}`}
        data-cursor
      >
        <div
          className="absolute inset-8 rounded-full blur-3xl transition-opacity duration-700"
          style={{ background: project.accent, opacity: hovered ? 0.22 : 0.1 }}
        />
        {inView && (
          <DeviceCanvas
            image={project.image}
            device={project.device}
            accent={project.accent}
            hovered={hovered}
          />
        )}
      </motion.div>

      {/* Project card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={flip ? 'md:order-1' : ''}
      >
        <motion.div
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-8 transition-colors duration-500 md:p-10"
          style={{ borderColor: hovered ? `${project.accent}55` : undefined }}
        >
          <p
            className="font-utility text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: project.accent }}
          >
            {String(index + 1).padStart(2, '0')} — {project.device === 'phone' ? 'Mobile' : 'Web'}
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">{project.desc}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-utility text-xs text-white/60"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            {project.live && (
              <Magnetic strength={0.25}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-5 py-2.5 font-utility text-sm font-medium text-void transition-transform duration-300 hover:scale-105"
                  style={{ background: project.accent }}
                >
                  Live demo <ArrowUpRight size={15} />
                </a>
              </Magnetic>
            )}
            {project.github && (
              <Magnetic strength={0.25}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-1.5 rounded-full px-5 py-2.5 font-utility text-sm font-medium transition-colors duration-300 hover:bg-white/10"
                >
                  <Github size={15} /> GitHub
                </a>
              </Magnetic>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="blob h-[500px] w-[500px] bg-accent" style={{ top: '10%', right: '-15%', opacity: 0.14 }} />

      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Projects, on <span className="gradient-text">real screens</span>.
          </>
        }
        sub="Every project rendered on the device it was built for. Move your mouse — they move with you."
      />

      <div className="flex flex-col gap-28 md:gap-40">
        {projects.map((project, i) => (
          <ProjectItem key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
