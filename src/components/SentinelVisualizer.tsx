import React, { useState } from 'react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { Icon } from './Icon';

// STUBBED FOR CLINICAL PURGE [v2.1.0]
const MermaidViewer: React.FC<{ definition: string, className?: string }> = ({ definition, className }) => (
  <div className={`flex items-center justify-center bg-sovereign-bg-elevated border border-sovereign-border-subtle rounded-3xl p-12 ${className}`}>
    <div className="text-center space-y-4">
      <Icon name="schema" className="text-sovereign-actor-cyan animate-pulse" size="3rem" />
      <p className="text-[10px] font-mono text-sovereign-fg-muted uppercase tracking-[0.2em]">Architecture Substrate Locked</p>
      {/* Forensic trace for unused prop to satisfy TS6133 */}
      <span className="hidden">{definition.length}</span>
    </div>
  </div>
);

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: "skull", fill: 1 as const },
    { id: 'l2_elders', label: 'L2: Elders', icon: "assistant_device", fill: 0 as const },
    { id: 'l3_forge', label: 'L3: Forge', icon: "workspaces", fill: 1 as const },
    { id: 'l4_instances', label: 'L4: Instances', icon: "apk_install", fill: 1 as const }
  ];

  return (
    <div className="bg-sovereign-bg-primary rounded-[2.5rem] border border-sovereign-border-subtle p-8 md:p-12 shadow-2xl ring-1 ring-sovereign-card-ring">
      <nav className="flex flex-wrap gap-4 mb-10 bg-sovereign-bg-elevated p-3 rounded-[2rem] border border-sovereign-border-subtle">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[140px] p-2 rounded-2xl transition-all duration-500 flex items-center gap-4 group ${
              activeTab === tab.id ? 'bg-white/5 shadow-lg border border-white/10' : 'text-slate-500 hover:bg-white/5'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              activeTab === tab.id ? 'bg-black shadow-[0_0_24px_rgba(255,255,255,0.35)] border border-white/10' : 'bg-transparent border border-transparent'
            }`}>
              <Icon
                name={tab.icon}
                fill={tab.fill}
                className={`text-xl ${activeTab === tab.id ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}
              />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === tab.id ? 'text-white' : 'text-slate-500'}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-2 mb-6 ml-2">
          <h3 className="text-xl font-bold text-sovereign-fg-primary uppercase tracking-tight">{sentinelDiagrams[activeTab].title}</h3>
          <p className="text-sovereign-fg-muted text-[10px] font-mono uppercase tracking-[0.2em]">{sentinelDiagrams[activeTab].description}</p>
      </div>

      <MermaidViewer
        definition={sentinelDiagrams[activeTab].definition}
        className="min-h-[450px]"
      />
    </div>
  );
};
