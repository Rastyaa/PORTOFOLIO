import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={fadeInUp}
    className="text-center mb-20"
  >
    {eyebrow && (
      <span className="inline-block text-emerald-400 font-mono text-sm tracking-widest mb-4">{eyebrow}</span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 mt-4 text-lg">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
