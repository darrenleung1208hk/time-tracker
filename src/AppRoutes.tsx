import React from "react";
import { Outlet, Route, RouteProps } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { Home, Login } from "@/pages";

const routes: RouteProps[] = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
];

const AppRoutes = (
  <Route
    element={
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    }
  >
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Route>
);

export default AppRoutes;
