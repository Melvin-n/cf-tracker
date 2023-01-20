export type TWeightTrackerConfig = {
    className: "weight-tracker__input-form",
    InputGroupClass: string;
    InputGroupText: string;
    placeholder: "Weight",
    ariaLabel: "Weight input",
    type: "number",
    value: any;
    required: boolean;
    onChange: (e: React.ChangeEvent) => void;
  };