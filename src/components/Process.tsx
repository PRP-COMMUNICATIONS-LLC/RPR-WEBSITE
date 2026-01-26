/**
 * TS-Λ3 // THE PROCESS // STRATEGIC CYCLE [v4.28.0]
 * RECTIFIED: Purged Foundations accordion fragments (openId, item).
 * ALIGNMENT: Explicit named export for Home.tsx.
 */
import React from 'react';
import { Search, Zap, BarChart3, RefreshCcw } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    { 
      label: 'DISCOVER', 
      icon: Search, 
      description: 'Mapping patterns and forensic gaps in the existing substrate.', 
      output: 'Discovery Report // Gap Analysis' 
    },
    { 
      label: 'DELIVER', 
      icon: Zap, 
      description: 'Execution with high-fidelity accuracy across the Singapore harbor.', 
      output: 'Production Artifacts // Live Revised Node' 
    },
    { 
      label: 'MEASURE', 
      icon: BarChart3, 
      description: 'Compare results to the agreed metrics: what moved and what signals came from users.', 
      output: 'Forensic Performance Audit' 
    },
    { 
      label: 'IMPROVE', 
      icon: RefreshCcw, 
      description: 'Refining the loop for next cycle based on forensic telemetry.', 
      output: 'Refined Substrate // Optimized Workflow' 
    }
  ];

  return (
    <section className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-left">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
            THE PROCESS
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">
            Closing the loop on brand experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <article 
              key={i} 
              className="flex flex-col gap-6 p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl group hover:border-cyan-500/50 transition-all"
            >
              <div className="w-16 h-16 bg-black border border-zinc-800 flex items-center justify-center transition-all group-hover:border-cyan-500/50">
                <step.icon size={24} className="text-cyan-400" />
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight font-sans">
                  {step.label}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed uppercase font-mono tracking-widest text-[10px]">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.2em]">
                    {step.output}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};