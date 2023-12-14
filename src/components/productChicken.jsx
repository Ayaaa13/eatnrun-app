import React from "react";
import ChickenProducts from "../data/chicken";

const Chickens = (props) => {
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

const CreateChickens = (ProductChicken) => {
  return (
    <Chickens
      key={ProductChicken.id}
      img={ProductChicken.img}
      title={ProductChicken.title}
      flavor={ProductChicken.flavor}
      price={ProductChicken.price}
    />
  );
};

const NewChickenItems = () => {
  return (
    <div className="ProductItems">{ChickenProducts.map(CreateChickens)}</div>
  );
};

export default NewChickenItems;
