import React, { useState } from "react";
import TimeCard from "./TimeCard";

function Time(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let countDownDate = new Date(props.expire).getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div className="item-time-left">
      <div className="row">
        <div className="col-3">
          <TimeCard timeValue={days} timePrefix="Days" />
        </div>
        <div className="col-3">
          <TimeCard timeValue={hours} timePrefix="Hours" />
        </div>
        <div className="col-3">
          <TimeCard timeValue={minutes} timePrefix="Minutes" />
        </div>
        <div className="col-3">
          <TimeCard timeValue={seconds} timePrefix="Seconds" />
        </div>
      </div>
    </div>
  );
}

export default Time;
