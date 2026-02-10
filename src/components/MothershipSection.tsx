import React from 'react';
import { SectionHeading } from './sectionheading';

/**
 * TS-Λ3 // MOTHERSHIP SECTION [v2.2.0]
 * MISSION: CLINICAL NARRATIVE INGESTION
 * AUTHORITY: hello@butterdime.com
 */

export const MothershipSection: React.FC = () => {
  return (
    <section id="mothership" className="py-24 bg-sovereign-bg-primary overflow-hidden border-t border-sovereign-border-subtle relative">
      <div id="labs" className="absolute top-0 left-0 invisible" />
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Main Section Header */}
        <div className="h-32" aria-hidden />
        <SectionHeading
          title="THE MOTHERSHIP"
          kicker="Enterprise Intelligence Infrastructure"
          className="mb-12 border-l-2 border-sovereign-actor-cyan pl-6"
        />

        {/* Introduction Paragraph */}
        <div className="max-w-4xl mb-16">
          <p className="text-sovereign-fg-primary text-lg md:text-xl leading-relaxed font-light">
            THE MOTHERSHIP is the business operating platform that turns a real company into a living digital twin and aligns it to mission-driven goals.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-black border border-white/20 text-white/60 text-[10px] px-4 py-2 rounded-full font-mono">THE SENTINEL PROTOCOL</span>
            <span className="bg-black border border-white/20 text-white/60 text-[10px] px-4 py-2 rounded-full font-mono">RAM GOVERNANCE</span>
            <span className="bg-black border border-white/20 text-white/60 text-[10px] px-4 py-2 rounded-full font-mono">RBAA</span>
            <span className="bg-black border border-white/20 text-white/60 text-[10px] px-4 py-2 rounded-full font-mono">C-STRIDE TELEMETRY</span>
          </div>
        </div>

        {/* Jensen Huang Quote Block */}
        <div className="mb-24 pl-8 border-l border-white/10 relative">
          <blockquote className="text-3xl md:text-5xl italic text-white font-serif leading-snug mb-4 max-w-3xl">
            “We need to develop AI to a level that is useful to people… Until now, chatbots, where you give it a prompt and it figures out what to tell you, is interesting and curious but not useful.”
          </blockquote>
          <cite className="text-sm font-mono text-cyan-400 uppercase tracking-widest not-italic">
            — Jensen Huang, CEO, NVIDIA, Cisco AI Summit 2026
          </cite>
        </div>
        <div className="h-40" aria-hidden />

      </div>
    </section>
  );
};
