import React from "react";

function TimeCard(props) {
  return (
    <div className="time-card">
      <p className="time-value">{props.timeValue}</p>
      <p className="time-prefix">{props.timePrefix}</p>
    </div>
  );
}

export default TimeCard;
