import firebase from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

const Firebase = React.createContext();
export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser?.email, " in FirebaseProvider");

  function getCurrentUser() {
    return currentUser;
  }

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

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
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
    login,
    logout,
  };
  return <Firebase.Provider value={value}>{children}</Firebase.Provider>;
}
