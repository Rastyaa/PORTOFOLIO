import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const COLS = 8;
const ROWS = 5;
const TILES = COLS * ROWS;

// 7 is coprime with 40, so this visits every tile once in a scattered order.
const tileDelay = (i) => ((i * 7) % TILES) * 0.02;

// Image reveal in the poleng voice: a grid of night-colored tiles scatters
// away on first view. Phones and reduced-motion get the image straight away.
const CheckerReveal = ({ children, className = '' }) => {
  const reduced = useReducedMotion();
  const [skip] = useState(() => window.matchMedia('(max-width: 767px)').matches);

  if (reduced || skip) return <div className={className}>{children}</div>;

  return (
    <div className={`relative ${className}`}>
      {children}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
      >
        {Array.from({ length: TILES }, (_, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 0, transition: { duration: 0.3, delay: tileDelay(i) } },
            }}
            className="bg-night"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CheckerReveal;
