import React from 'react';

/**
 * TS-Λ3 // ICON UTILITY [v1.0.4]
 * Path: src/components/Icon.tsx
 * Mission: Resolve TS2307 Module Resolution & Axis Latching
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
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`
      }}
    >
      {name}
    </span>
  );
};

export default Icon;