import React from 'react';

interface SourceOfTruthIconProps {
  className?: string;
}

export const SourceOfTruthIcon: React.FC<SourceOfTruthIconProps> = ({ className = '' }) => {
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
        <filter id="glow-source">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="grad-source" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
      </defs>

      {/* compass_calibration Material Symbol */}
      <g transform="translate(16, 16)">
        <path
          d="M16 28C14.9 28 13.9583 27.6083 13.175 26.825C12.3917 26.0417 12 25.1 12 24C12 22.9 12.3917 21.9583 13.175 21.175C13.9583 20.3917 14.9 20 16 20C17.1 20 18.0417 20.3917 18.825 21.175C19.6083 21.9583 20 22.9 20 24C20 25.1 19.6083 26.0417 18.825 26.825C18.0417 27.6083 17.1 28 16 28ZM4 26V22H8V26H4ZM24 26V22H28V26H24ZM6 18V14H10V18H6ZM22 18V14H26V18H22ZM12 12V4H16V12H12Z"
          fill="url(#grad-source)"
          filter="url(#glow-source)"
        />
      </g>
    </svg>
  );
};
