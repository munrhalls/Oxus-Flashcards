import React, { useContext } from "react";
import FirebaseFunctions from "./FirebaseFunctions";
import ModalFunctions from "./ModalFunctions";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}
export function GlobalProvider({ children }) {
  const value = { ...FirebaseFunctions(), ModalFunctions };
  console.log(value);

  return <Global.Provider value={value}>{children}</Global.Provider>;
}
