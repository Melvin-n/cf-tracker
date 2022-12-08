import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./weightTracker.css";
import { TextField, InputAdornment } from "@mui/material";

type TweightInput = {
  Weight: string;
  Date: string;
};

export const WeightTracker = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Weight: "",
      Date: moment().format("DD-MM-YYYY"),
    },
  });
  console.log(errors);
  const now = Date.now();
  const [startDate, setStartDate] = useState<Date | null>(new Date(now));
  return (
    <div className="weight-tracker__input-form-container">
      <form
        className="weight-tracker__input-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("Weight", {})} />
        {/* react hook form uses uncontrolled inputs (not dependant on state), to */}
        {/* use controlled inputs e.g like DatePicker, need to use Controller */}
        <Controller
          name="Date"
          control={control}
          render={() => (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          )}
        />
        {/* <input {...register("Date", { required: "Date is required" })} /> */}
        <input type="submit" />
      </form>
    </div>
  );
};
