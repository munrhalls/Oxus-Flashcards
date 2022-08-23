import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Routes>
        <Route path="/" element={<App />}>
          <Route path="/Deck" element={<Deck />} />
        </Route>
      </Routes> */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
