import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SymbolTile from '../../components/symboltile';
import { Icon } from '../../components/Icon';

/**
 * TS-Λ3 // MYAUDIT [v3.0.0]
 * Mission: High-Fidelity Forensic Align (SymbolTile Integration)
 * Path: src/pages/labs/MyAudit.tsx
 */

export const MyAudit: React.FC = () => {
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => setTimestamp(new Date().toISOString()), 5000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "Compliance Health", value: "99.8%", status: "OPTIMAL", glyph: "shield" },
    { label: "Anomaly Detection", value: "0.02%", status: "LOW", glyph: "notification_important" },
    { label: "Ledger Mirroring", value: "SYNCED", status: "STABLE", glyph: "database" },
    { label: "Audit Readiness", value: "TIER 1", status: "CERTIFIED", glyph: "verified" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md px-10 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group transition-all">
            <SymbolTile glyph="arrow_back" size={32} className="opacity-60 group-hover:opacity-100" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-200">
              Return to Overwatch
            </span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Live Substrate</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-20 border-l-4 border-cyan-500 pl-8">
          <div className="flex items-center gap-4 mb-4">
             <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">Tier IV // Instance</span>
             <div className="h-px w-12 bg-white/10"></div>
             <span className="text-[10px] font-mono text-slate-600 uppercase">MY-KL-001</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
            MY<span className="text-cyan-400">AUDIT</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Forensic AI accounting substrate for Malaysian SMEs. Replacing manual bookkeeping with audit-ready records.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="bg-zinc-900/10 border border-white/5 p-8 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="flex items-center justify-between mb-8">
                <SymbolTile glyph={m.glyph} size={48} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{m.status}</span>
              </div>
              <h3 className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-2">{m.label}</h3>
              <p className="text-2xl font-black text-white italic">{m.value}</p>
            </div>
          ))}
        </div>

        <section className="bg-zinc-900/5 border border-white/5 rounded-[2.5rem] p-10 overflow-hidden">
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
            <h2 className="text-xl font-bold uppercase text-white italic tracking-tight">Forensic Ledger</h2>
            <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-2">
              <Icon name="schedule" size={12} /> {timestamp}
            </div>
          </div>
          <div className="grid gap-8">
            <div className="p-8 bg-black border border-white/5 rounded-3xl flex items-start gap-6">
               <SymbolTile glyph="bar_chart" size={40} />
               <div>
                  <h4 className="text-sm font-bold uppercase mb-2 tracking-wide text-cyan-400">Financial Intent Orchestration</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-3xl">
                    Every entry is validated against the Malaysian SME tax mandate. Sentinel Protocol ensures bank-to-ledger transitions are mirrored without human intervention.
                  </p>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em]">
          SG-CANONICAL-2026 // HARBOR-C ISOLATION ACTIVE
        </p>
      </footer>
    </div>
  );
};

export default MyAudit;