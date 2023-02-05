import React from "react";
import BottomNavigationBar from "./_components/BottomNavigationBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <BottomNavigationBar />
    </div>
  );
};

export default Layout;
