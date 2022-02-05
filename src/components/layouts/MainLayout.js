import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/profile" ? <></> : <Header />}
      <Outlet />
    </>
  );
}

export default MainLayout;
