import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

/**
 * TS-Λ3 // MERMAID VIEWER [v1.8.7]
 * Resolution: Enforced Dark Mode authority and curve basis.
 */
interface MermaidViewerProps {
  definition: string;
  className?: string;
  id?: string;
}

export const MermaidViewer: React.FC<MermaidViewerProps> = ({ definition, className = '', id = 'mermaid-id' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const render = async () => {
      if (!containerRef.current || !definition.trim()) return;
      try {
        setIsLoading(true);
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            background: '#0a0a0a',
            primaryColor: '#3b82f6',
            textColor: '#f1f5f9',
            fontFamily: 'Inter, sans-serif'
          },
          flowchart: { curve: 'basis', padding: 20 }
        });
        const { svg } = await mermaid.render(id, definition);
        if (containerRef.current) containerRef.current.innerHTML = svg;
      } catch (err) {
        console.error('Render Error:', err);
      } finally {
        setIsLoading(false);
      }
    };
    render();
  }, [definition, id]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {isLoading && <div className="h-80 flex items-center justify-center text-sky-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">Seating Authority...</div>}
      <div ref={containerRef} className={isLoading ? 'hidden' : 'block'} />
    </div>
  );
};
