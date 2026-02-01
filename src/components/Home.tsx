import React from 'react';
import { HomeHero } from './HomeHero';
import { Foundations } from './Foundations';
import { Methods } from './Methods';
import { Labs } from './Labs';
import { ProductInventory } from './ProductInventory';
import { Overwatch } from './Overwatch';

/**
 * TS-Λ3 // HOME SUBSTRATE [v1.8.7]
 * Seating: HomeHero -> Foundations -> Methods -> Labs -> Product Inventory -> Overwatch.
 * Authority: hello@butterdime.com
 */
export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 🚀 HERO SUBSTRATE (v1.8.7 LATCHED) */}
      <HomeHero />

      {/* 🏛️ ARCHITECTURAL SUBSTRATE (DNA Pillars + Bible) */}
      <Foundations />

      {/* 📈 OPERATIONAL SUBSTRATE (The Methods) */}
      <Methods />

      {/* 🧪 PROTOTYPE ENCLAVE (4-Tier Labs) */}
      <Labs />

      {/* 📦 PRODUCT INVENTORY (Level 4 Graduation) */}
      <ProductInventory />

      {/* 🛡️ STRATEGIC COMMAND */}
      <Overwatch />
    </div>
  );
};
