import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={fadeInUp}
    className="border-t border-line pt-6 mb-16"
  >
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <span className="meta block mb-4">{eyebrow}</span>}
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-paper">{title}</h2>
      </div>
      {subtitle && <p className="font-text text-lg text-muted max-w-sm md:text-right">{subtitle}</p>}
    </div>
  </motion.div>
);

export default SectionHeading;
