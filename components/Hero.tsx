'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HEADLINE_LINES = ['Precision Tools for', 'Every Procedure,', 'Every Theatre.'];

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: the giant brand watermark behind the headline drifts up as you
  // scroll past the hero, and the banner image shifts gently for depth.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="wrap">
        <div className="hero-top">
          <motion.p
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Surgical Instruments · Procedure Packs · Consumables
          </motion.p>

          {/* Per-line fade-up (no overflow clip-mask — avoids the descender
              clipping that the mask reveal introduced previously). */}
          <h1 className="display">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={i}
                className="hero-headline-line"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          >
            For 20&nbsp;years we&apos;ve supplied UK hospitals, surgeries and independents
            with single-use instruments, bespoke procedure packs and theatre consumables
            — built to clinical spec and delivered on time.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
          >
            <a href="#shop" className="btn btn-primary">Shop the Catalogue</a>
            <a href="#bespoke" className="btn-link">Request a Bespoke Pack →</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-banner"
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
        >
          <motion.img
            style={{ y: bannerY }}
            alt="Precision surgical instruments laid out on a sterile tray"
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format&fit=crop"
          />
          <div className="hero-banner-stats">
            <motion.div
              className="hero-chip"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
            >
              <strong>ISO 13485</strong>
              <span>Certified Quality</span>
            </motion.div>
            <motion.div
              className="hero-chip"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
            >
              <strong>20+ Years</strong>
              <span>800+ UK Clinics Served</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-watermark"
        aria-hidden="true"
        style={{ y: watermarkY, opacity: watermarkOpacity }}
      >
        surgical&nbsp;solutions
      </motion.div>
    </section>
  );
}
