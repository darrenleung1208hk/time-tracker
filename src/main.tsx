import routes from "@/routes";
import theme from "@/themes";
import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "@/styles/global.css";
import { AuthProvider } from "@/lib/auth";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
