import { lazy, Suspense } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { fadeInUp, staggerContainer } from '../lib/motion';
import { useCanRender3D } from '../lib/use3d';
import ConstellationBackground from '../components/ConstellationBackground';

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
    <article className="min-h-screen pt-32 pb-24 px-4 relative z-10">
      <ConstellationBackground />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold font-display text-white leading-tight tracking-tight mb-4">
            {project.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-serif italic text-xl md:text-2xl text-emerald-400 mb-10 max-w-2xl">
            {caseStudy.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 p-8 bg-slate-900/50 border border-white/10 rounded-3xl">
            {Object.entries(caseStudy.meta).map(([key, value]) => (
              <div key={key}>
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{metaLabels[key] ?? key}</p>
                <p className="text-slate-200 font-medium">{value}</p>
              </div>
            ))}
          </motion.div>

          {caseStudy.liveUrl && (
            <motion.div variants={fadeInUp} className="mb-10">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-all"
              >
                Visit live site <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}

          {canRender3D && (
            <motion.div variants={fadeInUp} className="relative h-80 md:h-96 mb-16 rounded-3xl border border-white/10 bg-slate-900/30 overflow-hidden">
              <Suspense fallback={null}>
                <ProjectScene screenImage={project.image} color={scene.color} />
              </Suspense>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500 tracking-widest uppercase">
                Drag to rotate
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp} className="mb-16">
          <p className="text-slate-300 text-lg leading-relaxed mb-10">{caseStudy.overview}</p>

          {caseStudy.stats?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caseStudy.stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
                  <p className="text-3xl font-extrabold font-display bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="space-y-16 mb-16">
          {caseStudy.sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
            >
              <span className="font-display text-sm text-emerald-400/80 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mt-2 mb-4">{section.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">{section.body}</p>
              {section.image && (
                <img src={section.image} alt={section.title} className="w-full rounded-2xl border border-white/10 shadow-xl" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-20 p-8 md:p-10 bg-slate-900/50 border border-white/10 rounded-3xl"
        >
          <h3 className="text-2xl font-bold font-display text-white mb-6">Behind the Build</h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.tech.map((t) => (
              <span key={t} className="px-3.5 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <ol className="space-y-3">
            {caseStudy.responsibilities.map((item, i) => (
              <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                <span className="font-display text-emerald-400/80 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <Link to="/#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">
            ← Back to all projects
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all"
          >
            Next project: {nextProject.title} <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
