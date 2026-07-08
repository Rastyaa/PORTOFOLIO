import { useState } from 'react';

export const useCanRender3D = () => {
  const [canRender] = useState(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isWideEnough = window.matchMedia('(min-width: 768px)').matches;
    return !prefersReducedMotion && isWideEnough;
  });

  return canRender;
};
