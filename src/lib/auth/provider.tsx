import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/constants";
import app from "@/lib/firebase";
import { AuthContextType, AuthProviderProps, User } from "./types";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType,
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  useEffect(() => {
    if (pathname === ROUTES.LOGIN && !!user) {
      navigate(ROUTES.HOME);
    }
  }, [pathname, user]);

  const logInGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleAuthProvider);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => signOut(auth);

  const value = { user, setUser, isLoading, logInGoogle, logOut };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
