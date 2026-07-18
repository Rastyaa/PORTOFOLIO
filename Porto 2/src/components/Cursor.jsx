'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      document.documentElement.classList.remove('custom-cursor-active');
      return;
    }

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest('a, button, [data-cursor]')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <div className="hidden [@media(pointer:fine)]:block">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </div>
  );
}
