import React from "react";
import { RouteObject } from "react-router-dom";
import SignIn from "@/pages/SignIn";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <SignIn />,
  },
];

export default routes;
