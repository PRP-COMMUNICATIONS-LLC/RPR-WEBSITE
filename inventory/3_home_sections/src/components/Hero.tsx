import React from 'react';

/**
 * TS-Λ3 // HERO SECTION [v6.2.0]
 * Mission: Needle Mandate Content Seating
 * Link: /labs
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Depth Latch */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-full mb-12">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] font-mono">
            EST. 2025 // EXPERIENTIAL COMMUNICATIONS
          </span>
        </div>

        {/* Clinical Headline */}
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-12">
          GLOBAL INTELLIGENCE, <br />
          <span className="text-cyan-400">EXPERIENTIAL ACTIVATION.</span>
        </h1>

        {/* The Needle Mandate Copy */}
        <p className="max-w-3xl mx-auto text-white/60 text-base md:text-lg leading-relaxed uppercase tracking-tight font-mono mb-16 border-l-2 border-white/10 pl-8 text-left italic">
          WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO THAT ACTUALLY CARES IF THE CAMPAIGN MOVES THE NEEDLE. WE PLAN CAMPAIGNS BASED ON REAL WORLD RESULTS THROUGH DIGITAL, VIRTUAL AND THE PHYSICAL SPACES..WITH THE MESSY BITS IN BETWEEN.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/labs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan-500 text-black px-10 py-5 rounded-2xl hover:bg-cyan-400 transition-all font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <span className="material-symbols-outlined text-lg">auto_awesome_motion</span>
            LABS
          </a>
          
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white/80 px-10 py-5 rounded-2xl hover:border-white/40 hover:text-white transition-all font-black text-xs tracking-widest uppercase">
            <span className="material-symbols-outlined text-cyan-400 text-lg">smart_toy</span>
            ASK OLLIE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
