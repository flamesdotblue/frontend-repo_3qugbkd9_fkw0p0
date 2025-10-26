import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle color wash to blend edges with the page background. Does not block interactions. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/20 to-[#0b0b12]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-xs tracking-[0.3em] text-white/70">MBC — MRIDUL BHAIYA CLASSES</p>
          <h1
            className="font-semibold leading-tight"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Crack JEE & NEET with a Futuristic Learning Experience.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg">
            Precision teaching. Interactive 3D visuals. Data-driven prep engineered for ranks.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-gray-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Explore Batches
              <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#app"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Get the App
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-xs uppercase tracking-widest">Scroll to discover</span>
            <span className="mt-2 inline-flex h-9 w-5 items-start justify-center rounded-full border border-white/30">
              <span className="mt-1 block h-2 w-1.5 animate-bounce rounded-full bg-white/80" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
