import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import app from "@/lib/firebase";
import { AuthContextType, AuthProviderProps, User } from "./types";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType,
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName: name, photoURL: avatar } = user;
        setUser({
          uid,
          name,
          avatar,
        });
      }
      setIsLoading(false);
    });
  }, []);

  const logInGoogle = () => signInWithPopup(auth, googleAuthProvider);

  const logOut = () => signOut(auth);

  const value = { user, setUser, isLoading, logInGoogle, logOut };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
