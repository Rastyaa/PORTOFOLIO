import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectFrame from './ProjectFrame';

const ProjectRow = ({ project, index }) => {
  const { meta } = project.caseStudy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t border-line pt-6 transition-colors duration-500 hover:border-jade-lit"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="meta text-paper">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-paper transition-transform duration-500 group-hover:translate-x-1.5">
            {project.title}
          </h3>
          <span className="meta ml-auto">{meta.year}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="meta">{meta.role}</span>
          <span className="meta">{project.tech.slice(0, 4).join(' · ')}</span>
          <span className="meta ml-auto flex items-center gap-1.5 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-jade-lit">
            Read case study
            <ArrowUpRight size={13} />
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <ProjectFrame image={project.image} alt={project.title} />
          </div>
          <p className="font-text text-lg leading-relaxed text-muted lg:col-span-4">{project.desc}</p>
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
        title="Lima proyek, satu benang merah"
        subtitle="Proyek yang saya kerjakan — dari produk production hingga eksplorasi personal."
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
