import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, createContext, useContext, useState } from "react";
import { app } from "../firebaseClient";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
const auth = getAuth();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function logIn({ email, password }) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
