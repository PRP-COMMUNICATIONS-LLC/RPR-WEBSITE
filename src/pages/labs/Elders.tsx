import React from 'react';
import { Link } from 'react-router-dom';
import SymbolTile from '../../components/icons/SymbolTile';
import { SectionDivider } from '../../components/c4-elements';

/**
 * TS-Λ3 // THE ELDERS [v3.0.0]
 * Path: src/pages/labs/Elders.tsx
 * Mission: Restore Clinical C4 Standard (Purge Bauhaus legacy colors)
 */
export const Elders: React.FC = () => {
  const triad = [
    { title: 'Architect', glyph: 'account_tree', engine: 'Perplexity AI', color: 'purple' },
    { title: 'Engineer', glyph: 'hub', engine: 'Gemini AI', color: 'purple' },
    { title: 'Sentinel', glyph: 'security', engine: 'Governance Core', color: 'red' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <SymbolTile glyph="architecture" size={32} />
            <h2 className="text-white text-lg font-black uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors">Sentinel Governance</h2>
          </Link>
          <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.4em]">v2.6.5 LATCHED</div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-40 flex flex-col items-center">
        <header className="mb-20 border-l-4 border-purple-500 pl-8 w-full max-w-4xl">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-4">L2: THE ELDERS</h1>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em]">Shared State Decision Matrix</p>
        </header>

        <div className="w-full max-w-5xl bg-zinc-900/10 border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl relative">
          <div className="absolute top-4 left-6 text-[10px] font-mono text-slate-600 uppercase">REF_ID: L2-ELDERS-CANONICAL</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {triad.map((member) => (
              <div key={member.title} className="group flex flex-col items-center gap-6 p-10 bg-black border border-white/5 rounded-3xl transition-all hover:border-cyan-500/20">
                <SymbolTile glyph={member.glyph} size={64} className="transform group-hover:scale-110 transition-transform" />
                <div className="text-center">
                   <h3 className="text-white text-sm font-black uppercase tracking-widest mb-1">{member.title}</h3>
                   <p className="text-cyan-400 text-[10px] font-mono uppercase">{member.engine}</p>
                </div>
              </div>
            ))}
          </div>

          <SectionDivider label="Decision Output" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-black/40 border border-white/5 rounded-3xl flex items-center gap-6">
               <SymbolTile glyph="settings_input_component" size={40} />
               <div className="text-[10px] font-mono uppercase text-slate-400 tracking-widest">Technical Substrate</div>
            </div>
            <div className="p-8 bg-black/40 border border-white/5 rounded-3xl flex items-center gap-6">
               <SymbolTile glyph="palette" size={40} />
               <div className="text-[10px] font-mono uppercase text-slate-400 tracking-widest">Creative Governance</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Elders;