import React from 'react';
import { Chessboard } from './Chessboard';
import { TacticalPath } from './TacticalPath';

/**
 * TS-Λ3 // THE OVERWATCH [v2.1.0]
 * Sovereign governance split card with identity binding and social linkage
 * Anchor: id="overwatch" for navigation compliance
 */
export const Overwatch: React.FC = () => {
  return (
    <section id="overwatch" className="bg-[#050505] border-b border-white/5">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Column: Biography & Identity (60%) */}
        <div className="flex flex-col w-full lg:w-[60%] p-12 lg:p-24 border-r border-white/5 justify-center">
          <div className="max-w-2xl">
            
            {/* Main Heading */}
            <h1 className="text-white tracking-tighter text-[56px] lg:text-[72px] font-bold leading-none mb-6">
              THE <br /><span className="text-primary">OVERWATCH</span>
            </h1>

            {/* Identity & Social Links */}
            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-sm text-white font-mono font-bold">Puvan Sivanasan</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/puvan-sivanasan-29707726/?originalSubdomain=my" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-white/20">•</span>
                <a 
                  href="https://substack.com/@butterdime/posts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Substack
                </a>
              </div>
            </div>

            {/* Biography Body Copy — Enlarged */}
            <div className="space-y-6 text-gradient">
              <p className="text-lg lg:text-xl font-normal leading-relaxed">
                Having spent 20 years in corporate communications and brand activation—from local event firms to international creative agencies—he has worked on everything from on-ground activations to award-winning campaigns for global corporations. What began as a fascination with human behaviour and systems, and a belief that technology should be used to improve people's lives rather than just generate TikTok likes, has evolved into a multidisciplinary approach to customer experience.
              </p>

              <p className="text-lg lg:text-xl font-normal leading-relaxed text-white/70">
                While experimenting with AI for his own personal writings and ideas, a pattern he noticed in a client problem raised a different question: how can a sentient being leverage an artificial construct to apply its knowledge in knowledge discovery, systems thinking, and polymathic research—within the same human framework of systems and silos—to create something better?
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Modules Stack (40%) */}
        <div className="flex flex-col w-full lg:w-[40%] bg-white/[0.02] justify-center">
          
          {/* Top Module: Chessboard — Expanded */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 border-b border-white/5 items-center justify-center">
            <Chessboard className="w-full max-w-sm lg:max-w-md" />
          </div>

          {/* Bottom Module: Tactical Path — Expanded */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 items-center justify-center">
            <TacticalPath className="w-full max-w-sm lg:max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};