import React from "react";
import Drinks from "../data/drinks";

const DrinksP = (props) => {
  return (
    <div className="Items">
      <div className="productImage">
        <img src={props.img} alt="" />
        <div className="favorite">
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
      <div className="details">
        <h1 className="title">{props.title}</h1>
        <div className="flavorAndReview">
          <p className="flavor">{props.flavor}</p>
          <p className="review">
            <i className="fa-solid fa-star"></i>4.8
          </p>
        </div>
        <div className="priceAndButton">
          <p className="price">₱{props.price}</p>
          <p className="addBtn">+</p>
        </div>
      </div>
    </div>
  );
};

const CreateDrinks = (ProductDrink) => {
  return (
    <DrinksP
      key={ProductDrink.id}
      img={ProductDrink.img}
      title={ProductDrink.title}
      flavor={ProductDrink.flavor}
      price={ProductDrink.price}
    />
  );
};

const NewDrinksItems = () => {
  return <div className="ProductItems">{Drinks.map(CreateDrinks)}</div>;
};

export default NewDrinksItems;
