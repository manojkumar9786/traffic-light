import React from "react";

const RedLight = ({ isActive, countdown }) => {
  return (
    <div className={`light red ${isActive ? "active" : ""}`}>
      {isActive && <p>{countdown}</p>}
    </div>
  );
};

export default RedLight;
