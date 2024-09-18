import React from "react";

const YellowLight = ({ isActive, countdown }) => {
  return (
    <div className={`light yellow ${isActive ? "active" : ""}`}>
      {isActive && <p>{countdown}</p>}
    </div>
  );
};

export default YellowLight;
