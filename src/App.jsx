import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <Features />
      <Courses />
      <Experience />
    </div>
  );
}

export default App;
