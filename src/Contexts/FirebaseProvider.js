import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React, { useContext, useState } from "react";

const Firebase = React.createContext();

export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function register(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password);
  }
  const value = {
    currentUser,
    register,
  };
  return <Firebase.Provider value={value}>{children}</Firebase.Provider>;
}
