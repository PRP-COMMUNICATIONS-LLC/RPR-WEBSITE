import React from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v2.1.3]
 * Resolution: DNA Pillars Accordion + Integrated SentinelVisualizer.
 * Mission: Mothership Header Alignment & Content Purge.
 * Authority: hello@butterdime.com
 *
 * ENFORCEMENT:
 * - Do NOT change icon names, label strings, colors, or spacing without approval.
 * - This file may NOT modify Header/Hero; it is scoped to #foundations only.
 */

const foundationsMetrics = [
  {
    id: "truth",
    title: "Source of Truth",
    content: "We reject the 'pretty story' sitting on top of bad data. Our governance mandates that every strategic message is seated in reality."
  },
  {
    id: "insight",
    title: "The Insight (UI)",
    content: "High-fidelity substrates for Agencies and SMEs require forensic clarity."
  },
  {
    id: "experience",
    title: "The Experience (UX)",
    content: "We fix fewer, better problems by auditing the friction within the creative lifecycle."
  }
];

export const Foundations: React.FC = () => {
  const [openMetric, setOpenMetric] = React.useState<string | null>(null);

  const toggleMetric = (label: string) => {
    setOpenMetric((current) => (current === label ? null : label));
  };

  return (
    <section id="foundations" className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* MOTHERSHIP HEADER ALIGNMENT [v2.1.3] */}
        <div className="space-y-4 mb-16 text-left border-l-2 border-cyan-400 pl-8">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight italic font-sans">
            THE <span className="text-cyan-400">MOTHERSHIP</span>
          </h2>
          <p className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm uppercase leading-relaxed max-w-xl">
            Crafting a virtual clone of your physical business entity
          </p>
        </div>

        {/* DNA PILLARS ACCORDION */}
        <div className="space-y-4 mb-24">
          {dnaPillars.map((p) => (
            <div
              key={p.id}
              className={`border border-slate-800/60 rounded-[2rem] overflow-hidden transition-all duration-500 ${
                openPillar === p.id ? 'bg-slate-900/20 border-cyan-500/30' : 'bg-transparent'
              }`}
            >
              <button
                onClick={() => setOpenPillar(openPillar === p.id ? null : p.id)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className={`text-xl font-bold uppercase tracking-tight ${
                  openPillar === p.id ? 'text-white' : 'text-slate-500'
                }`}>
                  {p.title}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${
                  openPillar === p.id ? 'rotate-180 text-cyan-500' : 'text-slate-700'
                }`} />
              </button>
              {openPillar === p.id && (
                <div className="px-8 pb-8 text-slate-400 text-sm leading-relaxed max-w-3xl animate-in fade-in slide-in-from-top-2">
                  {p.content}
                </div>

                {/* COLLAPSIBLE DETAILS */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[1500px] mt-4' : 'max-h-0'
                    }`}
                >
                  <div className="text-sm text-white/60 leading-relaxed space-y-4 whitespace-pre-line">
                    {metric.details}
                  </div>
                </div>

                {/* TOGGLE BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleMetric(metric.label)}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {isOpen ? 'Collapse' : 'Read full'}
                  <span className="material-symbols-outlined text-base">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* THE MOTHERSHIP // SENTINEL C4 VISUALIZER */}
        <section aria-labelledby="mothership-heading">
          <div className="mb-6">
            <p className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-mono">
              // THE MOTHERSHIP
            </p>
            <p className="text-xs text-white/40 tracking-widest uppercase font-mono mt-2">
              SENTINEL GOVERNANCE C4 DIAGRAMS
            </p>
          </div>

          {/* NOTE: SentinelVisualizer owns the 4-tab selector (L1–L4 C4 diagrams). */}
          <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-8 backdrop-blur-sm">
            <SentinelVisualizer />
          </div>
        </section>
      </div>
    </section>
  );
};
