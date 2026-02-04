import React from 'react';
import { Hero } from './Hero';
import { Foundations } from './Foundations';
import { Methods } from './Methods';
import { Process } from './Process';
import { Labs } from './Labs';
import { Overwatch } from './Overwatch';

/**
 * TS-Λ3 // HOME SUBSTRATE [v1.8.8]
 * Seating: Hero -> Foundations -> Methods (5-step) -> Process (4-step) -> Labs -> Overwatch.
 * Authority: hello@butterdime.com
 */
export const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <section id="foundations">
        <Foundations />
      </section>

      <section id="methods">
        <Methods />
      </section>

      <section id="process">
        <Process />
      </section>

      {/* Labs and Overwatch are STRUCTURE FROZEN, CONTENT TBD (v1.8.9) */}
      <section id="labs">
        <Labs />
      </section>

      <section id="overwatch">
        <Overwatch />
      </section>
    </>
  );
};
