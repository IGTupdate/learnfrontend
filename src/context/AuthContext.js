import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import usePremiumStatus from "../stripe/usePremiumStatus";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const userIsPremium = usePremiumStatus(user);

  function signUp(email, password, firstName, lastName, for_premium) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      const dfsd= setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        isSubscribed: false,
        email: email,
        firstName: (firstName) ? firstName : '',
        lastName: (lastName) ? lastName : '',
      });

      if(for_premium == 1 ){
        createCheckoutSession(user.uid);
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  }

  function logOut() {
    return signOut(auth);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });
  
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user, userIsPremium }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
