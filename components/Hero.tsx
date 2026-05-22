'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HEADLINE_LINES = ['Precision Tools for', 'Every Procedure,', 'Every Theatre.'];

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: watermark drifts upward as you scroll past the hero.
  // useScroll with `target` gives us a 0..1 progress for "section enters viewport"
  // to "section leaves viewport" — drives the watermark's vertical translate.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0]);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="wrap">
        <div className="hero-grid">

          <motion.div
            className="hero-circle left"
            initial={{ opacity: 0, x: -120, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          >
            <img
              alt="Surgeon portrait"
              src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=700&q=80&auto=format&fit=crop"
            />
          </motion.div>

          <div className="hero-center">
            <h1 className="display">
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={i}
                  className="hero-headline-line"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
            >
              For 20&nbsp;years we&apos;ve supplied UK hospitals, surgeries and independents
              with single-use instruments, bespoke procedure packs and theatre consumables
              — built to clinical spec and delivered on time.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
            >
              <a href="#shop" className="btn btn-primary">Shop the Catalogue</a>
              <a href="#bespoke" className="btn-link">Request a Bespoke Pack →</a>
            </motion.div>
          </div>

          <motion.div
            className="hero-circle right"
            initial={{ opacity: 0, x: 120, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
          >
            <img
              alt="Surgical instruments close-up"
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80&auto=format&fit=crop"
            />
          </motion.div>
        </div>

        <motion.div
          className="hero-watermark"
          aria-hidden="true"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          surgical&nbsp;solutions
        </motion.div>
      </div>
    </section>
  );
}
