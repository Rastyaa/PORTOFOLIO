import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectFrame from './ProjectFrame';

// Index number that trades itself for a poleng chip on hover.
const IndexChip = ({ index }) => (
  <span className="relative meta text-bone">
    <span className="transition-opacity duration-300 group-hover:opacity-0">
      {String(index + 1).padStart(2, '0')}
    </span>
    <span
      aria-hidden="true"
      className="absolute inset-0 m-auto grid h-3.5 w-3.5 grid-cols-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <span className="bg-bronze-lit" />
      <span />
      <span />
      <span className="bg-bronze-lit" />
    </span>
  </span>
);

const ProjectRow = ({ project, index }) => {
  const { meta } = project.caseStudy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t border-line pt-6 transition-colors duration-500 hover:border-bronze-lit"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <IndexChip index={index} />
          <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-bone transition-transform duration-500 group-hover:translate-x-1.5">
            {project.title}
          </h3>
          <span className="meta ml-auto">{meta.year}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="meta">{meta.role}</span>
          <span className="meta">{project.tech.slice(0, 4).join(' · ')}</span>
          <span className="meta ml-auto flex items-center gap-1.5 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-bronze-lit">
            Read case study
            <ArrowUpRight size={13} />
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <ProjectFrame image={project.image} alt={project.title} />
          </div>
          <p className="text-lg leading-relaxed text-muted lg:col-span-4">{project.desc}</p>
        </div>
      </Link>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="py-28">
    <div className="max-w-[1200px] mx-auto px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Five projects, one throughline"
        subtitle="Production products and personal explorations — every one of them shipped."
      />

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
