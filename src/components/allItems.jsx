import React from "react";
import NewChickenItems from "./productChicken";
import NewTakoyakiItems from "./productTakoyaki";
import NewDrinksItems from "./productDrinks";

const AllItems = () => {
  return (
    <div className="ProductItems">
      <NewChickenItems />
      <NewTakoyakiItems />
      <NewDrinksItems />
    </div>
  );
};

export default AllItems;
