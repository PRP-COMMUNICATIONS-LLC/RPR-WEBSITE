import React from 'react';
import { Shield, Cpu, Zap, Globe } from 'lucide-react';

/**
 * TS-Λ3 // LABS SUBSTRATE [v1.8.8 RESTORE]
 * Narrative: Graduation Path (Sentinel -> Elders -> Forge -> Instances)
 * Tier IV: INSTANCES (Rectified from Client Instances)
 */

export const Labs: React.FC = () => {
  const tiers = [
    { title: "SENTINEL Protocol", icon: Shield, desc: "Governance engine managing the forensic evolution of substrates." },
    { title: "THE ELDERS", icon: Cpu, desc: "Advisory triad bridging strategic intent with operational execution." },
    { title: "THE FORGE", icon: Zap, desc: "Internal Intelligence Lab staging specialized product modules." },
    { title: "INSTANCES", icon: Globe, desc: "Isolated sovereign clones deployed as standalone dashboards." }
  ];

  return (
    <section id="labs" className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight italic mb-4 uppercase font-sans">
            PROTOTYPE <span className="text-cyan-400">ENCLAVE</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium italic uppercase tracking-[0.2em]">Product Graduation Path</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 hover:border-cyan-500/20 transition-all duration-500"
            >
              <t.icon className="w-5 h-5 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-4 uppercase tracking-tight">{t.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};