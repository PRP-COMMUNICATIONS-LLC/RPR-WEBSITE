import React from 'react';
import { X, FileText, Info } from 'lucide-react';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // STRATEGIC SIDECARD [v2.2.0]
 * Path: src/components/audit-sidebar.tsx
 * Mission: High-fidelity deep-dive with Sidecard nomenclature
 */

interface AuditSidebarProps {
    node: NodeData;
    onClose: () => void;
}

export const AuditSidebar: React.FC<AuditSidebarProps> = ({ node, onClose }) => {
    return (
        <div className="h-full w-full bg-[#080808] flex flex-col shadow-2xl border-l border-white/10 animate-in slide-in-from-right duration-500">
            <div className="p-8 border-b border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Intelligence Node</span>
                    </div>
                    <button onClick={onClose} className="p-2 -mt-2 -mr-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-all">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-3">{node.name}</h3>
                <span className="text-cyan-500 font-mono text-[9px] uppercase tracking-[0.2em] border border-cyan-500/30 px-2 py-1 rounded bg-cyan-500/5">{node.type}</span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <div className="flex items-center gap-2 mb-6 opacity-40">
                    <FileText className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Detailed Explanation</span>
                </div>
                <div className="relative pl-6 border-l border-white/5">
                    <p className="text-slate-200 text-lg leading-relaxed font-light mb-10 italic">{node.description}</p>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-2 mb-3">
                            <Info className="w-4 h-4 text-cyan-500/70" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operational Role</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-mono leading-relaxed uppercase">
                            THIS NODE IS LATCHED TO THE SOVEREIGN ROOT. ALL ACTIONS ARE GOVERNED VIA THE SENTINEL PROTOCOL.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};