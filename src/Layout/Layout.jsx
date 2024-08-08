import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        {/* Adjust margin if needed */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
