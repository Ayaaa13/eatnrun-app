import React, { useState } from "react";
import itemLists from "../data/itemLists";
import ProductItems from "./productItems";
import ChickenItems from "./productChicken";
import TakoyakiItems from "./productTakoyaki";
import DrinksItems from "./productDrinks";
import NewRamen from "./productRamen";

const Lists = (props) => {
  const handleClick = () => {
    props.onItemClick(props.index);
  };

  const transformStyle = props.isClicked
    ? { transform: "translateY(-10px)" }
    : {};

  return (
    <div className="Lists" style={transformStyle} onClick={handleClick}>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

const NewProductLists = () => {
  const [clickedItem, setClickedItem] = useState(0); // Default to the first item

  const [isAllItemsActive, setAllInactive] = useState(true);
  const [isChickenItemsActive, setChickenActive] = useState(false);
  const [isRamenItemsActive, setRamenActive] = useState(false);
  const [isTakoyakiItemsActive, setTakoyakiActive] = useState(false);
  const [isDrinksItemsActive, setDrinksActive] = useState(false);

  const handleItemClick = (index) => {
    setClickedItem(index);
    switch (index) {
      case 0:
        setAllInactive(true);
        setChickenActive(false);
        setRamenActive(false);
        setTakoyakiActive(false);
        setDrinksActive(false);
        break;
      case 1:
        setAllInactive(false);
        setChickenActive(true);
        setRamenActive(false);
        setTakoyakiActive(false);
        setDrinksActive(false);
        break;
      case 2:
        setAllInactive(false);
        setChickenActive(false);
        setRamenActive(true);
        setTakoyakiActive(false);
        setDrinksActive(false);
        break;
      case 3:
        setAllInactive(false);
        setChickenActive(false);
        setRamenActive(false);
        setTakoyakiActive(true);
        setDrinksActive(false);
        break;
      case 4:
        setAllInactive(false);
        setChickenActive(false);
        setRamenActive(false);
        setTakoyakiActive(false);
        setDrinksActive(true);
        break;

      default:
      // Code to execute if none of the cases match expression
    }
  };

  return (
    <div className="content">
      <div className="productLists">
        {itemLists.map((ProductList, index) => (
          <Lists
            key={ProductList.id}
            index={index}
            isClicked={clickedItem === index}
            img={ProductList.img}
            name={ProductList.name}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
      <hr />
      {isAllItemsActive && <ProductItems />}
      {isChickenItemsActive && <ChickenItems />}
      {isRamenItemsActive && <NewRamen />}
      {isTakoyakiItemsActive && <TakoyakiItems />}
      {isDrinksItemsActive && <DrinksItems />}
    </div>
  );
};

export default NewProductLists;
