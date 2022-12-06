import { useState } from "react";
import { WeightTracker } from "./components/WeightTracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>CF Tracker</h2>
      <WeightTracker />
    </div>
  );
}

export default App;
