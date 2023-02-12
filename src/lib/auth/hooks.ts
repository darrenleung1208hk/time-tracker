import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/lib/auth/context";
import app from "@/lib/firebase";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logInGoogle = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        setUser({
          uid: res.user.uid,
          name: res.user.displayName,
          avatar: res.user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  const logOut = () =>
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });

  return {
    logInGoogle,
    logOut,
    user,
  };
};
