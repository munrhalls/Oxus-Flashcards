import React, { useContext } from "react";
import FirebaseAuthAPI from "./FirebaseAuthAPI";
import ModalsAPI from "./ModalsAPI";
import Loader from "../Components/Loader/Loader";
import FirestoreAPI from "./FirestoreAPI";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}
export function GlobalProvider({ children }) {
  return (
    <Global.Provider
      value={{ ...FirebaseAuthAPI(), ...FirestoreAPI(), ...ModalsAPI() }}
    >
      {children}
    </Global.Provider>
  );
}
