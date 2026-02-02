import React, { useState } from 'react';
import { Shield, Cpu, Zap, LayoutGrid } from 'lucide-react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';

/**
 * TS-Λ3 // SENTINEL VISUALIZER [v1.8.8]
 * Mission: 4-tab C4 diagram selector with Stitch-approved Bauhaus styling.
 */

const tabs = [
  { id: 'l1_overwatch', label: 'L1: OVERWATCH', icon: Shield },
  { id: 'l2_elders', label: 'L2: ELDERS', icon: Cpu },
  { id: 'l3_forge', label: 'L3: FORGE', icon: Zap },
  { id: 'l4_instances', label: 'L4: INSTANCES', icon: LayoutGrid },
] as const;

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');

  return (
    <div className="w-full">
      {/* TAB NAVIGATION */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-2 min-w-[120px]
              ${activeTab === tab.id
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                : 'text-white/40 hover:text-white hover:bg-white/5'}
            `}
          >
            <tab.icon size={18} />
            <span className="text-[9px] font-black tracking-widest uppercase">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* MERMAID CANVAS */}
      <div className="bg-black/40 rounded-3xl border border-white/10 p-8 flex items-center justify-center min-h-[450px]">
        <MermaidViewer
          id={activeTab}
          definition={sentinelDiagrams[activeTab].definition}
        />
      </div>
    </div>
  );
};