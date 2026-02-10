import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from '../lib/firebase';

/**
 * TS-Λ3 // IDENTITY PERSISTENCE LAYER [v2.8.8-FULL]
 * Path: src/contexts/AuthContext.tsx
 * Mission: Identity Handshake & Build Stability
 * Status: AUTHORITATIVE // LATCHED
 */

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signInWithGoogleRedirect: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🛡️ SUBSTRATE CHECK: Prevents crash if Firebase is in stasis
    if (!auth) {
      console.warn("[SENTINEL_AUTH] Firebase auth substrate not found. Auth disabled.");
      setLoading(false);
      return;
    }

    // 🧬 REDIRECT LATCH: Capture results from redirect-based sign-ins
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log('[SENTINEL_AUTH] Redirect Identity Latched:', result.user.email);
        }
      })
      .catch((error) => {
        console.error('[SENTINEL_AUTH] Redirect strike failed:', error);
      });

    // 🛰️ PERSISTENCE: Listen for session changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        console.log('[SENTINEL_AUTH] Session Active:', currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-in failed:', error);
    }
  };

  const signInWithGoogleRedirect = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      // Mandated for mobile and high-security edge browsers
      await signInWithRedirect(auth, provider);
    } catch {
      console.error('[SENTINEL_AUTH] Redirect strike initiated.');
    }
  };

  const signOut = async () => {
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
      console.log('[SENTINEL_AUTH] Identity Disconnected');
    } catch (error) {
      console.error('[SENTINEL_AUTH] Sign-out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signInWithGoogleRedirect, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
