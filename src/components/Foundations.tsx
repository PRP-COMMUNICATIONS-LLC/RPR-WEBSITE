import React, { useState } from 'react';
import { MermaidViewer } from './MermaidViewer';
import { THE_MOTHERSHIP } from '../data/theMothership';

/**
 * TS-Λ3 // FOUNDATIONS [v2.1.0]
 * Three canonical pillars with controlled expansion + system architecture map
 * Expansion State: Closed by default (useState: false)
 * Typography: White → White/60 → White/50 hierarchy
 */
export const Foundations: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="foundations" className="bg-[#050505] border-b border-white/5 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em]">
            FOUNDATIONS
          </h2>
          <p className="text-primary font-mono tracking-[0.2em] text-sm uppercase">
            Three Core Pillars
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed tracking-tight">
          The foundational architecture of RPR Communications' approach to brand, customer experience, and strategic activation.
        </p>

        {/* Expansion Toggle Button */}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-3 rounded-full border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-all hover:border-primary"
        >
          {expanded ? '— Hide Pillars' : '+ View Pillars'}
        </button>

        {/* Pillar Cards — Conditional Render */}
        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
            {/* Pillar I: Source of Truth */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-all">
              <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-4">
                Source of Truth
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street.
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust. We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome.
              </p>
            </div>

            {/* Pillar II: The Insight (UI) */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-all">
              <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-4">
                The Insight (UI)
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. We aim to ground consumer insight in measurable reality using the right tools.
              </p>
            </div>

            {/* Pillar III: The Experience (UX) */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-all">
              <h3 className="text-white font-bold text-lg uppercase tracking-tight mb-4">
                The Experience (UX)
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                We observe what people actually do and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress.
              </p>
            </div>
          </div>
        )}

        {/* System Map: THE MOTHERSHIP */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <div className="space-y-6 mb-12">
            <h3 className="text-white text-3xl font-bold uppercase tracking-tight">
              THE MOTHERSHIP
            </h3>
            <p className="text-primary text-xs font-bold uppercase tracking-widest">
              System Architecture
            </p>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              The foundational pillars sit atop this sovereign governance structure.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 overflow-x-auto">
            <MermaidViewer definition={THE_MOTHERSHIP} />
          </div>
        </div>
      </div>
    </section>
  );
};