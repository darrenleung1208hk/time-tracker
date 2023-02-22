import React, { Suspense } from "react";
import { Outlet, Route, RouteProps } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";

const Home = React.lazy(() => import("@/pages/Home"));
const Login = React.lazy(() => import("@/pages/Login"));

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
        <Suspense>
          <Outlet />
        </Suspense>
      </AuthProvider>
    }
  >
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Route>
);

export default AppRoutes;
