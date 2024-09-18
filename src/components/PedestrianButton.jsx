import React from "react";

const PedestrianButton = ({ requestPedestrianCrossing, pedestrianRequested }) => {
  return (
    <button
      onClick={requestPedestrianCrossing}
      className={`pedestrian-btn bg-blue-500 text-white px-4 py-2 rounded mt-4 ${
        pedestrianRequested ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={pedestrianRequested}
    >
      {pedestrianRequested ? "Pedestrian Crossing Active" : "Pedestrian Crossing"}
    </button>
  );
};

export default PedestrianButton;
