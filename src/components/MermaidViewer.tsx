import React from 'react';

interface MermaidProps {
  definition: string;
}

export const MermaidViewer: React.FC<MermaidProps> = ({ definition }) => {
  return <div data-definition={definition}>Mermaid Viewer Stub</div>;
};
