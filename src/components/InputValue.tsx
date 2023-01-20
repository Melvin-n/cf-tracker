import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export type TInputField = {
  className?: string;
  InputGroupClass?: string;
  InputGroupText?: string;
  placeholder?: string;
  ariaLabel?: string;
  type: string;
  value: any;
  required: boolean;
  onChange: (e: React.ChangeEvent) => void;
};

const InputValue = (inputfields: TInputField) => {
  const [weight, setWeight] = useState<number | null>();
  return (
    <form className="weight-tracker__input-form">
      {inputfields.InputGroupClass && (
        <InputGroup className="inputfields.InputGroupClass" />
      )}
      <Form.Control
        placeholder={inputfields.placeholder}
        aria-label="Weight input"
        type="number"
        value={weight === null ? "" : weight}
        required
        onChange={(e) => {
          !isNaN(Number(e.target.value))
            ? setWeight(e.target.value === "" ? null : Number(e.target.value))
            : "";
        }}
      />
      <InputGroup.Text id="basic-addon2">kg</InputGroup.Text>
    </form>
  );
};

export default InputValue;
