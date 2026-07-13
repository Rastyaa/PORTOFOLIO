import { useEffect, useRef } from 'react';

const COUNT = 220;

const Snow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let flakes = [];
    let frameId;

    const seed = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flakes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.2 + 0.6,
        speed: Math.random() * 0.55 + 0.15,
        drift: Math.random() * 0.4 - 0.2,
        alpha: Math.random() * 0.45 + 0.12,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const flake of flakes) {
        flake.y += flake.speed;
        flake.phase += 0.006;
        flake.x += flake.drift + Math.sin(flake.phase) * 0.2;

        if (flake.y > window.innerHeight + 4) {
          flake.y = -4;
          flake.x = Math.random() * window.innerWidth;
        }
        if (flake.x > window.innerWidth + 4) flake.x = -4;
        if (flake.x < -4) flake.x = window.innerWidth + 4;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 231, 226, ${flake.alpha})`;
        ctx.fill();
      }
      frameId = requestAnimationFrame(draw);
    };

    seed();
    draw();
    window.addEventListener('resize', seed);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', seed);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default Snow;
