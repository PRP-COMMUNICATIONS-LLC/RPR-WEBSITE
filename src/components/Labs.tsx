import React from 'react';
import SymbolTile from './icons/SymbolTile';

/**
 * TS-Λ3 // LABS SUBSTRATE [v3.4.1]
 * Path: src/components/Labs.tsx
 * Mission: Nomenclature Alignment & SymbolTile Integration
 * Standard: Geometric Primitive (Glow Standard)
 * Nomenclature: Tier III: LABS // Tier IV: THE FORGE
 */

export const Labs: React.FC = () => {
  const tiers = [
    {
      id: "t1",
      title: "Tier I: SENTINEL Protocol",
      glyph: "shield",
      desc: "The core governance engine managing the forensic evolution of creative substrates."
    },
    {
      id: "t2",
      title: "Tier II: THE ELDERS",
      glyph: "memory",
      desc: "The Advisory triad bridging strategic intent with operational execution."
    },
    {
      id: "t3",
      title: "Tier III: LABS",
      glyph: "science",
      desc: "Internal Intelligence Lab staging specialized product modules (IKON, Logo, Video)."
    },
    {
      id: "t4",
      title: "Tier IV: THE FORGE",
      glyph: "build",
      desc: "Isolated sovereign clones and active execution environments (Labyrinth, MYAUDIT)."
    }
  ];

  return (
    <section id="labs" className="py-24 bg-black border-t border-white/5 min-h-screen relative overflow-hidden">
      {/* 📐 Subtle Bauhaus Background Element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L100,0" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 border-l-2 border-cyan-500 pl-8 text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic mb-4 uppercase">
            PROTOTYPE <span className="text-cyan-400">ENCLAVE</span>
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            Sovereign Evolution // Product Graduation Path
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((t) => (
            <div
              key={t.id}
              className="group bg-zinc-900/10 border border-white/10 p-10 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-700 flex flex-col items-center text-center"
            >
              {/* 🧬 GEOMETRIC PRIMITIVE: Centralized Symbol Tile */}
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <SymbolTile glyph={t.glyph} size={64} />
              </div>

              <h3 className="text-xl font-black uppercase mb-4 text-white tracking-tight italic">
                {t.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed opacity-80 group-hover:opacity-100">
                {t.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-center">
                 <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                   // SUBSTRATE: {t.id.toUpperCase()}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Labs;