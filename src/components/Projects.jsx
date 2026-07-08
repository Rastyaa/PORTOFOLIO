import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectMockup from './ProjectMockup';

const ProjectCard = ({ project, featured, offset }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: 0.05 }}
    className={`group ${offset ? 'lg:mt-28' : ''}`}
  >
    <Link to={`/projects/${project.slug}`} aria-label={`Lihat detail ${project.title}`} className="block">
      <ProjectMockup project={project} featured={featured} />

      <div className="pt-6 max-w-xl">
        <p className="text-slate-300 leading-snug">
          <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</span>
          {' — '}
          {project.desc}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
          {project.tech.slice(0, 2).join(' • ')}
        </p>
      </div>
    </Link>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-28 px-4 relative z-10 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="Selected Work" title="Featured Projects" subtitle="Eksplorasi karya terbaik saya dalam pengembangan fullstack." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={index === 0}
            offset={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
