import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

/**
 * TS-Λ3 // MERMAID VIEWER [v1.8.8 HOTFIX]
 * Optimized for Dark Substrate / Basis Curves.
 */
interface MermaidViewerProps {
  definition: string;
  className?: string;
  id?: string;
}

export const MermaidViewer: React.FC<MermaidViewerProps> = ({ 
  definition, 
  className = '',
  id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current || !definition.trim()) return;

      try {
        setIsLoading(true);
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            background: '#0a0a0a',
            primaryColor: '#22d3ee',
            textColor: '#f1f5f9',
            fontFamily: 'Inter, sans-serif',
            lineColor: '#334155'
          },
          flowchart: { curve: 'basis', padding: 20 }
        });

        const { svg } = await mermaid.render(id, definition);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [definition, id]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {isLoading && (
        <div className="h-64 flex items-center justify-center animate-pulse">
          <div className="w-6 h-6 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        </div>
      )}
      <div 
        ref={containerRef} 
        className={isLoading ? 'hidden' : 'block transition-all duration-700 w-full flex justify-center'}
      />
    </div>
  );
};