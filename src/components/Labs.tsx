/**
 * TS-Λ3 // THE LABS // TECHNICAL SHOWCASE [v8.4.0]
 * RECTIFIED: Integrated Sentinel, Elders, and MYAUDIT.
 */
import React from 'react';
import { Shield, Hammer, Lock, Database } from 'lucide-react';

const labsItems = [
  {
    title: "THE SENTINEL PROTOCOL",
    icon: Shield,
    desc: "Real-time forensic monitoring and operational security latches.",
    status: "ACTIVE"
  },
  {
    title: "THE ELDERS",
    icon: Hammer,
    desc: "Sovereign structural logic and high-fidelity design governance.",
    status: "ACTIVE"
  },
  {
    title: "RPR KONTROL",
    icon: Lock,
    desc: "Centralized command substrate for experiential activations.",
    status: "INTERNAL"
  },
  {
    title: "MYAUDIT",
    icon: Database,
    desc: "Harbor C platform for comprehensive data verification and audit trails.",
    status: "PROD",
    link: "https://myaudit-ui.onrender.com/"
  }
];

export const Labs: React.FC = () => {
  return (
    <section id="labs" className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
            THE LABS
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">Technical Infrastructure</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {labsItems.map((item) => (
            <article key={item.title} className="group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-all">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center transition-all group-hover:border-cyan-500/50">
                  <item.icon size={20} className="text-cyan-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">{item.title}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                <span className="text-[8px] font-mono text-cyan-600 tracking-widest">{item.status}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[8px] font-mono text-zinc-400 hover:text-white uppercase tracking-widest">
                    Launch Harbor C →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};