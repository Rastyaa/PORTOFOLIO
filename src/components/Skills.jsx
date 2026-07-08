import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Boxes, Code2, Database, Wrench } from 'lucide-react';
import { iconMap } from '../lib/techIcons';
import { techStack } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const gridContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const categoryIcon = { Languages: Code2, Frameworks: Boxes, Database, Tools: Wrench };
const categories = Object.keys(techStack);

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading eyebrow="Toolbox" title="Tools of the Craft" subtitle="Alat dan teknologi yang saya gunakan untuk menghidupkan ide." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcon[cat];
            const active = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active
                    ? 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.15)]'
                    : 'bg-slate-900/50 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                <Icon size={16} /> {cat}
                <span className="ml-1 text-xs opacity-60">{techStack[cat].length}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {techStack[activeTab].map((tech) => {
              const Logo = iconMap[tech.icon];
              return (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className={`group flex items-center gap-3 p-4 rounded-2xl border ${tech.border} ${tech.bg} backdrop-blur-sm shadow-lg cursor-default`}
                >
                  <motion.span
                    className={`shrink-0 ${tech.color}`}
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {Logo && <Logo size={26} />}
                  </motion.span>
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
