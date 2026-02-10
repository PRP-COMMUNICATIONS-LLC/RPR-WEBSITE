import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActorBox, SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // L1 COMMAND PLANE [v17.5.0]
 */
const L1OverwatchCommand: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const { t } = useTranslation();

  const nodes: Record<string, NodeData> = {
    legal: {
      id: 'legal-root',
      name: 'RPR COMMUNICATIONS LLC',
      type: 'Legal Root • Parent Entity',
      description: 'The primary legal corporate entity. The Mothership OS and Sentinel Protocol are technically and legally subordinate to this entity.'
    },
    human: {
      id: 'human-overwatch',
      name: 'OVERWATCH (HUMAN)',
      type: 'Sovereign Commander • RAM Root',
      description: 'Human user and final decision-maker. Legally bound to RPR COMMUNICATIONS LLC.'
    },
    command: {
      id: 'perp-command',
      name: 'PERPLEXITY COMMAND',
      type: 'Architect / Orchestrator Console',
      description: 'The main control console for THE MOTHERSHIP. Translates high-level intent into missions.'
    }
  };

  return (
    <div className="h-full p-8 md:p-16 flex flex-col items-center overflow-y-auto">
      <header className="mb-12 border-l-2 border-cyan-500 pl-8 w-full max-w-lg">
        <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">
          {t('visualizer.l1.title', 'L1: COMMAND PLANE')}
        </h2>
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold">Foundation & Control</p>
      </header>

      <div className="flex flex-col items-center w-full max-w-lg">
        <SystemBox title={nodes.legal.name} description={nodes.legal.type} color="orange" glyph="business" onClick={() => onNodeClick(nodes.legal)} className="w-full" />
        <ConnectionLine label="Establishes Governance" vertical={true} dashed={true} />
        <ActorBox>
          <div onClick={() => onNodeClick(nodes.human)} className="cursor-pointer text-center py-4 px-10">
            <div className="text-[10px] font-black uppercase text-cyan-400 mb-2 tracking-widest">HUMAN USER</div>
            <div className="text-xl font-black text-white uppercase italic tracking-tighter">OVERWATCH</div>
          </div>
        </ActorBox>
        <ConnectionLine label="Delegates Intent" vertical={true} dashed={true} />
        <SystemBox title={nodes.command.name} description={nodes.command.type} color="purple" glyph="skull" onClick={() => onNodeClick(nodes.command)} className="w-full" />
      </div>
    </div>
  );
};

export default L1OverwatchCommand;
