import React, { useContext } from "react";
import FirebaseFunctions from "./FirebaseAPI";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}

export function GlobalProvider({ children }) {
  function ModalsAPI() {
    return console.log("ModalsAPI");
  }
  const value = { ...FirebaseFunctions(), ModalsAPI };

  return <Global.Provider value={value}>{children}</Global.Provider>;
}
