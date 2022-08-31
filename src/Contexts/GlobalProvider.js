import React, { useContext } from "react";
import FirebaseAPI from "./FirebaseAPI";
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
      value={{ ...FirebaseAPI(), ...FirestoreAPI(), ...ModalsAPI() }}
    >
      {children}
    </Global.Provider>
  );
}
