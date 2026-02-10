import React from 'react';

/**
 * TS-Λ3 // ICON UTILITY [v1.0.5]
 * Path: src/components/icon.tsx
 * Mission: Resolve Casing Collisions & Axis Latching
 * Authority: SG-CANONICAL-2026
 */

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  fill?: number | boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = 24,
  fill = 0
}) => {
  return (
    <span
      className={`material-symbols-outlined select-none flex items-center justify-center ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        // MANDATORY: Full axis set to prevent render drift on high-DPI displays
        // Updated 'wght' from 400 to 450 for authoritative clarity
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 450, 'GRAD' 0, 'opsz' 24`
      }}
    >
      {name}
    </span>
  );
};

export default Icon;