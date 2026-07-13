import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Search } from 'lucide-react';
import { navLinks, socials } from '../data/portfolio';

const items = [
  ...navLinks.map((link) => ({ ...link, type: 'section', icon: ArrowRight })),
  { label: 'GitHub', href: socials.github, type: 'external', icon: Github },
  { label: 'LinkedIn', href: socials.linkedin, type: 'external', icon: Linkedin },
  { label: 'Email', href: `mailto:${socials.email}`, type: 'external', icon: Mail },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const select = useCallback(
    (item) => {
      if (!item) return;
      if (item.type === 'section') {
        navigate(`/${item.href}`);
      } else {
        window.open(item.href, '_blank', 'noreferrer');
      }
      close();
    },
    [close, navigate]
  );

  useEffect(() => {
    const handleKeydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const handleNav = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        select(filtered[activeIndex]);
      }
    };
    window.addEventListener('keydown', handleNav);
    return () => window.removeEventListener('keydown', handleNav);
  }, [open, filtered, activeIndex, select]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-raised border border-line shadow-2xl shadow-black/60 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
              <Search size={16} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Jump to a section or link..."
                className="flex-1 bg-transparent outline-none text-paper placeholder:text-muted"
              />
              <kbd className="meta border border-line px-1.5 py-0.5">esc</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && <p className="meta px-5 py-6 text-center">No matches.</p>}
              {filtered.map((item, index) => (
                <button
                  key={item.label}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => select(item)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                    index === activeIndex ? 'bg-jade/10 text-jade-lit' : 'text-muted'
                  }`}
                >
                  <item.icon size={15} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
