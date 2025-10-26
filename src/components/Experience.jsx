import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav, JEE 99.4%',
    text: 'MBC’s analytics made my practice laser-focused. The interface feels futuristic yet simple.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Ishita, NEET AIR 321',
    text: 'Live classes are super interactive. Doubts got solved instantly — day or night!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Rohan, Class 10 Topper',
    text: 'Gamified streaks kept me motivated. The visual notes are just brilliant.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop'
  }
];

const faqs = [
  {
    q: 'Do you offer free trials?',
    a: 'Yes. Explore live classes and sample tests with a 7-day trial in select batches.'
  },
  {
    q: 'How are classes delivered?',
    a: 'Through ultra-low latency live sessions with interactive polls, quizzes, and whiteboarding.'
  },
  {
    q: 'Is there 24×7 doubt support?',
    a: 'Absolutely. Ask anytime—get expert answers via chat, voice notes, or video explanations.'
  },
  {
    q: 'Do you have offline centers?',
    a: 'We are a digital-first institute with select partner hubs for test series and mentorship.'
  }
];

const Vision = () => (
  <section className="relative w-full bg-gradient-to-b from-white via-blue-50/40 to-white py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.10),transparent_40%)]" />
    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Designed to Transform Learning.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        We combine human mentorship with intelligent systems to create deeply engaging learning experiences.
        Every interaction—from notes to tests—adapts to your pace with real-time insights.
      </p>
    </div>
  </section>
);

// Scroll-driven 3D-like showcase (morph feel via progressive scale/blur) without external assets
const ScrollShowcase = () => {
  const panels = [
    {
      title: 'Adaptive Practice',
      desc: 'Question sets morph to your strengths and weaknesses in real-time.',
      colors: 'from-violet-500 to-fuchsia-500'
    },
    {
      title: 'Concept Visualizations',
      desc: 'See abstract ideas in motion with interactive visuals and mini-sims.',
      colors: 'from-sky-500 to-indigo-600'
    },
    {
      title: 'Mentor Insights',
      desc: 'Personalized guidance driven by analytics and daily feedback loops.',
      colors: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">Experience it as you scroll</h3>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">Layers glide in with depth and parallax, giving a subtle morphing feel.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {panels.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg"
              style={{ perspective: '1000px' }}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.colors} opacity-10`} />
              <div className="relative">
                <div className={`mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${p.colors}`} />
                <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// App promo with a faux-3D mobile using tilt interaction
const AppPromo = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <section id="app" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.22),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.22),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-semibold md:text-4xl">Learn on the go with the MBC App</h3>
          <p className="mt-3 max-w-md text-white/80">
            Live classes, doubt chat, practice, and analytics — all in one powerful app. Download now and stay ahead.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#" className="inline-flex items-center rounded-xl bg-white px-4 py-3 text-gray-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5">
              Get on Play Store
            </a>
            <a href="#" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-3 text-white ring-1 ring-white/20 backdrop-blur transition hover:-translate-y-0.5">
              Get on App Store
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            onMouseMove={handleMove}
            style={{ rotateX, rotateY }}
            className="relative h-[480px] w-[240px] rounded-[2.2rem] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl"
          >
            <div className="absolute -inset-10 -z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_60%)]" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.5),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.5),transparent_40%)]" />
              <div className="absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-black/60 to-transparent" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-2xl bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/20">MBC App Preview</div>
                <p className="mt-3 max-w-[160px] text-xs text-white/80">Swipe through lessons, attempt tests, and track your analytics in real-time.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="relative w-full bg-white py-20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">What Students Say</h3>
      </div>
      <div className="no-scrollbar -mx-2 flex snap-x gap-4 overflow-x-auto px-2 pb-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[280px] snap-start rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">Got Questions? We’ve Got Answers.</h3>
        </div>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <p className="font-medium text-gray-900">{f.q}</p>
                <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden px-6 transition-all ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-sm text-gray-600">{f.a}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-2xl font-bold tracking-wide">MBC — MRIDUL BHAIYA CLASSES</div>
          <p className="mt-1 text-white/80">Focused. Modern. Rank-Oriented.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#app" className="hover:underline">Mobile App</a>
          <a href="#" className="hover:underline">Admissions</a>
        </div>
      </div>
      <div className="text-center text-sm text-white/80">© {new Date().getFullYear()} MBC — Mridul Bhaiya Classes. All rights reserved.</div>
    </div>
  </footer>
);

const Experience = () => {
  return (
    <div className="w-full">
      <Vision />
      <ScrollShowcase />
      <AppPromo />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Experience;
