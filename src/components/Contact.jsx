import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/motion';
import { socials } from '../data/portfolio';

const links = [
  { label: 'WhatsApp', href: socials.whatsapp },
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-28 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="border-t border-line pt-10"
        >
          <motion.span variants={fadeInUp} className="meta block mb-8">
            Contact
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-paper max-w-3xl"
          >
            Punya produk yang perlu dikirim? Mari bicara.
          </motion.h2>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${socials.email}`}
              className="font-display text-2xl md:text-4xl font-medium tracking-[-0.02em] text-paper border-b border-line-strong pb-1 transition-colors hover:border-jade-lit hover:text-jade-lit"
            >
              {socials.email}
            </a>
            <button
              onClick={copyEmail}
              className="meta inline-flex items-center gap-2 border border-line px-3 py-2 transition-colors hover:border-line-strong hover:text-paper"
            >
              {copied ? <Check size={13} className="text-jade-lit" /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </motion.div>

          <motion.ul variants={fadeInUp} className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="meta group inline-flex items-center gap-1.5 transition-colors hover:text-paper"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="mt-24 border-t border-line pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="meta">© 2026 Sattyatma Naryndra</span>
          <span className="meta">React · Tailwind · Framer Motion</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
