import { useState } from "react";
import WeightTracker from "./components/WeightTracker";
import LFTracker from "./components/LFTracker";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h2>CF Tracker</h2>
      </div>
      <div className="input-container">
        <WeightTracker />
        <LFTracker />
      </div>
      <div className="graph-container">
        <LineGraph />
      </div>
    </div>
  );
}

export default App;
