import { WorkflowProvider } from "./contexts/WorkflowContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Foundations } from "./components/Foundations";
import { Process } from "./components/Process";
import { Labs } from "./components/Labs";
import { Overwatch } from "./components/Overwatch";
import { AskOllie } from "./components/AskOllie";

export default function App() {
  return (
    <WorkflowProvider>
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden">
        <Header />
        <main className="pt-[108px] pb-[70px]">
          <Hero />
          <Foundations />
          <Process />
          <Labs />
          <Overwatch />
          <AskOllie />
        </main>
        <Footer />
      </div>
    </WorkflowProvider>
  );
}
