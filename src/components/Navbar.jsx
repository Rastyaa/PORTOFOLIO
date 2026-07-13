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
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-line py-3' : 'border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold tracking-[-0.02em] text-paper">
            Sattyatma
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={`/${link.href}`} className="meta transition-colors hover:text-paper">
                {link.label}
              </Link>
            ))}
            <button
              onClick={openPalette}
              aria-label="Open command palette"
              className="meta flex items-center gap-1.5 border border-line px-2.5 py-1.5 transition-colors hover:border-line-strong hover:text-paper"
            >
              <Command size={12} />K
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={openPalette} aria-label="Open command palette" className="text-muted hover:text-paper transition-colors">
              <Command size={20} />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-muted hover:text-paper transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden mt-3 bg-ink/95 backdrop-blur-xl border-t border-line overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                onClick={toggleMenu}
                className="meta block border-b border-line px-6 py-4 hover:text-paper"
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
