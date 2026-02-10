import { useState } from 'react';
import Hero from './hero';
import Foundations from './foundations';
import Methods from './methods';
import { MothershipSection } from './mothershipsection';
import { MothershipVisualizer } from './mothershipvisualizer';
import Labs from './labs';
import Overwatch from './overwatch';
import AskOllie from './askollie';
import AskOllieLauncher from './askollielauncher';

/**
 * TS-Λ3 // HOME ORCHESTRATOR [v4.5.0]
 * Path: src/components/Home.tsx
 */
const Home = () => {
  const [showOllie, setShowOllie] = useState(false);

  return (
    <div className="flex flex-col relative bg-black">
      <main className="flex-1 flex flex-col">
        <Hero />
        <Foundations />
        <Methods />
        <MothershipSection />
        <MothershipVisualizer />
        <Labs />
        <Overwatch />

        {showOllie && <AskOllie />}
      </main>

      <AskOllieLauncher onClick={() => setShowOllie(!showOllie)} />
    </div>
  );
};

export default Home;
