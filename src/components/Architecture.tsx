import React from "react";
import { SystemCard } from "./SystemCard";
import { SectionHeading } from "./SectionHeading";

/**
 * TS-Λ3 // ARCHITECTURE SUBSTRATE
 * CLASSIFICATION: SOVEREIGN SYSTEM GRID
 * AUTHORITY: hello@butterdime.com
 */

const SYSTEMS = [
  {
    title: "Foundations",
    kicker: "L1 // DATA SUBSTRATE",
    description: "The core forensic layer. We reject the 'pretty story' sitting on top of bad data. Every message is seated in reality.",
    iconName: "architecture",
    iconFill: 1 as const,
  },
  {
    title: "The Mothership",
    kicker: "L2 // CORE ENTITY",
    description: "Crafting a virtual clone of your physical business entity. High-fidelity substrates for Agencies and SMEs.",
    iconName: "assistant_device",
    iconFill: 0 as const,
  },
  {
    title: "Overwatch",
    kicker: "L0 // GOVERNANCE",
    description: "Sovereign governance and requirement mapping. The Sentinel Protocol ensures bit-perfect alignment with intent.",
    iconName: "shield_person",
    iconFill: 1 as const,
  },
  {
    title: "The Methods",
    kicker: "L3 // OPERATIONAL LOOP",
    description: "Developing tailor-made solutions. ASK, PAY, MAKE, PLAY, REPEAT. Continuous refinement via forensic feedback.",
    iconName: "schema",
    iconFill: 1 as const,
  },
];

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="bg-sovereign-bg-primary py-24 px-6 md:px-12 border-t border-sovereign-border-subtle">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading
          title="Sovereign Stack"
          kicker="System Architecture"
          className="mb-16 border-l-2 border-sovereign-actor-cyan pl-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEMS.map((system, i) => (
            <SystemCard
              key={i}
              title={system.title}
              kicker={system.kicker}
              description={system.description}
              iconName={system.iconName}
              iconFill={system.iconFill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
