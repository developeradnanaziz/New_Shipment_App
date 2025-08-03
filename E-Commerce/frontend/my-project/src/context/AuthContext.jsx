import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  // Google Sign-In
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // Logout
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, authLoading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}