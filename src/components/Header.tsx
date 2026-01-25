import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import RprMasterLogo from './brand/RprMasterLogo';

/**
 * TS-Λ3 // HARBOR A HEADER [v1.2.0]
 * NAVIGATION: Flattened per Registry v1.2.2
 */
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center px-6 md:px-12 h-[108px]">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
        
        <div className="flex items-center gap-4 py-2">
          {/* Branding Lock: 0.15em tracking enforced inside RprMasterLogo */}
          <RprMasterLogo height={32} />
        </div>

        {/* Primary Nav: METHODS | LABS | OVERWATCH */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">
          <a href="#foundations" className="hover:text-white transition-colors">METHODS</a>
          {/* Corrected: Internal route for Labs per Task 1 Audit */}
          <a href="/labs" className="hover:text-white transition-colors">LABS</a>
          <a href="#overwatch" className="hover:text-white transition-colors">OVERWATCH</a>
          <a href="#ask-ollie" className="text-cyan-500 border border-cyan-500/30 px-4 py-2 rounded hover:bg-cyan-500 hover:text-black transition-all">ASK OLLIE</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://kontrol.rprcomms.com"
            className="flex items-center gap-3 bg-zinc-900 border border-white/10 hover:border-cyan-500/50 px-5 py-2.5 rounded transition-all group"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#00E0FF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">KONTROL</span>
          </a>
          
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[108px] left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4">
          <a href="#foundations" className="text-zinc-400 font-black uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Methods</a>
          <a href="/labs" className="text-zinc-400 font-black uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Labs</a>
          <a href="#overwatch" className="text-zinc-400 font-black uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Overwatch</a>
          <a href="#ask-ollie" className="text-cyan-500 font-black uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Ask Ollie</a>
        </div>
      )}
    </header>
  );
};
