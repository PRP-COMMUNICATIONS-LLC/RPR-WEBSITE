"use client";

import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import Header from "./components/Header"; 
import Home from "./components/Home"; // FIX: Default Import to resolve TS2614
import { Labs } from "./components/Labs";
import Footer from "./components/Footer";

/**
 * TS-Λ3 // SPA ORCHESTRATOR [v3.1.7]
 * Path: src/App.tsx
 * Mission: Resolve Import Handshake Mismatch
 * Status: HARDENED // EXIT 0
 */

export default function App() {
  useEffect(() => {
    // IDENTITY LATCH: Ensure Material Symbols are available for the UI
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=smart_toy,g_mobiledata,compass_calibration,input_circle,conversion_path,business,skull,assistant_device,science,build,security,account_tree,hub";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <WorkflowProvider>
      <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-cyan-500/30 antialiased overflow-x-hidden relative">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={
            <main className="pt-20 bg-black">
              <Labs />
            </main>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </WorkflowProvider>
  );
}
