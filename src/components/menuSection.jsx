import React from "react";
import ChickenMenu from "./chickenMenu";
import TakoyakiMenu from "./takoyakiMenu";
import DrinksMenu from "./drinksMenu";

const MenuSection = () => {
  return (
    <div className="menuSection">
      <div className="title">
        <h1>Our Menu</h1>
        <h2>Menu That Always Make You Fall Inlove </h2>
      </div>

      <div className="menuProducts">
        <ChickenMenu />
        <TakoyakiMenu />
        <DrinksMenu />
      </div>
    </div>
  );
};

export default MenuSection;
