import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import AppRoutes from "@/AppRoutes";
import "@/styles/global.css";
import theme from "@/themes";

const router = createBrowserRouter(createRoutesFromElements(AppRoutes));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
