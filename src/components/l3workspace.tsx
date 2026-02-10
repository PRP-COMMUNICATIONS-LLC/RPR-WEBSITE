import React from 'react';
import { SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // L3 THE WORKSHOP [v13.6.1]
 * Path: src/components/l3workspace.tsx
 * Fix: Default export latch for Visualizer handshake.
 */

const L3Workspace: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const nodes: Record<string, NodeData> = {
    labs: {
      id: 'ws-labs',
      name: 'THE LABS',
      type: 'STRATEGY & CREATIVE PLANNING',
      description: 'The human strategy and creative team. They turn briefs and Labyrinth maps into clear stories, visual directions, and campaign ideas that the rest of the Forge can execute.',
    },
    forge: {
      id: 'ws-forge',
      name: 'THE FORGE',
      type: 'BUILD & LAUNCH WORKSHOP',
      description: 'The build team and tools that write documents, update code, and ship changes to THE MOTHERSHIP and its product instances.',
    },
    departments: {
      id: 'ws-departments',
      name: 'BUSINESS DEPARTMENTS',
      type: 'SUPPORT (LEGAL / FINANCE / HR)',
      description: 'Virtual support teams for Legal, Finance, and HR. They help keep the business compliant, organised, and ready to scale.',
    },
    daedalus: {
      id: 'ws-daedalus',
      name: 'DAEDALUS',
      type: 'PRODUCT ONBOARDING GUIDE',
      description: 'The guide for SME owners. It runs the Business Clone Interview, helps set up their Labyrinth, and turns what it learns into simple, practical plans.',
    },
    ollie: {
      id: 'ws-ollie',
      name: 'OLLIE',
      type: 'AGENCY ONBOARDING ASSISTANT',
      description: 'The guide for agencies and internal teams. It helps partners understand how Mothership services work and how to plug into the workflows and communication standards.',
    }
  };

  return (
    <div className="flex flex-col items-center p-12 md:p-16 h-full overflow-y-auto custom-scrollbar">
      <div className="w-full max-w-6xl space-y-12">
        <header className="mb-10 border-l-4 border-orange-500 pl-6">
          <h2 className="text-xl font-black text-white uppercase tracking-[0.2em]">L3: THE WORKSHOP</h2>
          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest italic">
            STRATEGY (THE LABS) & BUILD (THE FORGE)
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SystemBox title={nodes.labs.name} description={nodes.labs.type} color="orange" glyph="science" onClick={() => onNodeClick(nodes.labs)} />
          <SystemBox title={nodes.forge.name} description={nodes.forge.type} color="orange" glyph="build" onClick={() => onNodeClick(nodes.forge)} />
          <SystemBox title={nodes.departments.name} description={nodes.departments.type} color="orange" glyph="account_balance" onClick={() => onNodeClick(nodes.departments)} />
        </div>

        <ConnectionLine label="ONBOARDING & INTEGRATION BRIDGE" vertical={true} dashed={true} className="h-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SystemBox title={nodes.daedalus.name} description={nodes.daedalus.type} color="cyan" glyph="explore" onClick={() => onNodeClick(nodes.daedalus)} />
          <SystemBox title={nodes.ollie.name} description={nodes.ollie.type} color="purple" glyph="support_agent" onClick={() => onNodeClick(nodes.ollie)} className="border-dashed" />
        </div>
      </div>
    </div>
  );
};

export default L3Workspace;