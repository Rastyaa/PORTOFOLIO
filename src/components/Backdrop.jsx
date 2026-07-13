import Snow from './Snow';

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

// Aurora ribbons: wide, heavily blurred bands that drift across the top.
// The skew lives inside each keyframe — a transform here would be overwritten by the animation.
const ribbons = [
  { color: '#16a34a', top: '-18%', height: '44vh', opacity: 0.11, animation: 'ribbon-a 15s ease-in-out infinite' },
  { color: '#0d9488', top: '4%', height: '36vh', opacity: 0.08, animation: 'ribbon-b 21s ease-in-out infinite' },
  { color: '#84cc16', top: '18%', height: '28vh', opacity: 0.045, animation: 'ribbon-c 27s ease-in-out infinite' },
];

const Backdrop = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    {ribbons.map((ribbon) => (
      <div
        key={ribbon.color}
        className="absolute -left-1/4 w-[150vw] blur-[90px] will-change-transform"
        style={{
          top: ribbon.top,
          height: ribbon.height,
          opacity: ribbon.opacity,
          background: `linear-gradient(100deg, transparent 0%, ${ribbon.color} 35%, ${ribbon.color} 55%, transparent 100%)`,
          animation: ribbon.animation,
        }}
      />
    ))}

    <Snow />

    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(115% 80% at 50% 0%, transparent 20%, #080a09 95%)' }}
    />

    {/* Scrim keeps the navbar legible when a ribbon drifts under it. */}
    <div
      className="absolute inset-x-0 top-0 h-40"
      style={{ background: 'linear-gradient(to bottom, #080a09 0%, rgba(8,10,9,0.6) 45%, transparent 100%)' }}
    />

    <div
      className="absolute inset-[-6%] opacity-[0.04] mix-blend-screen will-change-transform animate-grain"
      style={{ backgroundImage: grain }}
    />
  </div>
);

export default Backdrop;
