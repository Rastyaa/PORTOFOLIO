import { motion } from 'framer-motion';
import { drawInX } from '../lib/motion';

// Poleng — the black-and-white checked cloth wrapped around shrines and
// banyan trees across Bali. Two rows of 5px squares, drawn in from the left.
const PolengDivider = ({ className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    variants={drawInX}
    aria-hidden="true"
    className={`h-[10px] w-full origin-left ${className}`}
    style={{
      backgroundImage: 'repeating-conic-gradient(rgba(236, 229, 216, 0.2) 0% 25%, transparent 0% 50%)',
      backgroundSize: '10px 10px',
    }}
  />
);

export default PolengDivider;
