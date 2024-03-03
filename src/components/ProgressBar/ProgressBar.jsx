import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import { FaInfinity } from "react-icons/fa6";

const ProgressBar = ({ currentValue, goalValue, rank }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    let widthPercentage = 0;
    if (currentValue <= 0) {
      widthPercentage = 1;
    } else if (goalValue === 0) {
      widthPercentage = 100;
    } else {
      widthPercentage = Math.round((currentValue / goalValue) * 100);
    }
    setBarWidth(widthPercentage);
  }, []);

  return (
    <div className="progress-bar-wrapper">
      <span>{currentValue}</span>
      <div className="progress-bar-outer">
        <div
          className={`progress-bar-inner progress-${rank}`}
          style={{
            width: `${barWidth}%`,
          }}
        ></div>
      </div>
      <span>{goalValue !== 0 ? goalValue : <FaInfinity />}</span>
    </div>
  );
};

export default ProgressBar;
