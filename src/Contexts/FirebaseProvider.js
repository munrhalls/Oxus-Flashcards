import React, { useContext } from "react";

const Firebase = React.createContext();

export function useFirebase() {
  return useContext(Firebase);
}

export function FirebaseProvider({ children }) {
  return <Firebase.Provider value={"firebase"}>{children}</Firebase.Provider>;
}
