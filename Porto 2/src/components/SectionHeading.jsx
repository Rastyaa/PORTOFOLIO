'use client';

import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
      <Reveal>
        <p className="mb-4 font-utility text-xs font-medium uppercase tracking-[0.35em] text-secondary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
