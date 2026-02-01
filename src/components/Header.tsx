import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * TS-Λ3 // HEADER SUBSTRATE [v1.8.3]
 * Bugfix: Restored Link components for SEO/Routing.
 * Mission: Hard-locked labels + 60% Mobile Overlay.
 * Authority: hello@butterdime.com
 */

const CANONICAL_NAV = [
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

        {/* 1. LOGO SUBSTRATE (v1.8.2 Aligned) */}
        <Link to="/" className="flex items-center gap-3 h-full group">
          <div className="flex items-center justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-sky-500/50 transition-colors">
            <img
              src="/rpr-logo-icon.svg"
              alt="RPR LOGO"
              className="w-6 h-6 sm:w-10 sm:h-10 transition-all duration-300"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-black text-white italic tracking-tighter uppercase leading-none group-hover:text-sky-500 transition-colors">
              RPR<span className="text-sky-500">COMMS</span>
            </span>
            <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest mt-1">
              Sovereign Identity // v1.8.3
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP NAV (v1.8.3: Restored Links) */}
        <nav className="hidden md:flex items-center gap-8">
          {CANONICAL_NAV.map((item) => (
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

      {/* 4. MOBILE OVERLAY (v1.8.3: 60% Transparency Locked) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />

          <nav className="relative z-50 flex flex-col items-center gap-10">
            {CANONICAL_NAV.map((item) => (
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
