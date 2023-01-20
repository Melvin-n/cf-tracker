import React, { useEffect, useState } from "react";
import "./weightTracker.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import DatePicker from "./DatePicker";

type TweightInput = {
  Weight: string;
  Date: string;
};

const WeightTracker = (): JSX.Element => {
  const [weight, setWeight] = useState<number | null>(null);

  useEffect(() => {
    console.log(weight);
  }, [weight]);
  return (
    <div className="weight-tracker__input-form-container">
      <form className="weight-tracker__input-form">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Weight"
            aria-label="Weight input"
            type="number"
            value={weight === null ? "" : weight}
            required
            onChange={(e) => {
              !isNaN(Number(e.target.value))
                ? setWeight(
                    e.target.value === "" ? null : Number(e.target.value)
                  )
                : "";
            }}
          />
          <InputGroup.Text id="basic-addon2">kg</InputGroup.Text>
        </InputGroup>
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
