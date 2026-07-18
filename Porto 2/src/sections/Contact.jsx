'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { profile } from '@/lib/data';
import Magnetic from '@/components/Magnetic';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

// Stylized "map" backdrop: dot grid with a pulsing marker over Bali.
function MapBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 70% 65% at 72% 45%, black 25%, transparent 70%)',
        }}
      />
      <div className="absolute right-[24%] top-[42%]">
        <span className="absolute -left-6 -top-6 h-12 w-12 animate-pulse-ring rounded-full border border-secondary" />
        <span
          className="absolute -left-6 -top-6 h-12 w-12 animate-pulse-ring rounded-full border border-secondary"
          style={{ animationDelay: '1.5s' }}
        />
        <span className="glow-secondary absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-secondary" />
        <span className="absolute left-4 top-[-6px] flex items-center gap-1 font-utility text-[10px] uppercase tracking-widest text-white/50">
          <MapPin size={10} /> Bali, ID
        </span>
      </div>
    </div>
  );
}

const socialLinks = [
  { Icon: Github, href: profile.socials.github, label: 'GitHub' },
  { Icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { Icon: SiWhatsapp, href: profile.socials.whatsapp, label: 'WhatsApp' },
  { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

const field =
  'w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 font-utility text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-md transition-all duration-300 focus:border-secondary/60 focus:bg-white/[0.08] focus:shadow-[0_0_30px_-10px_rgba(0,245,255,0.5)]';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <MapBackdrop />
      <div className="blob h-[420px] w-[420px] bg-primary" style={{ bottom: '0%', left: '-10%', opacity: 0.2 }} />

      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="gradient-text">alive</span>.
          </>
        }
        sub="Have a product idea, a project that needs shipping, or a team that needs a fullstack engineer? My inbox is open."
      />

      <div className="relative z-10 grid gap-10 md:grid-cols-5 md:gap-14">
        {/* Form */}
        <Reveal className="md:col-span-3">
          <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                type="email"
                className={field}
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <textarea
              required
              rows={5}
              className={field}
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Magnetic strength={0.2}>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.96 }}
                className="glow-primary flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 font-utility text-sm font-medium transition-transform duration-300 hover:scale-105"
              >
                <Send size={15} /> Send message
              </motion.button>
            </Magnetic>
          </form>
        </Reveal>

        {/* Direct channels */}
        <Reveal delay={0.15} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="font-utility text-xs uppercase tracking-[0.3em] text-white/40">
                Prefer it direct?
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block break-all font-display text-2xl font-medium transition-colors duration-300 hover:text-secondary"
              >
                {profile.email}
              </a>
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-utility text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                or chat on WhatsApp →
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <Magnetic key={label} strength={0.4}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass flex h-12 w-12 items-center justify-center rounded-2xl text-white/70 transition-all duration-300 hover:border-secondary/50 hover:text-secondary"
                  >
                    <Icon size={18} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
