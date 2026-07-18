import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import ScrollToTop from './components/ScrollToTop';
import Backdrop from './components/Backdrop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// Keyed on pathname so Home <-> ProjectDetail crossfades; hash-only
// navigation (e.g. /#projects) keeps the same key and skips the transition.
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div className="min-h-screen overflow-x-hidden relative">
        <Backdrop />

        <ScrollToTop />
        <Navbar />
        <CommandPalette />

        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
