import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'JEE Mains / Advanced',
    desc: 'Concept-deep dives, problem sprints, and exam simulations.',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600'
  },
  {
    title: 'NEET',
    desc: 'High-yield topics, visual mnemonics, and clinical reasoning.',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600'
  },
  {
    title: 'Foundation (8th–10th)',
    desc: 'Maths & Science mastery with olympiad-focused practice.',
    colorFrom: 'from-purple-500',
    colorTo: 'to-indigo-600'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="relative w-full bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Courses that Elevate</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Immersive pathways tailored for every stage of your journey.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.colorFrom} ${c.colorTo} opacity-10`} />
              <div className="relative">
                <div className={`mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${c.colorFrom} ${c.colorTo}`} />
                <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>

                <div className="mt-8 flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-gray-900 underline underline-offset-4">View syllabus</a>
                  <div className={`rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${c.colorFrom} ${c.colorTo} shadow`}>Enroll</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
