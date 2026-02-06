import React from "react";
import { Icon } from "./Icon";

/**
 * TS-Λ3 // SYSTEM CARD SUBSTRATE
 * CLASSIFICATION: SOVEREIGN GRID ELEMENT
 * AUTHORITY: hello@butterdime.com
 */

interface SystemCardProps {
  title: string;
  kicker: string;
  description: string;
  iconName: string;
  iconFill?: 0 | 1;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  title,
  kicker,
  description,
  iconName,
  iconFill = 0,
}) => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-sovereign-card-bg border border-sovereign-border-subtle rounded-[2.5rem] group hover:border-sovereign-border-strong transition-all duration-700 shadow-2xl">
      {/* GLOWING ICON BADGE */}
      <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-[0_0_24px_rgba(34,211,238,0.25)] border border-white/5 transition-all group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
        <Icon
          name={iconName}
          fill={iconFill}
          className="text-3xl text-white group-hover:text-sovereign-actor-cyan transition-colors"
          size="32px"
        />
      </div>

      <div className="space-y-4">
        <header className="space-y-1">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-sovereign-fg-muted group-hover:text-sovereign-actor-cyan transition-colors">
            {kicker}
          </p>
          <h4 className="text-xl font-black text-sovereign-fg-primary uppercase tracking-tight">
            {title}
          </h4>
        </header>

        <p className="text-xs text-sovereign-fg-muted leading-relaxed font-mono uppercase tracking-tighter">
          {description}
        </p>
      </div>
    </div>
  );
};
