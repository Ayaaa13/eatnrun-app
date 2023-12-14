import React from "react";
import Takoyakis from "../data/takoyaki";

const TakoyakiFlavor = (props) => {
  return (
    <div className="product">
      <h2 className="productFlavor">{props.flavor}</h2>
      <p className="productCost">₱{props.price}</p>
    </div>
  );
};

const CreateNewTakoyaki = (Takoyaki) => {
  return <TakoyakiFlavor flavor={Takoyaki.flavor} price={Takoyaki.price} />;
};

const NewTakoyakiMenu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <img src="/productIcons/takoyakiIcon.png" alt="" />
        <h1>Takoyaki</h1>
      </div>
      <hr />
      <div className="products">{Takoyakis.map(CreateNewTakoyaki)}</div>
    </div>
  );
};

export default NewTakoyakiMenu;
