import React, { createContext, useReducer, useEffect } from "react";

// Create a context
export const TrafficLightContext = createContext();

const initialState = {
  currentLight: "green",
  pedestrianRequested: false,
  countdown: 10,
  emergencyOverride: false,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LIGHT":
      return {
        ...state,
        currentLight: action.payload,
        countdown: action.countdown,
      };
    case "REQUEST_CROSSING":
      return { ...state, pedestrianRequested: true };
    case "RESET_CROSSING":
      return { ...state, pedestrianRequested: false };
    case "EMERGENCY_OVERRIDE":
      return {
        ...state,
        emergencyOverride: true,
        currentLight: "red",
        countdown: 5,
      };
    case "RESET_EMERGENCY":
      return { ...state, emergencyOverride: false };
    case "UPDATE_COUNTDOWN":
      return { ...state, countdown: action.payload };
    default:
      return state;
  }
};

// Context provider
export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  const requestPedestrianCrossing = () => {
    if (!state.pedestrianRequested) {
      dispatch({ type: "REQUEST_CROSSING" });
    }
  };

  const triggerEmergencyOverride = () => {
    dispatch({ type: "EMERGENCY_OVERRIDE" });
    setTimeout(() => {
      dispatch({ type: "RESET_EMERGENCY" });
    }, 5000);
  };

  useEffect(() => {
    let interval;
    const updateTrafficLight = () => {
      const { currentLight, pedestrianRequested, emergencyOverride } = state;

      if (emergencyOverride) return;

      if (pedestrianRequested && currentLight === "green") {
        dispatch({ type: "CHANGE_LIGHT", payload: "yellow", countdown: 3 });
      } else if (pedestrianRequested && currentLight === "yellow") {
        dispatch({ type: "CHANGE_LIGHT", payload: "red", countdown: 7 });
        dispatch({ type: "RESET_CROSSING" });
      } else {
        switch (currentLight) {
          case "green":
            dispatch({ type: "CHANGE_LIGHT", payload: "yellow", countdown: 3 });
            break;
          case "yellow":
            dispatch({ type: "CHANGE_LIGHT", payload: "red", countdown: 7 });
            break;
          case "red":
            dispatch({ type: "CHANGE_LIGHT", payload: "green", countdown: 10 });
            break;
          default:
            break;
        }
      }
    };

    // Countdown logic
    interval = setInterval(() => {
      if (state.countdown > 0) {
        dispatch({ type: "UPDATE_COUNTDOWN", payload: state.countdown - 1 });
      } else {
        updateTrafficLight();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <TrafficLightContext.Provider
      value={{
        currentLight: state.currentLight,
        countdown: state.countdown,
        pedestrianRequested: state.pedestrianRequested,
        requestPedestrianCrossing,
        triggerEmergencyOverride,
      }}
    >
      {children}
    </TrafficLightContext.Provider>
  );
};
