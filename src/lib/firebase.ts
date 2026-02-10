import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

/**
 * TS-Λ3 // FIREBASE SUBSTRATE [v3.0.0]
 * Path: /src/lib/firebase.ts
 * Mission: Unified Singleton & Defensive Latch
 * Authority: SG-CANONICAL-2026
 */

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

/**
 * CONFIG_LATCH: Resolution and safe-parsing of Vite environment substrate
 */
const getFirebaseConfig = () => {
  const configString = import.meta.env.VITE_RPR_FIREBASE_CONFIG;

  if (!configString) {
    console.warn('[SENTINEL] VITE_RPR_FIREBASE_CONFIG not found. Auth vectors disabled.');
    return null;
  }

  try {
    const config = JSON.parse(configString);
    // Explicitly verify apiKey to prevent Firebase initialization crash
    if (!config.apiKey || config.apiKey === "") {
      console.warn('[SENTINEL] Firebase API Key is empty. Substrate in Stasis.');
      return null;
    }
    return config;
  } catch (error) {
    console.error('[SENTINEL] Failed to parse clinical config JSON:', error);
    return null;
  }
};

/**
 * SINGLETON INITIALIZATION
 * Prevents multiple instances in HMR (Hot Module Replacement) cycles.
 */
export const initializeFirebase = (): { app: FirebaseApp | null; auth: Auth | null; db: Firestore | null } => {
  if (app && auth && db) return { app, auth, db };

  const config = getFirebaseConfig();
  if (!config) return { app: null, auth: null, db: null };

  try {
    app = !getApps().length ? initializeApp(config) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    
    console.log('[SENTINEL] Firebase Substrate Initialized at /src/lib/.');
    return { app, auth, db };
  } catch (error) {
    console.error('[SENTINEL] Firebase initialization failed:', error);
    return { app: null, auth: null, db: null };
  }
};

// --- AUTHORITATIVE GETTERS (Legacy Support) ---

export const getFirebaseAuth = (): Auth | null => {
  if (!auth) {
    const { auth: initializedAuth } = initializeFirebase();
    return initializedAuth;
  }
  return auth;
};

export const getFirebaseDb = (): Firestore | null => {
  if (!db) {
    const { db: initializedDb } = initializeFirebase();
    return initializedDb;
  }
  return db;
};

// --- AUTH PROVIDER CONFIGURATION ---

export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account' // Enforced for multi-agent clinical workstations
});

// --- DIRECT INSTANCE EXPORTS (Direct Context Consumption) ---

// Trigger one-time initialization for direct exports
const { auth: activeAuth, db: activeDb } = initializeFirebase();

export { activeAuth as auth, activeDb as db };
export default app;