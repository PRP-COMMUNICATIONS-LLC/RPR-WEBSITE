import React from 'react';
// PATH FIX: Pointing to local component directory
import SymbolTile from './symboltile';

/**
 * TS-Λ3 // THE METHODS [v3.0.2]
 * Mission: Resolve TS2307 Module Resolution
 */
const steps = [
  { label: 'ASK', id: '#overwatch', icon: 'dynamic_form', output: 'Intent Schema' },
  { label: 'PAY', id: '/labs', icon: 'send_money', output: 'Resource Lock' },
  { label: 'MAKE', id: '#foundations', icon: 'construction', output: 'Build Chunk' },
  { label: 'PLAY', id: '#methods', icon: 'rocket_launch', output: 'Edge Activation' },
  { label: 'REPEAT', id: '#foundations', icon: 'update', output: 'Substrate Opt' }
];

export const Methods: React.FC = () => {
  return (
    <section id="methods" className="bg-black py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 border-l-2 border-cyan-500 pl-8">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            THE <span className="text-cyan-400">METHODS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <a key={i} href={step.id} className="flex flex-col items-center text-center gap-6 p-10 bg-zinc-900/10 border border-white/10 rounded-[2.5rem] group hover:border-cyan-500/30 transition-all duration-700">
              <SymbolTile glyph={step.icon} size={64} />
              <div className="space-y-2">
                <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">{step.label}</h4>
                <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">{step.output}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;