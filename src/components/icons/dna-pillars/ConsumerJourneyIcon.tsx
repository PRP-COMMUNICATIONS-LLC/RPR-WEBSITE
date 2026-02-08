import React from 'react';

interface ConsumerJourneyIconProps {
  className?: string;
}

export const ConsumerJourneyIcon: React.FC<ConsumerJourneyIconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Black rounded background */}
      <rect width="64" height="64" rx="14.4" fill="#000000" />

      {/* Glow filter definition */}
      <defs>
        <filter id="glow-journey">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="grad-journey" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
      </defs>

      {/* conversion_path Material Symbol */}
      <g transform="translate(16, 16)">
        <path
          d="M22 28V24H26V28H22ZM18 24V20H22V24H18ZM14 20V16H18V20H14ZM10 16V12H14V16H10ZM6 12V8H10V12H6ZM2 8V4H6V8H2ZM22 20V16H26V20H22ZM22 12V8H26V12H22ZM22 4V0H26V4H22Z"
          fill="url(#grad-journey)"
          filter="url(#glow-journey)"
        />
      </g>
    </svg>
  );
};
