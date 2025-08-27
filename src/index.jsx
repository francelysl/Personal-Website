import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css"; // use npm FA

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
