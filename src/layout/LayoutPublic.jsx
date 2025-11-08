import React from "react";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router";

const LayoutPublic = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LayoutPublic;
