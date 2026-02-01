import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v1.8.7]
 * Bugfix: Logo Rollback & Semantic Anchor Strike.
 * Mission: Restore canonical RPRCOMMS wordmark + 60% Mobile Overlay.
 * Authority: hello@butterdime.com
 */

const NAV_ITEMS = [
  { id: 'foundations', label: 'THE FOUNDATIONS' },
  { id: 'methods', label: 'THE METHODS' },
  { id: 'overwatch', label: 'THE OVERWATCH' },
  { id: 'labs', label: 'LABS' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* 1. LOGO SUBSTRATE (v1.8.7: Rollback to Canonical) */}
        <a href="/" className="flex items-center gap-3 h-full group">
          <div className="flex items-center justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-sky-500/50 transition-colors">
            <img
              src="/rpr-logo-icon.svg"
              alt="RPR LOGO"
              className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
              onError={(e) => (e.currentTarget.src = "https://raw.githubusercontent.com/lucide-react/lucide/main/icons/shield.svg")}
            />
          </div>
          <div className="flex items-center">
            <span className="text-xl font-black text-white italic tracking-tighter uppercase leading-none group-hover:text-sky-500 transition-colors">
              RPR<span className="text-sky-500">COMMS</span>
            </span>
          </div>
        </a>

        {/* 2. DESKTOP NAV (Semantic anchors + Locked Labels) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[9px] font-black text-slate-400 hover:text-sky-400 tracking-[0.2em] transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Globe className="w-4 h-4 text-sky-500" />
        </nav>

        {/* 3. MOBILE TRIGGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. MOBILE OVERLAY (60% Transparency Locked) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-50 flex flex-col items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black text-white italic tracking-tighter hover:text-sky-500 transition-all uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
