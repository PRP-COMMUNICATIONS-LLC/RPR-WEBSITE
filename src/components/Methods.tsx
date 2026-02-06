import React from 'react';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/**
 * TS-Λ3 // THE METHODS [v2.4.2 ALIGNED]
 * Ikon Harbor: Transitioned to Material Symbols for clinical substrate.
 * Registry: ASK -> #overwatch / PAY -> /labs / MAKE -> #foundations
 */

const steps = [
  { label: 'ASK', id: '#overwatch', icon: 'quiz', description: 'Sovereign intake and requirement mapping via dynamic forensic forms.', output: 'Intent Schema // Briefing Latch' },
  { label: 'PAY', id: '/labs', icon: 'payments', description: 'Transparent commitment and resource allocation for the Vertical Strike.', output: 'Project Ledger // Resource Lock' },
  { label: 'MAKE', id: '#foundations', icon: 'construction', description: 'Structural synthesis and logic weaving within The Forge.', output: 'Production Artifacts // Build Chunk' },
  { label: 'PLAY', id: '#methods', icon: 'rocket_launch', description: 'Live deployment and high-fidelity testing across the Singapore Harbor.', output: 'Sovereign Launch // Edge Activation' },
  { label: 'REPEAT', id: '#foundations', icon: 'update', description: 'Continuous refinement based on forensic feedback loops and RLHF.', output: 'Substrate Optimization // vNext' }
];

export const Methods: React.FC = () => {
  return (
    <section id="methods" className="bg-sovereign-bg-primary py-24 px-6 md:px-12 border-t border-sovereign-border-subtle">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading
          title="The Methods"
          kicker="Operational Loop"
          className="mb-16 border-l-2 border-sovereign-actor-cyan pl-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <a
              key={i}
              href={step.id}
              className="flex flex-col gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-cyan-500/30 transition-all duration-700 no-underline"
            >
              <div className="mb-2">
                <Icon name={step.icon} className="text-cyan-400" size="48px" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">{step.label}</h4>
                <p className="text-xs text-white/60 leading-relaxed italic h-16">{step.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">{step.output}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
