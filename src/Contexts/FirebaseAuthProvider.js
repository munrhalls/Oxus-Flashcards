import React, { useContext } from "react";

const FirebaseAuth = React.createContext();

export function useFirebaseAuth() {
  return useContext(FirebaseAuth);
}

export function FirebaseAuthProvider({ children }) {
  return (
    <FirebaseAuth.Provider value={"firebase"}>{children}</FirebaseAuth.Provider>
  );
}
