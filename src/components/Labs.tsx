import React from 'react';

/**
 * TS-Λ3 // THE LABS // TECHNICAL SHOWCASE [v8.5.0]
 * RECTIFIED: Switched to Material Symbols Variable Font.
 * INTEGRATION: OLLIE card now links to /#chat (AskOllie interface)
 * INTEGRATION: KONTROL card now links to https://kontrol.rprcomms.com (Governance Latch)
 */

const labsItems = [
  { 
    title: "THE SENTINEL PROTOCOL", 
    materialIcon: "all_inclusive", 
    desc: "Real-time forensic monitoring", 
    status: "ACTIVE" 
  },
  { 
    title: "OLLIE", 
    materialIcon: "smart_toy", 
    desc: "Sentinel AI Interface", 
    status: "ACTIVE" 
  },
  { 
    title: "THE LABS", 
    materialIcon: "handyman", 
    desc: "Technical Infrastructure", 
    status: "ACTIVE" 
  },
  { 
    title: "KONTROL", 
    materialIcon: "auto_awesome", 
    desc: "Command Substrate", 
    status: "INTERNAL" 
  }
];

export const Labs: React.FC = () => {
  return (
    <section id="labs" className="bg-black py-32 px-6 md:px-12 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
              THE LABS
            </h2>
            <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">
              TECHNICAL INFRASTRUCTURE // THE OVERWATCH PROTOCOL
            </p>
          </div>

          {/* Global Labs Action Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0A0A0A] border border-zinc-800 rounded-lg">
            <span className="material-symbols-outlined text-white text-xl animate-pulse">
              handyman
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">System Maintenance: Active</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {labsItems.map((item) => {
            const isOllie = item.title === "OLLIE";
            const isKontrol = item.title === "KONTROL";
            
            const CardContent = (
              <article className={`group relative flex flex-col justify-between p-8 bg-[#0A0A0A] border border-zinc-800 rounded-xl hover:border-white/20 transition-all ${(isOllie || isKontrol) ? 'cursor-pointer' : ''}`}>
                <div className="space-y-6">
                  {/* METHODS-STYLE ICON CONTAINER */}
                  <div className="w-12 h-12 bg-black border border-zinc-800 rounded-xl flex items-center justify-center transition-all group-hover:border-white/20">
                    <span className="material-symbols-outlined text-white text-2xl">
                      {item.materialIcon}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold tracking-widest font-mono text-xs uppercase">{item.title}</h4>
                    <p className="text-zinc-500 text-[10px] uppercase font-mono leading-relaxed tracking-tight">{item.desc}</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-zinc-900 pt-4">
                  <span className="text-[8px] font-mono text-cyan-600 tracking-widest">{item.status}</span>
                  {(isOllie || isKontrol) && (
                    <span className="material-symbols-outlined text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  )}
                </div>
              </article>
            );

            if (isOllie) {
              return (
                <a key={item.title} href="/#chat" className="block h-full">
                  {CardContent}
                </a>
              );
            }
            
            if (isKontrol) {
              return (
                <a key={item.title} href="https://kontrol.rprcomms.com" target="_blank" rel="noopener noreferrer" className="block h-full">
                  {CardContent}
                </a>
              );
            }
            
            return (
              <div key={item.title} className="h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
