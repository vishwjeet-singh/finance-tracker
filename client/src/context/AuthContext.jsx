import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //STATES
  const [user, setUser] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [expense, setExpense] = useState(0);
  //FUNCTIONS
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };

  const handleTrigger = () => {
    setTrigger(!trigger);
  };
  const handleExpense = (expense) => {
    setExpense(expense);
  };
  //EFFECTS
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //RENDER
  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        trigger,
        handleTrigger,
        expense,
        handleExpense,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => useContext(AuthContext);
