import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/lib/auth/context";
import app from "@/lib/firebase";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

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
    });
  }, []);

  const logInGoogle = () => signInWithPopup(auth, googleAuthProvider);

  const logOut = () => signOut(auth);

  return {
    logInGoogle,
    logOut,
    user,
  };
};
