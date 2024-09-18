import React from "react";
import TrafficLight from "./components/TrafficLight";
import { TrafficLightProvider } from "./context/TrafficLightContext";
import './App.css';

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="app">
        <h1 className="text-3xl font-semibold">Traffic Light Simulator</h1>
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
