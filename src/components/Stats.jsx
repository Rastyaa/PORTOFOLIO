import { motion } from 'framer-motion';
import { fadeInUp, staggerFast } from '../lib/motion';
import { stats } from '../data/portfolio';

const Stats = () => (
  <section className="py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="meta block mb-6"
      >
        By the numbers
      </motion.span>

      <motion.dl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerFast}
        className="grid grid-cols-1 border-t border-line sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="py-8 border-line sm:border-l sm:first:border-l-0 sm:pl-8 sm:first:pl-0"
          >
            <dt className="meta mb-3">{stat.label}</dt>
            <dd className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-paper">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Stats;
