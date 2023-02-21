import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
