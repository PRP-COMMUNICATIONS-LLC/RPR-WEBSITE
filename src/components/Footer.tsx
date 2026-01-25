import React from 'react';

/**
 * TS-Λ3 // GLOBAL FOOTER [v1.1.0]
 * Includes "EST. 2025" temporal marker and "TS-Λ3" governance stamp.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="h-[70px] fixed bottom-0 w-full z-[100] bg-black border-t border-white/10 flex items-center px-[20px] md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative">
        
        {/* Brand & Temporal Marker */}
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
          <span className="material-symbols-outlined text-cyan-500 text-xl">radar</span>
          <span>RPR COMMUNICATIONS LLC</span>
          <span className="text-white/20 font-mono text-[8px] tracking-[0.15em] uppercase ml-2">
            EST. 2025
          </span>
        </div>

        {/* ENGINEER LAYER: LOGIC OXO (Centered Decorator) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full pointer-events-none">
          <div className="grid grid-cols-3 grid-rows-3 gap-1 opacity-20">
            <div className="w-3 h-3 border border-cyan-500/20 flex items-center justify-center text-[8px] font-mono text-cyan-500">X</div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
            <div className="w-3 h-3 border border-cyan-500/20 flex items-center justify-center text-[8px] font-mono text-cyan-500">X</div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
            <div className="w-3 h-3 border border-cyan-500/20 flex items-center justify-center text-[8px] font-mono text-cyan-500">O</div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
            <div className="w-3 h-3 border border-cyan-500/20"></div>
          </div>
        </div>

        {/* Governance & Links */}
        <div className="flex gap-8 text-[10px] font-bold uppercase text-slate-600">
          <a className="hover:text-cyan-500 transition-colors" href="#">Sovereign Terms</a>
          <span className="text-white/5 font-mono">TS-Λ3</span>
        </div>

      </div>
    </footer>
  );
};