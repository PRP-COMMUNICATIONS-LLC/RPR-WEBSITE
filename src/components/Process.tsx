import React from 'react';

/**
 * TS-Λ3 // PROCESS SUBSTRATE [v1.8.8 RESTORE]
 * Anchor: #methods
 * Nodes: DISCOVER → DELIVER → MEASURE → IMPROVE
 */

export const Process: React.FC = () => {
  const steps = [
    {
      label: 'DISCOVER',
      icon: 'search',
      description: 'Mapping patterns and forensic gaps in the existing substrate.',
      output: 'Discovery Report // Gap Analysis'
    },
    {
      label: 'DELIVER',
      icon: 'bolt',
      description: 'Execution with high-fidelity accuracy across the Singapore harbor.',
      output: 'Production Artifacts // Live Revised Node'
    },
    {
      label: 'MEASURE',
      icon: 'bar_chart',
      description: 'Compare results to the agreed metrics: what moved and what signals came from users.',
      output: 'Forensic Performance Audit'
    },
    {
      label: 'IMPROVE',
      icon: 'autorenew',
      description: 'Refining the loop for next cycle based on forensic telemetry.',
      output: 'Refined Substrate // Optimized Workflow'
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5" id="process-internal">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-20 text-left">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            THE <span className="text-cyan-400">PROCESS</span>
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.4em] text-[10px] uppercase">
            Closing the loop on brand experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <article
              key={i}
              className="flex flex-col gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-cyan-500/30 transition-all duration-700"
            >
              <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center transition-all group-hover:border-cyan-500/20">
                <span className="material-symbols-outlined text-cyan-400 text-2xl">
                  {step.icon}
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-white uppercase tracking-tight">
                  {step.label}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4 border-t border-white/5">
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
