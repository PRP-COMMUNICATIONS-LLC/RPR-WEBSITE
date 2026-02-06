import React, { useState } from 'react';
import { Icon } from './Icon';
import type { NodeData } from '../App';
import { L1OverwatchCommand } from './L1OverwatchCommand';
import { L2TheElders } from './L2TheElders';
import { L3AgencyForge } from './L3AgencyForge';
import { L4Sovereignty } from './L4Sovereignty';

interface NodeModalProps {
  node: NodeData;
  onClose: () => void;
}

const NodeModal: React.FC<NodeModalProps> = ({ node, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#050505] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-start">
          <div>
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{node.type}</div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{node.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <Icon name="close" size="1.5rem" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed">{node.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Audit Trail</h3>
            <div className="space-y-4">
              {node.auditTrail.map((entry, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {idx !== node.auditTrail.length - 1 && (
                      <div className="w-px flex-1 bg-gray-800 my-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="text-[10px] font-mono text-gray-600 mb-1">{entry.timestamp}</div>
                    <div className="text-sm font-semibold text-gray-200">{entry.action}</div>
                    <div className="text-xs text-gray-400 mt-1 italic">by {entry.user}</div>
                    {entry.details && (
                      <div className="mt-2 p-2 bg-white/5 rounded border border-white/5 text-[11px] text-gray-400 font-mono">
                        {entry.details}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-900/50 border-t border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-gray-200 transition-colors"
          >
            Close Trace
          </button>
        </div>
      </div>
    </div>
  );
};

type TabId = 'l1' | 'l2' | 'l3' | 'l4';

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('l1');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const tabs = [
    { id: 'l1' as const, label: 'L1: SENTINEL', icon: "skull", fill: 1 as const, description: "System Orchestration & Overwatch Command" },
    { id: 'l2' as const, label: 'L2: ELDERS', icon: "assistant_device", fill: 0 as const, description: "Cognitive Governance & Advisory Councils" },
    { id: 'l3' as const, label: 'L3: FORGE', icon: "workspaces", fill: 1 as const, description: "Component Assembly & Revenue Generation" },
    { id: 'l4' as const, label: 'L4: SOVEREIGNTY', icon: "apk_install", fill: 1 as const, description: "Root Identity & Implementation Substrate" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'l1': return <L1OverwatchCommand onNodeClick={setSelectedNode} />;
      case 'l2': return <L2TheElders onNodeClick={setSelectedNode} />;
      case 'l3': return <L3AgencyForge onNodeClick={setSelectedNode} />;
      case 'l4': return <L4Sovereignty onNodeClick={setSelectedNode} />;
      default: return null;
    }
  };

  const activeTabInfo = tabs.find(t => t.id === activeTab)!;

  return (
    <div className="bg-sovereign-bg-primary rounded-[2.5rem] border border-sovereign-border-subtle p-8 md:p-12 shadow-2xl ring-1 ring-sovereign-card-ring">
      <nav className="flex flex-wrap gap-4 mb-10 bg-sovereign-bg-elevated p-3 rounded-[2rem] border border-sovereign-border-subtle">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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
          <h3 className="text-xl font-bold text-sovereign-fg-primary uppercase tracking-tight">{activeTabInfo.label}: {activeTab === 'l1' ? 'SENTINEL PROTOCOL' : activeTab === 'l2' ? 'THE ELDERS' : activeTab === 'l3' ? 'THE FORGE' : 'SOVEREIGNTY'}</h3>
          <p className="text-sovereign-fg-muted text-[10px] font-mono uppercase tracking-[0.2em]">{activeTabInfo.description}</p>
      </div>

      <div className="bg-sovereign-bg-elevated border border-sovereign-border-subtle rounded-3xl overflow-hidden min-h-[600px]">
        {renderContent()}
      </div>

      {selectedNode && (
        <NodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </div>
  );
};
