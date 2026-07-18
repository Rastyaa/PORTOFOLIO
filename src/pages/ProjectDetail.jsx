import { lazy, Suspense } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../lib/motion';
import { useCanRender3D } from '../lib/use3d';

const ProjectScene = lazy(() => import('../components/ProjectScene'));

const metaLabels = {
  client: 'Client',
  role: 'Role',
  year: 'Year',
  timeline: 'Timeline',
  scope: 'Scope',
  location: 'Location',
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const canRender3D = useCanRender3D();

  if (!project) return <Navigate to="/" replace />;

  const { caseStudy, scene } = project;
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="min-h-screen pt-36 pb-24">
      <div className="max-w-[900px] mx-auto px-6">
        <Link to="/#projects" className="meta inline-flex items-center gap-2 mb-16 transition-colors hover:text-paper">
          <ArrowLeft size={14} /> Back to work
        </Link>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1
            variants={fadeInUp}
            className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-paper"
          >
            {project.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-text text-xl text-muted max-w-2xl mt-6">
            {caseStudy.subtitle}
          </motion.p>

          <motion.dl
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 border-t border-line mt-12 pt-8"
          >
            {Object.entries(caseStudy.meta).map(([key, value]) => (
              <div key={key}>
                <dt className="meta mb-2">{metaLabels[key] ?? key}</dt>
                <dd className="text-paper font-medium">{value}</dd>
              </div>
            ))}
          </motion.dl>

          {caseStudy.liveUrl && (
            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-medium text-paper border-b border-line-strong pb-1 transition-colors hover:border-jade-lit hover:text-jade-lit"
              >
                Visit live site
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          )}

          {canRender3D && (
            <motion.div
              variants={fadeInUp}
              className="relative h-80 md:h-96 mt-16 border border-line bg-raised overflow-hidden"
            >
              <Suspense fallback={null}>
                <ProjectScene screenImage={project.image} color={scene.color} device={scene.device} />
              </Suspense>
              <span className="meta absolute bottom-4 left-1/2 -translate-x-1/2">Drag to rotate</span>
            </motion.div>
          )}
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mt-20"
        >
          <p className="font-text text-xl leading-relaxed text-muted">{caseStudy.overview}</p>

          {caseStudy.stats?.length > 0 && (
            <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-line mt-12">
              {caseStudy.stats.map((stat) => (
                <div key={stat.label} className="py-8 border-line sm:border-l sm:first:border-l-0 sm:pl-8 sm:first:pl-0">
                  <dt className="meta mb-3">{stat.label}</dt>
                  <dd className="font-display text-4xl font-semibold tracking-[-0.03em] text-paper">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </motion.section>

        <div className="mt-20 space-y-20">
          {caseStudy.sections.map((section, i) => (
            <motion.section
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="border-t border-line pt-8"
            >
              <span className="meta">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-paper mt-3 mb-5">
                {section.title}
              </h3>
              <p className="font-text text-lg leading-relaxed text-muted max-w-2xl mb-8">{section.body}</p>
              {section.image && (
                <img src={section.image} alt={section.title} loading="lazy" className="w-full border border-line" />
              )}
            </motion.section>
          ))}
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mt-20 border-t border-line pt-8"
        >
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-paper mb-8">Behind the build</h3>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {caseStudy.tech.map((t) => (
              <li key={t} className="meta">
                {t}
              </li>
            ))}
          </ul>

          <ol className="space-y-5">
            {caseStudy.responsibilities.map((item, i) => (
              <li key={i} className="flex gap-5">
                <span className="meta shrink-0 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-text text-lg leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        <div className="mt-24 border-t border-line pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/#projects" className="meta transition-colors hover:text-paper">
            ← All projects
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-2 font-medium text-paper transition-colors hover:text-jade-lit"
          >
            Next: {nextProject.title}
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
