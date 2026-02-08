import React from 'react';

interface UserInsightIconProps {
  className?: string;
}

export const UserInsightIcon: React.FC<UserInsightIconProps> = ({ className = '' }) => {
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
        <filter id="glow-insight">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="grad-insight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
      </defs>

      {/* input_circle Material Symbol */}
      <g transform="translate(16, 16)">
        <path
          d="M16 28C12.7 28 9.9 26.825 7.6 24.475C5.3 22.125 4.15 19.3 4.15 16C4.15 12.7 5.3 9.875 7.6 7.525C9.9 5.175 12.7 4 16 4C19.3 4 22.125 5.175 24.475 7.525C26.825 9.875 28 12.7 28 16C28 19.3 26.825 22.125 24.475 24.475C22.125 26.825 19.3 28 16 28ZM16 24C18.2 24 20.0833 23.2583 21.65 21.775C23.2167 20.2917 23.9667 18.4333 24 16.4V15.6C23.9667 13.5667 23.2167 11.7083 21.65 10.225C20.0833 8.74167 18.2 8 16 8C13.8 8 11.9167 8.74167 10.35 10.225C8.78333 11.7083 8.03333 13.5667 8.1 15.6V16.4C8.03333 18.4333 8.78333 20.2917 10.35 21.775C11.9167 23.2583 13.8 24 16 24ZM16 20C15.45 20 14.9833 19.8083 14.6 19.425C14.2167 19.0417 14.0333 18.5667 14.05 18C14.0167 17.45 14.2 16.9833 14.6 16.6C14.9833 16.2167 15.45 16.0333 16 16.05C16.55 16.0167 17.0167 16.2 17.4 16.6C17.7833 16.9833 17.9667 17.45 17.95 18C17.9833 18.5667 17.7833 19.0417 17.4 19.425C17.0167 19.8083 16.55 20 16 20Z"
          fill="url(#grad-insight)"
          filter="url(#glow-insight)"
        />
      </g>
    </svg>
  );
};
