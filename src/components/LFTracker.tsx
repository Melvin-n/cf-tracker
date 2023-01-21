import React, { useState } from "react";
import moment from "moment";
import "./lfTracker.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import InputValue, { TInputField } from "./InputValue";
import { FvcTrackerConfig, Fev1TrackerConfig } from "./formconfigs";

const LFTracker = () => {
  const [fvc, setFvc] = useState<number | null>(null);
  const [fev1, setFev1] = useState<number | null>(null);
  return (
    <div className="lf-tracker__input-form-container">
      <form className="lf-tracker__input-form">
        <InputValue
          inputfields={FvcTrackerConfig}
          state={fvc}
          setState={setFvc}
        />
        <InputValue
          inputfields={Fev1TrackerConfig}
          state={fev1}
          setState={setFev1}
        />
      </form>
    </div>
  );
};

export default LFTracker;
