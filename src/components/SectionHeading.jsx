import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';
import PolengDivider from './PolengDivider';

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mb-16">
    <PolengDivider className="mb-6" />
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        {eyebrow && <span className="meta block mb-4">{eyebrow}</span>}
        <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold tracking-[-0.015em] text-bone">
          {title}
        </h2>
      </div>
      {subtitle && <p className="text-lg text-muted max-w-sm md:text-right">{subtitle}</p>}
    </motion.div>
  </div>
);

export default SectionHeading;
