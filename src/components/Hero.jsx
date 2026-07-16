import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { revealUp, staggerContainer, fadeInUp } from '../lib/motion';
import profileImg from '../assets/Profile.webp';

const facts = ['Software Engineer @ guestlist.id', 'IT · Undiknas', 'Bali, Indonesia'];

const headline = ['I build web, mobile,', 'and the APIs', 'behind them.'];

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center pt-36 pb-10">
    <div className="max-w-[1200px] w-full mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end"
      >
        <div className="lg:col-span-8">
          <span className="meta block mb-8">Fullstack engineer</span>
          <h1 className="font-display text-[clamp(2.25rem,6.4vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-paper">
            {headline.map((line) => (
              <motion.span key={line} variants={revealUp} className="block whitespace-nowrap">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeInUp} className="font-text text-xl text-muted leading-relaxed max-w-xl mt-8">
            Saya Made Sattyatma Naryndra Pradnyana. Sekarang di guestlist.id, membangun marketplace curated
            experience di Bali — dari aplikasi konsumen, portal mitra, sampai API yang menopangnya.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-medium text-paper border-b border-line-strong pb-1 transition-colors hover:border-jade-lit hover:text-jade-lit"
            >
              Lihat karya
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-medium text-muted border-b border-transparent pb-1 transition-colors hover:border-line-strong hover:text-paper"
            >
              Hubungi saya
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <div className="relative w-40 sm:w-52 lg:w-full lg:max-w-[240px] lg:ml-auto">
            <img
              src={profileImg}
              alt="Made Sattyatma Naryndra Pradnyana"
              className="w-full aspect-[4/5] object-cover object-top border border-line"
            />
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
        <span className="meta flex items-center gap-2 text-jade-lit">
          <span className="w-1.5 h-1.5 rounded-full bg-jade-lit" />
          Available for work
        </span>
        {facts.map((fact) => (
          <span key={fact} className="meta">
            {fact}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
