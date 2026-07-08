import { lazy, Suspense, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCanRender3D } from '../lib/use3d';

const ProjectScene = lazy(() => import('./ProjectScene'));

const ProjectMockup = ({ project, featured = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '200px' });
  const can3D = useCanRender3D();
  const { image, scene } = project;

  return (
    <div ref={ref} className={`relative ${featured ? 'h-72 md:h-[26rem]' : 'h-56 md:h-72'}`}>
      {/* podium glow + contact shadow beneath the floating mockup */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(60% 90% at 50% 100%, ${scene.color}33 0%, transparent 70%)`,
        }}
      />
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-2/3 h-8 bg-black/60 blur-2xl rounded-[100%] pointer-events-none" />

      {can3D && inView ? (
        <Suspense fallback={null}>
          <ProjectScene screenImage={image} color={scene.color} frameloop="demand" />
        </Suspense>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <img
            src={image}
            alt={project.title}
            className="max-h-full rounded-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] object-cover [transform:perspective(1200px)_rotateX(6deg)]"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectMockup;
