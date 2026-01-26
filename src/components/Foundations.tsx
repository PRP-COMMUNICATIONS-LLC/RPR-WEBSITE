import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MermaidViewer } from './MermaidViewer';
import { THE_MOTHERSHIP } from '../data/theMothership';

/**
 * TS-Λ3 // THE FOUNDATIONS // DNA PILLARS + THE MOTHERSHIP [v7.6.0]
 * STYLE: Inter Bold 700, -0.05em tracking, Black Substrate, Squircle Latch Icons
 */

const foundations = [
  // THE DNA PILLARS (01-03)
  {
    id: "01",
    title: "Source of Truth",
    content: "A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up. We verify the underlying substrate before constructing the narrative.",
    glyph: (
      <svg fill="none" viewBox="0 0 100 100" stroke="white" strokeWidth="6">
        <path d="M50 15L80 50L50 85L20 50L50 15Z" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="4" fill="white" />
        <path d="M50 70V85" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "02",
    title: "The Insight (UI)",
    content: "Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to bots. We restore clarity via high-fidelity interface logic.",
    glyph: (
      <svg fill="none" viewBox="0 0 100 100" stroke="white" strokeWidth="6">
        <path d="M50 48.5C64.6325 48.5 76.5 36.6325 76.5 22C76.5 7.3675 64.6325 -4.5 50 -4.5C35.3675 -4.5 23.5 7.3675 23.5 22C23.5 36.6325 35.3675 48.5 50 48.5Z" transform="translate(0 10)" />
        <path d="M37 55V68C37 69.1046 37.8954 70 39 70H61C62.1046 70 63 69.1046 63 68V55" strokeLinecap="round" strokeLinejoin="round" />
        <rect fill="white" height="8" rx="2" width="34" x="33" y="70" />
        <rect fill="white" height="6" rx="2" width="24" x="38" y="78" />
      </svg>
    )
  },
  {
    id: "03",
    title: "The Journey (CX)",
    content: "We try to get the moments that matter right. We use the right tools to get the job done, not the other way around. Our focus remains on the human experience in a bot-saturated theater.",
    glyph: (
      <svg fill="none" viewBox="0 0 100 100" stroke="white" strokeWidth="6">
        <path d="M15 65C30 65 35 35 50 35C65 35 70 65 85 65" strokeLinecap="round" />
        <circle cx="15" cy="65" r="5" fill="black" stroke="white" strokeWidth="4" />
        <circle cx="50" cy="35" r="5" fill="black" stroke="white" strokeWidth="4" />
        <circle cx="85" cy="65" r="5" fill="black" stroke="white" strokeWidth="4" />
      </svg>
    )
  }
];

export const Foundations: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="foundations" className="bg-[#050505] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-[-0.05em] font-sans">
            THE FOUNDATIONS
          </h2>
          <p className="text-cyan-400 font-mono tracking-[0.2em] text-sm uppercase">The DNA Pillars</p>
        </div>

        <div className="grid gap-6">
          {foundations.map((item) => (
            <div key={item.id} className="border-b border-zinc-800 pb-6 group">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center gap-6 text-left py-4"
              >
                {/* SQUIRCLE LATCH ICON */}
                <div className="squircle flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-black flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-all">
                  <div className="w-2/3 h-2/3">{item.glyph}</div>
                </div>
                
                <span className="flex-grow text-white text-xl md:text-3xl font-bold uppercase tracking-[-0.05em] font-sans">
                  {item.id} {item.title}
                </span>
                
                <ChevronDown className={`text-zinc-500 transition-transform ${openId === item.id ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openId === item.id 
                  ? 'max-h-[1000px] opacity-100 mt-4' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="text-zinc-400 text-lg md:text-xl max-w-3xl ml-16 md:ml-20 leading-relaxed tracking-tight">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* THE MOTHERSHIP Section */}
        <div className="mt-16 space-y-6 border-t border-zinc-800 pt-16">
          <div className="space-y-2">
            <h3 className="text-sm font-mono tracking-[0.25em] uppercase text-zinc-500">
              THE MOTHERSHIP
            </h3>
            <p className="text-sm text-zinc-400 tracking-[-0.01em] max-w-3xl">
              Command flow from The Overwatch through THE ELDERS to the Product Platform Layer, visualizing the sovereign structure.
            </p>
          </div>
          
          <div className="rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-6 overflow-x-auto">
            <MermaidViewer definition={THE_MOTHERSHIP} />
          </div>
        </div>
      </div>
    </section>
  );
};