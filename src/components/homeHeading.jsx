import React from "react";
import Logo from "./logo";

import Navbar from "./homeNavbar";

const HomeHeader = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default HomeHeader;
