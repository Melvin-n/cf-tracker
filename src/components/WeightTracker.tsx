import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./weightTracker.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

type TweightInput = {
  Weight: string;
  Date: string;
};

export const WeightTracker = (): JSX.Element => {
  const now = moment().format("YYYY-MM-DD");
  console.log(now);
  const [date, setDate] = useState<string>(now);
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
            aria-describedby="basic-addon2"
            type="number"
            value={weight === null ? "" : weight}
            autoComplete="off"
            min="1"
            onChange={(e) => {
              !isNaN(Number(e.target.value)) ? (
                setWeight(e.target.value === "" ? null : Number(e.target.value))
              ) : (
                <Form.Control.Feedback type="invalid">
                  Please input a number.
                </Form.Control.Feedback>
              );
            }}
          />
          <InputGroup.Text id="basic-addon2">kg</InputGroup.Text>
        </InputGroup>

        {/* react hook form uses uncontrolled inputs (not dependant on state), to */}
        {/* use controlled inputs e.g like DatePicker, need to use Controller */}

        <Form.Control
          className="weight-tracker__date-picker"
          type="date"
          value={date}
          onChange={(e) => {
            e.preventDefault();
            setDate(e.target.value);
          }}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
