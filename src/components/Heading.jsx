import React from "react";
import Navbar from "../components/navbar";
import Logo from "../components/logo";
import Introduction from "../components/introduction";

const Heading = () => {
  return (
    <header className="headerOverview">
      <div className="mainHeader">
        <Logo />
        <Navbar />
      </div>

      <Introduction />
    </header>
  );
};
export default Heading;
