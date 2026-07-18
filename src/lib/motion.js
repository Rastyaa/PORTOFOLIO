const ease = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// Line-mask reveal: pair with an `overflow-hidden` wrapper — the inner
// element slides up from below the fold line. Pure transform, so it can't
// strand text half-clipped the way animated clip-paths did.
export const maskLine = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.7, ease } },
};

export const revealUp = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

// Poleng strip draws in like a rule being ruled.
export const drawInX = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease } },
};
