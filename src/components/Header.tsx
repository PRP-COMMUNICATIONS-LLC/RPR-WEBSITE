import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v2.1.2-STRIKE]
 * CLASSIFICATION: CLINICAL HARDENING
 * AUTHORITY: hello@butterdime.com
 */

// NOTE: Auth logic stubbed for Clinical Purge Phase
// Previous import from '../contexts/AuthContext' quarantined.
const useAuth = () => ({
  user: null, // Set to { displayName: "Jules" } to verify Post-Auth state
});

const UserAuthIcon = () => (
  <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>
    g_mobiledata
  </span>
);

const JSAvatar = () => (
  <div className="w-8 h-8 rounded-md bg-black border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#22D3EE99] transition-all">
    <span className="text-[10px] font-black text-cyan-400">JS</span>
  </div>
);

const NAV_ITEMS = [
  { id: 'foundations', label: 'FOUNDATIONS' },
  { id: 'methods', label: 'METHODS' },
  { id: 'overwatch', label: 'OVERWATCH' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* LOGO INJECTION [v2.6.2] */}
        <a href="/" className="flex items-center no-underline group shrink-0">
          <LogoIcon className="h-10 w-auto text-white" />
        </a>

        {/* DESKTOP NAV [v2.1.2] */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] font-bold text-white/60 hover:text-white transition-all uppercase tracking-tighter italic font-mono"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className={`hidden lg:block transition-all hover:scale-105 ${!user ? 'w-10 h-10 rounded-md border border-white/10 flex items-center justify-center bg-white/5' : ''}`}
          >
            {user ? <JSAvatar /> : <UserAuthIcon />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white/60 hover:text-white transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY [v2.1.2-HARDENED] */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col p-8 animate-in fade-in duration-300">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsOpen(false)} className="p-2 text-white/60 hover:text-white">
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-10 mb-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white uppercase tracking-tighter italic font-mono hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 mt-auto">
            <span className="text-xs font-black text-slate-400 tracking-widest uppercase italic">
              {user ? "Identity Latched" : "Identity Latch"}
            </span>
            <div className="flex items-center gap-3">
               {user ? <JSAvatar /> : <UserAuthIcon />}
            </div>
          </button>
        </div>
      )}
    </header>
  );
};
