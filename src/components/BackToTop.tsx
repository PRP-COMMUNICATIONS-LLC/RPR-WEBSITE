import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * TS-Λ3 // BACK TO TOP UTILITY [v1.8.8]
 * Mission: Provide vertical navigation with Bauhaus aesthetic.
 */
export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`
        fixed bottom-8 right-8 z-[100]
        p-3 rounded-full bg-cyan-500 text-black
        shadow-[0_0_20px_rgba(34,211,238,0.3)]
        hover:bg-cyan-400 hover:scale-110
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Back to Top"
    >
      <ArrowUp size={20} strokeWidth={3} />
    </button>
  );
};