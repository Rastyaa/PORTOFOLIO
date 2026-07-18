import { lazy, Suspense } from 'react';
import { useCanRender3D } from '../lib/use3d';

const Aurora = lazy(() => import('./Aurora'));
const Particles = lazy(() => import('./Particles'));

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const Backdrop = () => {
  // WebGL aurora/particles are heavier than the old CSS/canvas2D effects —
  // skip them on phones and for reduced-motion, same gate ProjectScene uses for its 3D canvas.
  const canRenderFx = useCanRender3D();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {canRenderFx && (
        <div className="absolute inset-x-0 top-0 h-[60vh] opacity-70">
          <Suspense fallback={null}>
            {/* Dusk over the water: gamelan gold, sea teal, deep amber. */}
            <Aurora colorStops={['#c9973f', '#2f8f83', '#8a5a2b']} amplitude={0.9} blend={0.6} speed={0.4} />
          </Suspense>
        </div>
      )}

      {canRenderFx && (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Particles
              particleColors={['#ece5d8', '#e8c98a', '#c9973f']}
              particleCount={180}
              particleSpread={14}
              speed={0.08}
              particleBaseSize={70}
              sizeRandomness={1}
              alphaParticles
              disableRotation={false}
            />
          </Suspense>
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(115% 80% at 50% 0%, transparent 20%, #12100d 95%)' }}
      />

      {/* Scrim keeps the navbar legible when the aurora drifts under it. */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: 'linear-gradient(to bottom, #12100d 0%, rgba(18,16,13,0.6) 45%, transparent 100%)' }}
      />

      <div
        className="hidden md:block absolute inset-[-6%] opacity-[0.04] mix-blend-screen will-change-transform animate-grain"
        style={{ backgroundImage: grain }}
      />
    </div>
  );
};

export default Backdrop;
