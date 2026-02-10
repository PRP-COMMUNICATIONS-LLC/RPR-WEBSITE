import React, { useState } from 'react';
import { sentinelDiagrams } from '../c4-diagrams/C4DiagramDefinitions-Final';
import { MermaidViewer } from './MermaidViewer';
import { Icon } from './Icon';
import SymbolTile from './icons/SymbolTile';
import { SectionHeading } from './SectionHeading';
import { SystemBox } from './c4-elements';
import L1OverwatchCommand from './L1OverwatchCommand';
import L2TheElders from './L2TheElders';
import L3TheForge from './L3TheForge';
import L4Sovereignty from './L4Sovereignty';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // MOTHERSHIP VISUALIZER [proto v5.1.0] // Orchestrator latch per inventory §4
 * PURPOSE: Interactive C4 Architectural Map (proto v5.1.0)
 * AUTHORITY: PERPLEXITY COMMAND
 */

export const MothershipVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof sentinelDiagrams>('l1_overwatch');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  type TabId = keyof typeof sentinelDiagrams;
  const tabs: { id: TabId; label: string; glyph: string }[] = [
    { id: 'l1_overwatch' as TabId, label: 'L1: Overwatch', glyph: 'skull' },
    { id: 'l2_elders' as TabId, label: 'L2: Elders', glyph: 'assistant_device' },
    { id: 'l3_forge' as TabId, label: 'L3: Forge', glyph: 'workspaces' },
    { id: 'l4_instances' as TabId, label: 'L4: Sovereignty', glyph: 'apk_install' }
  ];

  const renderActiveLayer = () => {
    switch (activeTab) {
      case 'l1_overwatch':
        return <L1OverwatchCommand onNodeClick={setSelectedNode} />;
      case 'l2_elders':
        return <L2TheElders onNodeClick={setSelectedNode} />;
      case 'l3_forge':
        return <L3TheForge onNodeClick={setSelectedNode} />;
      case 'l4_instances':
        return <L4Sovereignty onNodeClick={setSelectedNode} />;
      default:
        return (
          <div className="bg-slate-900/10 rounded-xl p-4 border border-white/5">
            <MermaidViewer
              definition={sentinelDiagrams[activeTab].definition}
              className="min-h-[450px]"
            />
          </div>
        );
    }
  };

  return (
    <section id="mothership-visualizer" className="py-24 bg-sovereign-bg-primary border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Visualizer Header & Subhead (layout borrowed from MothershipSection) */}
        <div className="mb-12">
          <SectionHeading
            title="THE MOTHERSHIP ARCHITECTURE"
            kicker="Operational Map"
            className="mb-6 border-l-2 border-sovereign-actor-cyan pl-6"
          />

          <p className="text-sovereign-fg-muted text-sm md:text-base leading-relaxed max-w-5xl font-mono">
            A C4‑style operational map of our enterprise intelligence infrastructure, where real businesses are cloned into a single Mothership environment and governed agentic systems work alongside humans on the same source of truth.
            The diagram maps traditional hierarchy into departments (strategy, execution, governance) and revenue streams (MYAUDIT, VERIFY, etc.), with the Sentinel Protocol’s RAM engine as the central router that keeps every lane’s AI “in the loop” and useful to people by delivering measurable SME value.
          </p>
        </div>

        <div className="bg-[#080808] rounded-[2.5rem] border border-slate-800/50 p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[700px] flex flex-col">
          <nav className="flex flex-wrap gap-2 mb-10 bg-slate-900/30 p-2 rounded-2xl border border-slate-800/40 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] py-4 rounded-xl transition-all duration-500 flex flex-col items-center gap-1.5 ${
                  activeTab === tab.id ? 'bg-sky-600 text-white shadow-lg ring-1 ring-cyan-400/20' : 'text-slate-500 hover:bg-slate-800/30'
                }`}
              >
                <SymbolTile glyph={tab.glyph} size={28} className={`${activeTab === tab.id ? 'opacity-100' : 'opacity-70'}`} glow={true} />
                <span className="text-[10px] font-black uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-2 mb-6 ml-2 relative z-10">
              <h3 className="text-xl font-bold text-white uppercase">{sentinelDiagrams[activeTab].title}</h3>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">{sentinelDiagrams[activeTab].description}</p>
          </div>

          <div className="flex-1 relative z-10 bg-slate-900/10 rounded-xl border border-white/5">
            {renderActiveLayer()}
          </div>

          {/* C4 primitives: quick-access system boxes (integrated below) */}
          <div className="mt-8 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <SystemBox title="Overwatch" description="Global Orchestrator" glyph="skull" color="cyan" onClick={() => setActiveTab('l1_overwatch')} />
              <SystemBox title="Elders" description="Policy & Elders" glyph="assistant_device" color="purple" onClick={() => setActiveTab('l2_elders')} />
              <SystemBox title="Forge" description="Workspaces & The Forge" glyph="workspaces" color="orange" onClick={() => setActiveTab('l3_forge')} />
              <SystemBox title="Sovereignty" description="Runtime Instances" glyph="apk_install" color="red" onClick={() => setActiveTab('l4_instances')} />
            </div>
          </div>
        </div>
      </div>

      {/* Forensic Log Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedNode(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-slate-800 rounded-3xl shadow-2xl p-8 max-h-[80vh] overflow-auto">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <Icon name="close" size={24} />
            </button>

            <div className="mb-8">
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-2">Node Forensic Log</div>
              <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">{selectedNode.name}</h4>
              <p className="text-slate-500 text-sm mt-2 font-mono uppercase tracking-widest">{selectedNode.type}</p>
            </div>

            <div className="mb-10">
              <p className="text-slate-300 text-sm leading-relaxed">{selectedNode.description}</p>
            </div>

            <div className="space-y-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Shared State History</div>
              {selectedNode.auditTrail?.map((trail, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5" />
                    {i !== (selectedNode.auditTrail?.length ?? 0) - 1 && <div className="w-px flex-1 bg-slate-800 my-1" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">{trail.timestamp} // {trail.user}</div>
                    <div className="text-xs font-bold text-white uppercase tracking-tight mb-1">{trail.action}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{trail.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
