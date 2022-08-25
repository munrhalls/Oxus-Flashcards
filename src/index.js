import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./Contexts/GlobalProvider";
import App from "./App";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
