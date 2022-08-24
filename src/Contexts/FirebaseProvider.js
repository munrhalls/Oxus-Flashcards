import React, { useContext } from "react";

const Firebase = React.createContext();

export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  function firebaseWhatevs() {
    return "firebase whatevs method";
  }
  const value = {
    firebaseWhatevs,
  };
  return <Firebase.Provider value={value}>{children}</Firebase.Provider>;
}
