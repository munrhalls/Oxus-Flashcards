import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./Contexts/FirebaseProvider";
import App from "./App";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
