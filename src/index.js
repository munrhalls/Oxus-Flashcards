import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseAuthProvider } from "./Contexts/FirebaseAuthProvider";
import App from "./App";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </React.StrictMode>
);
