import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SymbolTile from './icons/SymbolTile';

/**
 * TS-Λ3 // FOUNDATIONS [v9.0.0]
 * Fix: Card Icon beside Header (Closed) + Verbatim Manifest Text.
 */

const PILLARS = [
  { 
    id: 'truth', 
    glyph: 'compass_calibration', 
    title: 'THE SOURCE OF TRUTH', 
    desc: "A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up. Bad data quietly bleeds budgets and derails strategy. We work to identify what actually matters, where it lives, and how to measure it across every touchpoint." 
  },
  { 
    id: 'insight', 
    glyph: 'input_circle', 
    title: 'THE USER INSIGHT', 
    desc: "Your customers are not short on information; they are exhausted and conflicted. Somewhere along the way, big data replaced the simple act of listening properly. We aim to ground consumer insight in measurable reality using the right tools." 
  },
  { 
    id: 'journey', 
    glyph: 'conversion_path', 
    title: 'THE CONSUMER JOURNEY', 
    desc: "We try to get the moments that matter right. Your team feels this every day: the same issues repeating. We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists." 
  }
];

export const Foundations: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="foundations" className="relative bg-black py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-20 text-left border-l-2 border-cyan-500 pl-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-4">
            The Foundations
          </h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">Core DNA // Strategic Substrate</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div key={p.id} className={`group bg-[#0a0a0a] border transition-all rounded-[2.5rem] ${isOpen ? 'border-cyan-500/50' : 'border-white/10'}`}>
                <button onClick={() => setOpenId(isOpen ? null : p.id)} className="flex w-full items-center gap-6 p-8 md:p-10 text-left">
                  <SymbolTile size={48} glyph={p.glyph} className="shrink-0" />
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <h3 className={`text-lg font-black tracking-widest uppercase ${isOpen ? 'text-cyan-400' : 'text-white'}`}>{p.title}</h3>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : 'text-white/40'}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-8 md:px-10 pb-10 border-t border-white/5 pt-8">
                    <p className="text-slate-400 text-sm leading-relaxed italic">{p.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Foundations;
