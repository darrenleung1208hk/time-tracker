import React from "react";
import { RouteObject } from "react-router-dom";
import { Home, Login } from "@/pages";

export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
};

const routes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
];

export default routes;
