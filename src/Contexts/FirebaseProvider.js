import React, { useContext } from "react";

const Firebase = React.createContext();

export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  function firebaseWhatevs() {
    return "firebase whatevs method";
  }
  function register() {
    return "register";
  }
  const value = {
    firebaseWhatevs,
    register,
  };
  return <Firebase.Provider value={value}>{children}</Firebase.Provider>;
}
