import React, { useContext } from "react";
import FirebaseFunctions from "./FirebaseAPI";
import ModalsAPI from "./ModalsAPI";
import Loader from "../Components/Loader/Loader";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}
export function GlobalProvider({ children }) {
  return (
    <Global.Provider value={{ ...FirebaseFunctions(), ...ModalsAPI() }}>
      {children}
    </Global.Provider>
  );
}
