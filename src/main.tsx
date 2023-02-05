import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "@/themes";
import { ThemeProvider } from "@mui/material";
import "@/styles/global.css";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
