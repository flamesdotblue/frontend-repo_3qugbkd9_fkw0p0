import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.3em] text-gray-600">Innovision Academy</p>
          <h1 className="font-semibold leading-tight text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Empowering the Next Generation of Innovators.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg">
            India’s Most Futuristic Learning Platform for JEE & NEET Aspirants.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Join Now
              <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full bg-white/70 px-6 py-3 text-gray-900 ring-1 ring-gray-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Courses
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-xs uppercase tracking-widest">Scroll to discover</span>
            <span className="mt-2 inline-flex h-9 w-5 items-start justify-center rounded-full border border-gray-300">
              <span className="mt-1 block h-2 w-1.5 animate-bounce rounded-full bg-gray-600" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
