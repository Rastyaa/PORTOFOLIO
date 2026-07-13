import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const ProjectFrame = ({ image, alt }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.94, 1]), { stiffness: 90, damping: 24 });

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 22 });

  const track = (event) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div ref={ref} onPointerMove={track} onPointerLeave={reset} className="[perspective:1400px]">
      <motion.div
        style={reduced ? undefined : { scale, rotateX, rotateY }}
        className="relative border border-line bg-raised p-2 sm:p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
      >
        <img src={image} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
};

export default ProjectFrame;
