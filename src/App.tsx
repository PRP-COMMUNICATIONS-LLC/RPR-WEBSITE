import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Foundations } from "./components/Foundations";
import { Methods } from "./components/Methods";
import { SentinelVisualizer } from "./components/SentinelVisualizer";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

/**
 * TS-Λ3 // CLINICAL SUBSTRATE [v2.1.0]
 * AUTHORITY: hello@butterdime.com
 * MISSION: ENVIRONMENT HARDENING (Phase 1)
 */
export default function App() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
        <div className="relative z-10">
          <Header />
          <main className="pt-20">
            <Hero />
            <section id="foundations">
              <Foundations />
            </section>
            <section id="methods">
              <Methods />
            </section>
            <section id="visualizer">
              <SentinelVisualizer />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
