import { motion } from 'framer-motion';
import { iconMap } from '../lib/techIcons';
import { techStack } from '../data/portfolio';
import { fadeInUp, staggerFast } from '../lib/motion';
import SectionHeading from './SectionHeading';

const TechItem = ({ tech }) => {
  const Logo = iconMap[tech.icon];

  return (
    <motion.li
      variants={fadeInUp}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="flex items-center gap-3 border border-line bg-raised px-4 py-3.5 transition-colors duration-300 hover:border-line-strong"
    >
      {Logo && <Logo size={22} color={tech.brand} className="shrink-0" />}
      <span className="text-[15px] font-medium text-bone whitespace-nowrap">{tech.name}</span>
    </motion.li>
  );
};

const Skills = () => (
  <section id="skills" className="py-28">
    <div className="max-w-[1200px] mx-auto px-6">
      <SectionHeading
        eyebrow="Stack"
        title="The daily stack"
        subtitle="Twenty-two tools, one goal: shipping product."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerFast}
      >
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <span className="meta">{category}</span>
              <span className="meta ml-2 text-line-strong">{String(items.length).padStart(2, '0')}</span>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-9 lg:grid-cols-4">
              {items.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
