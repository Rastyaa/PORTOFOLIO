import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { navLinks } from '../data/portfolio';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const openPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-emerald-900/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link to="/">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-extrabold font-display bg-gradient-to-r from-emerald-400 to-lime-500 bg-clip-text text-transparent tracking-tight"
            >
              Portofolio<span className="font-serif italic text-amber-400">.</span>
            </motion.span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex space-x-8 items-center font-medium text-slate-300"
          >
            {navLinks.slice(0, -1).map((link) => (
              <Link key={link.href} to={`/${link.href}`} className="hover:text-emerald-400 transition-colors">
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-full hover:from-emerald-500 hover:to-lime-500 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Contact
            </Link>
            <button
              onClick={openPalette}
              className="flex items-center gap-1.5 text-slate-500 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs hover:border-emerald-400/40 hover:text-emerald-400 transition-colors"
            >
              <Command size={13} />K
            </button>
          </motion.div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={openPalette} className="text-slate-400 hover:text-emerald-400 transition">
              <Command size={22} />
            </button>
            <button onClick={toggleMenu} className="text-slate-300 hover:text-emerald-400 transition">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-4 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className={`block text-lg px-4 py-2 ${
                  link.label === 'Contact' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-emerald-400'
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
