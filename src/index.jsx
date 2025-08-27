import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "./fonts/fonts.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
