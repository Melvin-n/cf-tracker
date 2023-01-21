import React, { useEffect, useState } from "react";
import "./weightTracker.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import DatePicker from "./DatePicker";
import InputValue, { TInputField } from "./InputValue";
import { WeightTrackerConfig } from "./formconfigs";

const WeightTracker = (): JSX.Element => {
  const [weight, setWeight] = useState<number | null>(null);
  return (
    <div className="weight-tracker__input-form-container">
      <form className="weight-tracker__input-form">
        <InputValue
          inputfields={WeightTrackerConfig}
          state={weight}
          setState={setWeight}
        />
        <DatePicker />

        <Button
          aria-label="Submit"
          variant="primary"
          type="submit"
          className="weight-tracker__submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WeightTracker;
