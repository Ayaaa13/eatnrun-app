import React from "react";
import Service from "../data/service";

const OurService = (props) => {
  return (
    <div className="services">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
const CreateService = (service) => {
  return (
    <OurService
      key={service.id}
      img={service.imgIcon}
      title={service.title}
      description={service.description}
    />
  );
};

const Services = () => {
  return (
    <div className="ourService">
      <div className="whatWeDo">
        <h1>What we Serve?</h1>
        <h2>Your Favourite Food Delivery Partner</h2>
      </div>
      <div className="service">{Service.map(CreateService)}</div>
    </div>
  );
};
export default Services;
