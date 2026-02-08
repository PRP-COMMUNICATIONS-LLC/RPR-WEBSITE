import React from 'react';
import { SourceOfTruthIcon } from './icons/dna-pillars/SourceOfTruthIcon';
import { UserInsightIcon } from './icons/dna-pillars/UserInsightIcon';
import { ConsumerJourneyIcon } from './icons/dna-pillars/ConsumerJourneyIcon';

export const Foundations: React.FC = () => {
  const pillars = [
    {
      id: 'source-of-truth',
      icon: SourceOfTruthIcon,
      title: 'Source of Truth',
      description:
        'A single source of truth is the foundation of every strategic move. We consolidate scattered data—your brand guidelines, customer insights, campaign performance, competitive intelligence—into a unified operational substrate. This isn\'t just a repository; it\'s a living, queryable knowledge base that ensures every decision is grounded in verified reality, not assumption.',
    },
    {
      id: 'user-insight',
      icon: UserInsightIcon,
      title: 'User Insight',
      description:
        'Understanding your audience isn\'t optional—it\'s existential. We go beyond surface-level demographics to map behavioral patterns, motivations, pain points, and aspirations. Through ethnographic research, sentiment analysis, and real-world observation, we build psychographic profiles that reveal not just who your customers are, but why they make the choices they do. This depth transforms campaigns from messages into meaningful conversations.',
    },
    {
      id: 'consumer-journey',
      icon: ConsumerJourneyIcon,
      title: 'Consumer Journey',
      description:
        'Every touchpoint matters. We chart the complete arc of the consumer experience—from first awareness through consideration, decision, and post-purchase loyalty. By identifying friction points, emotional triggers, and moments of truth across digital, physical, and hybrid spaces, we engineer journeys that feel intuitive, rewarding, and human. The result: campaigns that don\'t interrupt experiences, but become part of them.',
    },
  ];

  return (
    <section
      id="foundations"
      className="relative bg-black py-24 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The DNA of Strategy
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Every campaign we design begins with three foundational pillars. These aren't
            buzzwords—they're the operational substrate that ensures every dollar, every message,
            and every interaction is calibrated for measurable impact.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <IconComponent className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-tight">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed text-center font-light">
                  {pillar.description}
                </p>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Footer Note (Optional) */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest font-mono">
            Strategic Foundations · Verified Reality · Measurable Impact
          </p>
        </div>
      </div>
    </section>
  );
};
