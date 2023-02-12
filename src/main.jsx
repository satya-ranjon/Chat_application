import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SettingsProvider from "./contexts/SettingsContext";
import "./index.css";
import AppThemeProvider from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SettingsProvider>
    <AppThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </SettingsProvider>
  // </React.StrictMode>
);
