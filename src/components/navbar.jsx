import React from "react";
import HeaderButtons from "../components/headerButtons";
import MainNavbar from "./mainNavbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <MainNavbar />
      <HeaderButtons />
    </div>
  );
};

export default Navbar;
