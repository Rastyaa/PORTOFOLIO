import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { maskLine, staggerContainer, fadeInUp } from '../lib/motion';
import profileImg from '../assets/Profile.webp';

const now = ['Now shipping at guestlist.id — 1,000+ active clients', 'IT · Undiknas', 'Bali, Indonesia'];

const headline = [
  { text: 'I build web, mobile,' },
  { text: 'and the APIs behind them —' },
  { text: 'shipped from Bali.', accent: true },
];

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center pt-36 pb-10">
    <div className="max-w-[1200px] w-full mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end"
      >
        <div className="lg:col-span-12">
          <motion.span variants={fadeInUp} className="meta block mb-8">
            Fullstack engineer — Bali, Indonesia
          </motion.span>
          <motion.h1
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-bone"
          >
            {headline.map((line) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <motion.span
                  variants={maskLine}
                  className={`block lg:whitespace-nowrap ${line.accent ? 'text-bronze-lit' : ''}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>

        <div className="lg:col-span-8">
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
            I'm Made Sattyatma Naryndra Pradnyana — fullstack engineer at guestlist.id, building a
            curated-experience marketplace serving 1,000+ active clients: consumer app, partner portal, and the
            APIs underneath.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-medium text-bone border-b border-line-strong pb-1 transition-colors hover:border-bronze-lit hover:text-bronze-lit"
            >
              See the work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-medium text-muted border-b border-transparent pb-1 transition-colors hover:border-line-strong hover:text-bone"
            >
              Get in touch
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <div className="relative w-40 sm:w-52 lg:w-full lg:max-w-[240px] lg:ml-auto">
            <div className="relative border border-line">
              <img
                src={profileImg}
                alt="Made Sattyatma Naryndra Pradnyana"
                className="w-full aspect-[4/5] object-cover object-top grayscale contrast-105"
              />
              {/* Bronze duotone: hue and saturation from the overlay, luminance from the photo. */}
              <div className="absolute inset-0 bg-bronze mix-blend-color" aria-hidden="true" />
              <div className="absolute inset-0 bg-night/20" aria-hidden="true" />
            </div>
            <span className="meta block mt-3 lg:text-right">Bali, ID — 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="max-w-[1200px] w-full mx-auto px-6 mt-20"
    >
      <div className="border-t border-line pt-4 flex flex-wrap items-center gap-x-8 gap-y-2">
        <span className="meta flex items-center gap-2 text-bronze-lit">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-lit" />
          Available for work
        </span>
        {now.map((fact) => (
          <span key={fact} className="meta">
            {fact}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
