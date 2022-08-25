import React, { useContext } from "react";
import FirebaseFunctions from "./FirebaseFunctions";

const Global = React.createContext();
export function useGlobal() {
  return useContext(Global);
}

export function GlobalProvider({ children }) {
  function whatever() {
    return console.log("whatever");
  }
  const value = { ...FirebaseFunctions(), whatever };
  console.log(value);

  return <Global.Provider value={value}>{children}</Global.Provider>;
}
