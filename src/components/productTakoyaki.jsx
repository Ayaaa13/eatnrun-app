import React from "react";
import Takoyaki from "../data/takoyaki";

const TakoyakiP = (props) => {
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

const CreateTakoyaki = (ProductTakoyaki) => {
  return (
    <TakoyakiP
      key={ProductTakoyaki.id}
      img={ProductTakoyaki.img}
      title={ProductTakoyaki.title}
      flavor={ProductTakoyaki.flavor}
      price={ProductTakoyaki.price}
    />
  );
};

const NewTakoyakiItems = () => {
  return <div className="ProductItems">{Takoyaki.map(CreateTakoyaki)}</div>;
};

export default NewTakoyakiItems;
