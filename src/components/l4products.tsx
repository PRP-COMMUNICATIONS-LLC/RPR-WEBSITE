import React from 'react';
import { useTranslation } from 'react-i18next';
import { SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // L4 SPECIALIST INSTANCES [v12.0.5]
 * Path: src/components/L4Sovereignty.tsx
 * Fix: Resolved duplicate identifiers and multiple default exports
 */

export const L4Sovereignty: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const { t: _t } = useTranslation();

  const nodes: NodeData[] = [
    {
      id: 'instance-icarus',
      name: 'ICARUS',
      type: 'Personal Co-Pilot',
      description: 'Owner’s personal AI tuned to their specific Labyrinth. Translates complex systems into plain language.',
      auditTrail: []
    },
    {
      id: 'instance-specialists',
      name: 'SPECIALIST AGENTS',
      type: 'Sovereign Business Clones',
      description: 'Industry-specific instances (MYAUDIT, RPR VERIFY) deployed to the Singapore Sovereign Edge.',
      auditTrail: []
    }
  ];

  return (
    <div className="h-full p-8 md:p-12 overflow-y-auto custom-scrollbar">
      <header className="mb-10 border-l-4 border-cyan-500 pl-6">
        <h2 className="text-xl font-black text-white uppercase tracking-[0.2em]">L4: PRODUCTS & SERVICES</h2>
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest italic">
          Active Specialist Instances
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nodes.map((node) => (
          <SystemBox 
            key={node.id}
            title={node.name} 
            description={node.type} 
            color="cyan"
            glyph={node.id.includes('icarus') ? 'rocket_launch' : 'dynamic_form'}
            onClick={() => onNodeClick(node)} 
          />
        ))}
      </div>

      <ConnectionLine label="LATCHED TO EDGE" vertical={true} dashed={true} />
    </div>
  );
};

export default L4Sovereignty;