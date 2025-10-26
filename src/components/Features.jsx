import React from 'react';
import { Brain, Atom, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-based Test Analysis',
    icon: Brain,
    desc: 'Personalized insights on accuracy, speed, and concepts to master.'
  },
  {
    title: 'Interactive Live Classes',
    icon: Atom,
    desc: 'Two-way live sessions with polls, quizzes, and instant feedback.'
  },
  {
    title: 'Gamified Learning Experience',
    icon: Sparkles,
    desc: 'Earn badges, unlock levels, and stay motivated every day.'
  },
  {
    title: '24×7 Doubt Support',
    icon: MessageSquare,
    desc: 'Ask anytime. Expert mentors and peers resolve doubts fast.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Built for Focused Learning</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A modern toolkit crafted for JEE & NEET success.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ perspective: '1000px' }}
              >
                <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-400/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
