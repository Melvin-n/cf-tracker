import { useState } from "react";
import WeightTracker from "./components/WeightTracker";
import LFTracker from "./components/LFTracker";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <h2>CF Tracker</h2>
      <WeightTracker />
      <LFTracker />
    </div>
  );
}

export default App;
