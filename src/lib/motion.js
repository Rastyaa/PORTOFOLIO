const ease = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const revealUp = {
  hidden: { opacity: 0, y: '0.4em', clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 -10% 0)',
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
