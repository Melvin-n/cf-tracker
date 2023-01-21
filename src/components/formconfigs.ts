import { TInputField } from "./InputValue";

const onChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<number | null>>
) => {
  !isNaN(Number(e.target.value))
    ? setState(e.target.value === "" ? null : Number(e.target.value))
    : "";
};

export const WeightTrackerConfig: TInputField = {
  className: "weight-tracker__input-form",
  InputGroupText: "kg",
  placeholder: "Weight",
  ariaLabel: "Weight input",
  type: "number",
  required: true,
  onChange: onChangeHandler,
};

export const Fev1TrackerConfig: TInputField = {
  className: "fev1-tracker__input-form",
  InputGroupText: "%",
  placeholder: "FEV1",
  ariaLabel: "fev-input",
  type: "number",
  required: false,
  onChange: onChangeHandler,
};

export const FvcTrackerConfig: TInputField = {
  className: "fvc-tracker__input-form",
  InputGroupText: "%",
  placeholder: "FVC",
  ariaLabel: "fvc-input",
  type: "number",
  required: false,
  onChange: onChangeHandler,
};
