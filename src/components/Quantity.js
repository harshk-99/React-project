import React from "react";

function Quantity(props) {
  const barValue = (props.sold / props.available) * 100;

  const barStyle = {
    width: barValue + "%"
  };

  return (
    <div className="quantity">
      <p className="quantity-text">
        Sold: <span className="quantity-figure">{props.sold}</span>{" "}
        <span className="available">
          {" "}
          Available: <span className="quantity-figure">{props.available}</span>
        </span>
      </p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={barStyle}
          aria-valuenow={barValue}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Quantity;
