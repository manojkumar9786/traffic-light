import React, { useContext } from "react";
import { TrafficLightContext } from "../context/TrafficLightContext";
import GreenLight from "./GreenLight";
import YellowLight from "./YellowLight";
import RedLight from "./RedLight";
import PedestrianButton from "./PedestrianButton";
import EmergencyOverrideButton from "./EmergencyOverrideButton";

const TrafficLight = () => {
  const { currentLight, countdown, pedestrianRequested, requestPedestrianCrossing, triggerEmergencyOverride } =
    useContext(TrafficLightContext);

  return (
    <div className="traffic-light-container flex flex-col items-center space-y-4">
      <RedLight isActive={currentLight === "red"} countdown={countdown} />
      <YellowLight isActive={currentLight === "yellow"} countdown={countdown} />
      <GreenLight isActive={currentLight === "green"} countdown={countdown} />

      <PedestrianButton
        requestPedestrianCrossing={requestPedestrianCrossing}
        pedestrianRequested={pedestrianRequested}
      />
      <EmergencyOverrideButton triggerEmergencyOverride={triggerEmergencyOverride} />
    </div>
  );
};

export default TrafficLight;
