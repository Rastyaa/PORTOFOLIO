import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/motion';
import { stats } from '../data/portfolio';

const Stats = () => (
  <section className="py-24 px-4 relative z-10 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 mb-6">
          <Sparkles className="text-emerald-400" size={26} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Highlights</h2>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl hover:border-emerald-500/50 transition-all duration-500"
          >
            <p className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-2">{stat.value}</p>
            <p className="text-slate-400 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stats;
