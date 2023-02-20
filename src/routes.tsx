import React from "react";
import { redirect, RouteObject } from "react-router-dom";
import { Home, Login } from "@/pages";

export const ROUTES = {
  INDEX: "/",
  LOGIN: "/login",
  HOME: "/browse",
};

const routes: RouteObject[] = [
  {
    path: ROUTES.INDEX,
    loader: async () => {
      return redirect(ROUTES.LOGIN);
    },
  },
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
