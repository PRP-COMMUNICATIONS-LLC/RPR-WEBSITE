import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { RprLogoLockup } from '../brand/RprLogoLockup';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * TS-Λ3 // GLOBAL HEADER [v17.0.5]
 * Path: src/components/Header.tsx
 */
const Header = () => {
  const { user, signInWithGoogleRedirect, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id: 'foundations', label: 'THE FOUNDATIONS' },
    { id: 'methods', label: 'THE METHODS' },
    { id: 'mothership', label: 'THE MOTHERSHIP' },
    { id: 'overwatch', label: 'OVERWATCH' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        <Link to="/" className="no-underline group shrink-0">
          <RprLogoLockup variant="COMMUNICATIONS" size={32} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black text-slate-500 tracking-widest uppercase font-mono">
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`/#${item.id}`} className="hover:text-white transition-all">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <LanguageSwitcher />

          <button 
            onClick={user ? () => signOut() : signInWithGoogleRedirect}
            className="w-10 h-10 transition-all hover:scale-105 flex items-center justify-center relative"
          >
            {user ? (
              <div className="w-8 h-8 rounded-xl overflow-hidden border-2 border-cyan-400 bg-cyan-900 flex items-center justify-center">
                {user.photoURL && <img src={user.photoURL} alt="U" className="w-full h-full object-cover" />}
                <span className="text-cyan-400 font-black text-[10px] absolute">P</span>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-md overflow-hidden border border-white/10 flex items-center justify-center bg-black">
                <span className="material-symbols-outlined text-white text-xl">g_mobiledata</span>
              </div>
            )}
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-400">
            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
