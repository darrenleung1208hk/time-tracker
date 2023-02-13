import React from "react";
import PrivateRoute from "@/components/PrivateRoute";
import Layout from "@/layout/Layout";

export const Home = () => {
  return (
    <PrivateRoute>
      <Layout>hi</Layout>
    </PrivateRoute>
  );
};
