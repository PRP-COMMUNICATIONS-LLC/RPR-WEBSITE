import React from 'react';
import '../icons/symboltile.css';

/**
 * TS-Λ3 // AUTHORITATIVE SYMBOL TILE [v3.2.0]
 * Path: src/components/icons/symboltile.tsx
 * Mission: Enforce tactical containerization for Material Symbols.
 * Authority: THE OVERWATCH
 */

interface SymbolTileProps {
  glyph: string;
  size?: number;
  className?: string;
  glow?: boolean;
  variant?: 'circle' | 'square' | 'none';
}

export const SymbolTile: React.FC<SymbolTileProps> = ({ 
  glyph, 
  size = 24, 
  className = '', 
  glow = true,
  variant = 'circle'
}) => {
  // 📐 Container scaling: The container is larger than the glyph to provide "seating"
  const containerSize = size * 1.5;

  const variantClasses = {
    circle: 'rounded-full',
    square: 'rounded-2xl',
    none: 'bg-transparent border-transparent'
  };

  return (
    <div 
      className={`symbol-container ${variantClasses[variant]} ${className}`} 
      style={{ 
        width: containerSize, 
        height: containerSize,
        minWidth: containerSize,
        minHeight: containerSize
      }}
    >
      {glow && <div className="symbol-glow" />}
      
      <span 
        className="material-symbols-outlined symbol-glyph" 
        style={{ fontSize: size }}
      >
        {glyph}
      </span>
      
      {/* 🧬 Axis Latch Overlay: Visual confirmation of geometric alignment */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-inherit" />
    </div>
  );
};

export default SymbolTile;