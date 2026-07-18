'use client';

import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';

function Card({ t }) {
  return (
    <figure className="glass w-[340px] shrink-0 rounded-3xl p-7 transition-colors duration-500 hover:border-primary/40 md:w-[400px]">
      <Quote size={22} className="text-secondary" />
      <blockquote className="mt-4 text-sm leading-relaxed text-white/75">“{t.quote}”</blockquote>
      <figcaption className="mt-6">
        <p className="font-display text-sm font-medium">{t.name}</p>
        <p className="font-utility text-xs text-white/45">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Kind words, <span className="gradient-text">earned</span>.
          </>
        }
      />

      <div
        className="group relative"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
