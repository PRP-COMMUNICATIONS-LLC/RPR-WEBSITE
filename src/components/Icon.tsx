import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  fill?: number | boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 24, fill = 0 }) => {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}`
      }}
    >
      {name}
    </span>
  );
};