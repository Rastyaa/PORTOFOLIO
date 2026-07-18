'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { featured } from '@/lib/data';

const FeaturedCanvas = dynamic(() => import('@/components/three/FeaturedCanvas'), { ssr: false });

export default function FeaturedMacbook() {
  const section = useRef(null);
  const eyebrowRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const lidAngleRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: '+=180%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          // Lid opens over the first ~70% of the scroll
          lidAngleRef.current = -1.85 * gsap.utils.clamp(0, 1, p / 0.7);
          const textP = gsap.utils.clamp(0, 1, (p - 0.55) / 0.35);
          gsap.set(textRef.current, { opacity: textP, y: 40 * (1 - textP) });
          gsap.set(eyebrowRef.current, { opacity: gsap.utils.clamp(0, 1, p / 0.25) });
          gsap.set(glowRef.current, { opacity: 0.06 + p * 0.24 });
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative h-screen overflow-hidden">
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[140px]"
        style={{ opacity: 0.06 }}
      />

      <p
        ref={eyebrowRef}
        className="absolute left-1/2 top-24 z-10 -translate-x-1/2 font-utility text-xs font-medium uppercase tracking-[0.4em] text-secondary"
        style={{ opacity: 0 }}
      >
        {featured.eyebrow} — keep scrolling
      </p>

      <div className="absolute inset-0">
        <FeaturedCanvas image={featured.image} lidAngleRef={lidAngleRef} />
      </div>

      <div
        ref={textRef}
        className="absolute bottom-14 left-1/2 z-10 w-full max-w-2xl -translate-x-1/2 px-6 text-center"
        style={{ opacity: 0 }}
      >
        <h3 className="font-display text-4xl font-semibold md:text-5xl">
          <span className="gradient-text">{featured.title}</span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">{featured.body}</p>
        <a
          href={featured.live}
          target="_blank"
          rel="noreferrer"
          className="glass mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-utility text-sm font-medium transition-colors duration-300 hover:bg-white/10"
        >
          Visit the live product <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
