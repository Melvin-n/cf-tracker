import { useState } from "react";
import { Form } from "react-bootstrap";
import moment from "moment";

const DatePicker = () => {
  const now = moment().format("YYYY-MM-DD");

  const [date, setDate] = useState<string>(now);
  return (
    <Form.Control
      className="form__date-picker"
      type="date"
      aria-label="Date input"
      value={date}
      required
      onChange={(e) => {
        e.preventDefault();
        setDate(e.target.value);
      }}
    />
  );
};

export default DatePicker;
