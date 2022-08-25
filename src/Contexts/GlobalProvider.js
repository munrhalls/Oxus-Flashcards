import React, { useContext } from "react";
import FirebaseFunctions from "./FirebaseAPI";
import ModalsAPI from "./ModalsAPI";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}

export function GlobalProvider({ children }) {
  const value = { ...FirebaseFunctions(), ...ModalsAPI() };

  return <Global.Provider value={value}>{children}</Global.Provider>;
}
