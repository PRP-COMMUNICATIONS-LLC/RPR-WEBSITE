import React from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v1.8.8 RESTORE]
 * Metrics: Exact canonical text payloads.
 * Visualizer: 4-tab C4 Visualizer seated at bottom.
 */

const metrics = [
  {
    label: 'METRIC_01',
    title: 'THE SOURCE OF TRUTH',
    icon: 'flag',
    body: `A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street.\n\nBad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust.\n\nFor most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth.`
  },
  {
    label: 'METRIC_02',
    title: 'THE INSIGHT (UI)',
    icon: 'insights',
    body: `Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.\n\nSomewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report.`
  },
  {
    label: 'METRIC_03',
    title: 'THE JOURNEY (CX)',
    icon: 'near_me',
    body: `We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.\n\nYour team feels this every day: the same issues repeating in every channel and across every industry. You are not short on data; you are short on a way to turn what is happening into fewer, better problems to fix.`
  }
];

export const Foundations: React.FC = () => {
  return (
    <section id="foundations" className="px-6 py-24 bg-black border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xs tracking-[0.4em] uppercase text-cyan-400 mb-16 font-mono">
          // THE FOUNDATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {metrics.map((m) => (
            <article
              key={m.label}
              className="border border-white/10 rounded-[2.5rem] bg-white/5 p-8 lg:p-10 flex flex-col hover:border-cyan-500/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-cyan-400 text-2xl">
                  {m.icon}
                </span>
                <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-mono">
                  {m.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-6 uppercase">
                {m.title}
              </h3>
              <div className="text-sm text-white/60 leading-relaxed whitespace-pre-line font-sans italic">
                {m.body}
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-white/10 pt-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-cyan-400 font-mono mb-12">
            // THE MOTHERSHIP ARCHITECTURE
          </p>
          <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-12 overflow-hidden shadow-2xl">
            <SentinelVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};