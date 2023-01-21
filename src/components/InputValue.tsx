import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export type TInputField = {
  className?: string;
  InputGroupClass?: string;
  InputGroupText?: string;
  placeholder?: string;
  ariaLabel?: string;
  type: string;
  required: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setstate: React.Dispatch<React.SetStateAction<number | null>>
  ) => void;
};

interface InputValueProps {
  inputfields: TInputField;
  setState: React.Dispatch<React.SetStateAction<number | null>>;
  state: number | null;
}

const InputValue = ({ inputfields, setState, state }: InputValueProps) => {
  return (
    <div className={inputfields.className}>
      <InputGroup className={inputfields.InputGroupClass}>
        <Form.Control
          placeholder={inputfields.placeholder}
          aria-label={inputfields.ariaLabel}
          type={inputfields.type}
          value={state === null ? "" : state}
          required
          onChange={(e) => {
            !isNaN(Number(e.target.value))
              ? setState(e.target.value === "" ? null : Number(e.target.value))
              : "";
          }}
        />
        <InputGroup.Text id="basic-addon2">
          {inputfields.InputGroupText}
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default InputValue;
