import React, { useState } from 'react';
import { Shield, Users, Hammer, LayoutGrid } from 'lucide-react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  const tabs = [
    { id: 'l1_overwatch', label: 'L1: Overwatch', icon: Shield },
    { id: 'l2_elders', label: 'L2: Elders', icon: Users },
    { id: 'l3_forge', label: 'L3: Forge', icon: Hammer },
    { id: 'l4_instances', label: 'L4: Instances', icon: LayoutGrid }
  ];

  return (
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
            <tab.icon className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-2 mb-6 ml-2">
          <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
          <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
      </div>

      <MermaidViewer
        definition={sentinelDiagrams[activeTab].definition}
        className="min-h-[450px]"
      />
    </div>
  );
};
