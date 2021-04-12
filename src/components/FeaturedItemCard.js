import React from "react";
import Quantity from "./Quantity";
import Time from "./Time";

function FeaturedItemCard(props) {
  return (
    <div className="item-card">
      <img
        src={props.imageLink}
        alt={props.altImage}
        height="200px"
        width="200px"
      />
      <p className="title">{props.title}</p>
      <p className="price">
        {props.newPrice} <span className="old"> {props.oldPrice} </span>
      </p>
      <Quantity sold={props.sold} available={props.available} />
      <Time expire={props.expire} />
    </div>
  );
}

export default FeaturedItemCard;
