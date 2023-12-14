import React from "react";
import Drinks from "../data/drinks";

const DrinkFlavor = (props) => {
  return (
    <div className="product">
      <h2 className="productFlavor">{props.flavor}</h2>
      <p className="productCost">₱{props.price}</p>
    </div>
  );
};

const CreateNewDrinks = (Drinks) => {
  return <DrinkFlavor flavor={Drinks.flavor} price={Drinks.price} />;
};

const NewDrinksMenu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <img src="/productIcons/drinksIcon.png" alt="" />
        <h1>Drinks</h1>
      </div>
      <hr />
      <div className="products">{Drinks.map(CreateNewDrinks)}</div>
    </div>
  );
};

export default NewDrinksMenu;
