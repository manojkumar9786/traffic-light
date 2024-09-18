import React from "react";

const GreenLight = ({ isActive, countdown }) => {
  return (
    <div className={`light green ${isActive ? "active" : ""}`}>
      {isActive && <p>{countdown}</p>}
    </div>
  );
};

export default GreenLight;
