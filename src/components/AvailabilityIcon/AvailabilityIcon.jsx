import React from "react";

import "./AvailabilityIcon.css";

const AvailabilityIcon = ({ availability }) => {
  return (
    <div
      className={`availability-icon me-3 ${availability}`}
      title={availability}
    ></div>
  );
};

export default AvailabilityIcon;
