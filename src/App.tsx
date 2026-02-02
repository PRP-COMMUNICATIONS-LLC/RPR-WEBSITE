"use client";

import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Foundations } from './components/Foundations';
import { Process } from './components/Process';
import { Labs } from './components/Labs';
import { Overwatch } from './components/Overwatch';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

/**
 * TS-Λ3 // HARBOR A MAIN SUBSTRATE [v1.8.8 HARD-LATCH]
 * Authority: hello@butterdime.com
 * Status: FROZEN.
 */

export default function App() {
  useEffect(() => {
    // Seating Material Symbols for "smart_toy" icon in Hero CTA
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans">
        <Header />

        <main className="flex flex-col">
          {/* HERO SECTION - Left Aligned */}
          <Hero />

          {/* FOUNDATIONS - ID: #foundations */}
          <Foundations />

          {/* METHODS / THE PROCESS - ID: #methods */}
          <section id="methods">
            <Process />
          </section>

          {/* LABS - ID: #labs */}
          <Labs />

          {/* OVERWATCH - ID: #overwatch */}
          <Overwatch />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
