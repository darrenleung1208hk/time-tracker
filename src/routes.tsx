import React from "react";
import { RouteObject } from "react-router-dom";
import { Home, Login } from "@/pages";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Home />,
  },
];

export default routes;
