'use client';

import { useEffect, useRef } from 'react';
import {
  SiDocker, SiExpress, SiFirebase, SiGithub, SiGo, SiJavascript, SiMysql,
  SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import { orbitTech } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';

const icons = {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiGo, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiSupabase, SiFirebase, SiDocker, SiGithub, SiTailwindcss,
};

// Two counter-rotating elliptical rings rendered in DOM, driven by one rAF loop.
export default function TechOrbit() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  const rings = [
    { items: orbitTech.slice(0, 8), radius: 300, speed: 0.22, tilt: 0.32, offsetY: 0 },
    { items: orbitTech.slice(8), radius: 190, speed: -0.32, tilt: 0.42, offsetY: 10 },
  ];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf;
    const start = performance.now();

    const loop = (now) => {
      const t = (now - start) / 1000;
      const scale = Math.min(1, containerRef.current.offsetWidth / 720);
      let idx = 0;
      for (const ring of rings) {
        const step = (Math.PI * 2) / ring.items.length;
        for (let i = 0; i < ring.items.length; i++) {
          const el = itemRefs.current[idx++];
          if (!el) continue;
          const a = t * ring.speed + i * step + mouse.current.x * 0.3;
          const x = Math.sin(a) * ring.radius * scale;
          const z = Math.cos(a) * ring.radius * scale;
          const depth = (z / ring.radius + 1) / 2; // 0 back → 1 front
          const y = z * ring.tilt * (0.9 + mouse.current.y * 0.35) + ring.offsetY;
          const s = 0.55 + depth * 0.55;
          el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${s})`;
          el.style.opacity = String(0.3 + depth * 0.7);
          el.style.zIndex = String(Math.round(depth * 100));
          el.style.filter = `blur(${(1 - depth) * 2.5}px)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const node = containerRef.current;
    node.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      node.removeEventListener('mousemove', onMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flatItems = rings.flatMap((ring, r) =>
    ring.items.map((tech) => ({ tech, key: `${r}-${tech.name}` }))
  );

  return (
    <section id="stack" className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="blob h-[440px] w-[440px] bg-secondary" style={{ top: '30%', left: '30%', opacity: 0.1 }} />

      <SectionHeading
        eyebrow="Tech stack"
        title={
          <>
            Tools in <span className="gradient-text">orbit</span>.
          </>
        }
      />

      <div
        ref={containerRef}
        className="relative mx-auto h-[420px] max-w-4xl md:h-[480px]"
        data-cursor
      >
        {/* Core */}
        <div className="glow-primary absolute left-1/2 top-1/2 z-50 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-2xl font-bold md:h-28 md:w-28">
          S
        </div>

        {flatItems.map(({ tech, key }, idx) => {
          const Icon = icons[tech.icon];
          return (
              <div
                key={key}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="glass group absolute left-1/2 top-1/2 flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl transition-colors duration-300 hover:border-white/30 md:h-[72px] md:w-[72px]"
                style={{ willChange: 'transform, opacity' }}
                title={tech.name}
              >
                {Icon && <Icon size={26} color={tech.color} />}
                <span className="hidden font-utility text-[9px] text-white/50 md:block">
                  {tech.name}
                </span>
              </div>
          );
        })}
      </div>
    </section>
  );
}
