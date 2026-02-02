import React from 'react';

/**
 * TS-Λ3 // GLOBAL FOOTER [v1.8.8 FREEZE]
 */
export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] mb-6">
          RPR COMMUNICATIONS, LLC // SG-CANONICAL-2026 // v1.8.8
        </p>
        <nav className="flex justify-center flex-wrap gap-x-12 gap-y-4 text-[9px] font-black text-white/20 uppercase tracking-[0.25em]">
          <a href="#foundations" className="hover:text-cyan-400 transition-colors">THE FOUNDATIONS</a>
          <a href="#methods" className="hover:text-cyan-400 transition-colors">THE METHODS</a>
          <a href="#overwatch" className="hover:text-cyan-400 transition-colors">THE OVERWATCH</a>
          <a href="#labs" className="hover:text-cyan-400 transition-colors">LABS</a>
        </nav>
      </div>
    </footer>
  );
};