import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext';
import './styles/index.css';
import './i18n';

/**
 * TS-Λ3 // MAIN ENTRY SUBSTRATE [v3.0.1]
 * Mission: Hardened Orchestration & Visual Fidelity
 */

// 1. IDENTITY LATCH: Force dark mode on root
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark');
}

// 2. VISUAL FIDELITY: Houdini Paint Worklet for clinical squircles
if (typeof window !== 'undefined' && "paintWorklet" in CSS) {
  // @ts-expect-error experimental API
  CSS.paintWorklet.addModule("https://unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js")
    .catch(() => console.warn('[SENTINEL] Squircle fallback active'));
}

// 3. ORCHESTRATION SEATING: Verified Mount Handshake
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("[SENTINEL] FATAL: Mount point #root not found in index.html. Rendering aborted.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);