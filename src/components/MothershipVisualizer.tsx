import React, { useState } from 'react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';
import { Icon } from './Icon';

export const MothershipVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: 'shield' },
    { id: 'l2_elders', label: 'L2: Elders', icon: 'group' },
    { id: 'l3_forge', label: 'L3: Forge', icon: 'build' },
    { id: 'l4_instances', label: 'L4: Instances', icon: 'grid_view' }
  ];

  return (
    <section id="mothership-visualizer" className="py-24 bg-sovereign-bg-primary border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Visualizer Header & Subhead */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
            THE MOTHERSHIP ARCHITECTURE
          </h3>
          <p className="text-sovereign-fg-muted text-sm md:text-base leading-relaxed max-w-5xl font-mono">
            A C4‑style operational map of our enterprise intelligence infrastructure, where real businesses are cloned into a single Mothership environment and governed agentic systems work alongside humans on the same source of truth.
            The diagram maps traditional hierarchy into departments (strategy, execution, governance) and revenue streams (MYAUDIT, VERIFY, etc.), with the Sentinel Protocol’s RAM engine as the central router that keeps every lane’s AI “in the loop” and useful to people by delivering measurable SME value.
          </p>
        </div>

        <div className="bg-[#080808] rounded-[2.5rem] border border-slate-800/50 p-8 md:p-12 shadow-2xl">
          <nav className="flex flex-wrap gap-2 mb-10 bg-slate-900/30 p-2 rounded-2xl border border-slate-800/40">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${
                  activeTab === tab.id ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-800/30'
                }`}
              >
                <Icon name={tab.icon} size={16} fill={activeTab === tab.id} />
                <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-2 mb-6 ml-2">
              <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
          </div>

          <div className="bg-slate-900/10 rounded-xl p-4 border border-white/5">
            <MermaidViewer
              definition={sentinelDiagrams[activeTab].definition}
              className="min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
