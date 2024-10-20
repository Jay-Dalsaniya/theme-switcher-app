import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppThemeProvider } from "./AppThemeContext"; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
