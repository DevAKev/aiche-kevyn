import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// Désactiver le clic droit
// document.addEventListener("contextmenu", (event) => event.preventDefault());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
