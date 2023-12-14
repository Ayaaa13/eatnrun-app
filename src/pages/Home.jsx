import React from "react";
import HomeHeader from "../components/homeHeading";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="HomePage">
      <HomeHeader />
      <Products />
    </div>
  );
};

export default Home;
