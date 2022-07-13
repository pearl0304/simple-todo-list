import React, { useState, useEffect } from "react";
import moment from "moment";
export const Clock = () => {
  const [time, setTime] = useState(moment());
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment());
      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, []);
  return (
    <div className="clock">
      <div className="time">{time.format("HH:mm:ss")}</div>
    </div>
  );
};
