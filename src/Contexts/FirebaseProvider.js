import firebase from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import React, { useContext, useEffect, useState } from "react";

const Firebase = React.createContext();

export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  function getCurrentUser() {
    return currentUser;
  }
  console.log(currentUser);
  function register(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    getCurrentUser,
    register,
  };
  return <Firebase.Provider value={value}>{children}</Firebase.Provider>;
}
