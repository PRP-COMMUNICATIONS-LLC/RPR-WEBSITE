import React from 'react';
import { useTranslation } from 'react-i18next';
import { SystemBox, ConnectionLine } from './c4-elements';
import type { NodeData } from '../types';

/**
 * TS-Λ3 // L2 GOVERNANCE MATRIX [v6.5.0]
 */
const L2TheElders: React.FC<{ onNodeClick: (node: NodeData) => void }> = ({ onNodeClick }) => {
  const { t } = useTranslation();

  const nodes = [
    {
      id: 'elder-sentinel',
      name: t('visualizer.l2.nodes.sentinel.name', 'SENTINEL'),
      type: t('visualizer.l2.nodes.sentinel.type', 'Constraint Guard'),
      description: t('visualizer.l2.nodes.sentinel.desc', 'The safety AI. It sets and enforces the rules.')
    },
    {
      id: 'elder-architect',
      name: t('visualizer.l2.nodes.architect.name', 'THE ARCHITECT'),
      type: t('visualizer.l2.nodes.architect.type', 'Perplexity Engine'),
      description: t('visualizer.l2.nodes.architect.desc', 'The strategy AI. It designs how the system works.')
    },
    {
      id: 'elder-engineer',
      name: t('visualizer.l2.nodes.engineer.name', 'THE ENGINEER'),
      type: t('visualizer.l2.nodes.engineer.type', 'Gemini Engine'),
      description: t('visualizer.l2.nodes.engineer.desc', 'The build AI. It turns plans into working code.')
    }
  ];

  return (
    <div className="flex flex-col items-center p-8 md:p-12 h-full overflow-y-auto">
      <header className="mb-10 text-left w-full max-w-4xl border-l-2 border-red-500 pl-8">
        <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-2 uppercase">
          {t('visualizer.l2.title', 'L2: THE ELDERS')}
        </h2>
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.4em] font-bold">Governance Matrix</p>
      </header>

      <div className="w-full max-w-4xl border-2 border-dashed border-white/5 rounded-[2.5rem] p-8 md:p-12 bg-black/40">
        <SystemBox 
          title={nodes[0].name} 
          description={nodes[0].type} 
          color="red" 
          glyph="assistant_device" 
          onClick={() => onNodeClick(nodes[0] as NodeData)} 
          className="w-full max-w-lg mx-auto mb-10" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SystemBox title={nodes[1].name} description={nodes[1].type} color="purple" glyph="science" onClick={() => onNodeClick(nodes[1] as NodeData)} className="w-full" />
          <SystemBox title={nodes[2].name} description={nodes[2].type} color="purple" glyph="build" onClick={() => onNodeClick(nodes[2] as NodeData)} className="w-full" />
        </div>
      </div>

      <ConnectionLine label="Collective Feedback" vertical={true} dashed={true} />
    </div>
  );
};

export default L2TheElders;
