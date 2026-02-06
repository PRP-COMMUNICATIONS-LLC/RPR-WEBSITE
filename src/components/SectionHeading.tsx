import React from "react";

/**
 * TS-Λ3 // SHARED HEADING SUBSTRATE
 * CLASSIFICATION: SOVEREIGN TYPOGRAPHY
 * AUTHORITY: hello@butterdime.com
 */

type HeadingProps = {
  kicker?: string;
  title: string;
  className?: string;
};

export const SectionHeading: React.FC<HeadingProps> = ({ kicker, title, className = "" }) => (
  <header className={`space-y-3 ${className}`}>
    {kicker && (
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-sovereign-fg-muted">
        {kicker}
      </p>
    )}
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-sovereign-fg-primary uppercase">
      {title}
    </h2>
  </header>
);
