import React from 'react';
import { SectionHeading } from './SectionHeading';

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
        <SectionHeading
          title="THE MOTHERSHIP"
          kicker="Platform Overview"
          className="mb-12 border-l-2 border-sovereign-actor-cyan pl-8"
        />

        {/* Introduction Paragraph */}
        <div className="max-w-4xl mb-16">
          <p className="text-sovereign-fg-primary text-lg md:text-xl leading-relaxed font-light">
            THE MOTHERSHIP is the business operating platform that turns a real company into a living digital twin.
            It clones the core of an agency or SME—its entities, people, clients, contracts, workflows, and risk profile—into a governed environment where human teams and AI systems share the same ground truth and work from one version of reality.
            It is designed to give smaller businesses the kind of precision, visibility, and control that only top‑tier firms usually enjoy, without asking them to become data engineers or AI experts.
          </p>
        </div>

        {/* Jensen Huang Quote Block */}
        <div className="mb-24 pl-8 border-l border-white/10 relative">
          <blockquote className="text-xl md:text-2xl text-white italic font-serif leading-snug mb-4 max-w-3xl">
            “We need to develop AI to a level that is useful to people… Until now, chatbots, where you give it a prompt and it figures out what to tell you, is interesting and curious but not useful.”
          </blockquote>
          <cite className="text-sm font-mono text-cyan-400 uppercase tracking-widest not-italic">
            — Jensen Huang, CEO, NVIDIA, Cisco AI Summit 2026
          </cite>
        </div>

      </div>
    </section>
  );
};
