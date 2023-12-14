import React from "react";
import Chickens from "../data/chicken";

const FriedChicken = (props) => {
  return (
    <div className="product">
      <h2 className="productFlavor">{props.flavor}</h2>
      <p className="productCost">₱{props.price}</p>
    </div>
  );
};

const CreateNewChicken = (Chicken) => {
  return <FriedChicken flavor={Chicken.flavor} price={Chicken.price} />;
};

const NewChickenMenu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <img src="/productIcons/friedchickenIcon.png" alt="" />
        <h1>Chicken</h1>
      </div>
      <hr />
      <div className="products">{Chickens.map(CreateNewChicken)}</div>
    </div>
  );
};

export default NewChickenMenu;
