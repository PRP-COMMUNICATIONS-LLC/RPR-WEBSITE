import React from 'react';
import { Hero } from './Hero';
import { Foundations } from './Foundations';
import { Methods } from './Methods';
import { Labs } from './Labs';
import { Overwatch } from './Overwatch';

/**
 * TS-Λ3 // HOME SUBSTRATE [v2.1.0]
 * Seating: Hero -> Foundations -> Methods -> Labs -> Overwatch.
 * Authority: hello@butterdime.com
 */
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 🚀 HERO SUBSTRATE (v6.2.0 LATCHED) */}
      <Hero />

      {/* 🏛️ ARCHITECTURAL SUBSTRATE (DNA Pillars + Bible) */}
      <Foundations />

      {/* 📈 OPERATIONAL SUBSTRATE (The Methods) */}
      <Methods />

      {/* 🧪 PROTOTYPE ENCLAVE (4-Tier Labs) */}
      <Labs />

      {/* 🛡️ STRATEGIC COMMAND */}
      <Overwatch />
    </div>
  );
};
