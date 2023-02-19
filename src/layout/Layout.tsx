import React from "react";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import BottomNavigationBar from "./_components/BottomNavigationBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <FloatingActionButton />
      <BottomNavigationBar />
    </div>
  );
};

export default Layout;
