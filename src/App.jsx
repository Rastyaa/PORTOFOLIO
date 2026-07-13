import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import ScrollToTop from './components/ScrollToTop';
import Backdrop from './components/Backdrop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
