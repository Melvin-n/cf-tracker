import React from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

type TweightInput = {
  Weight: string;
  Date: string;
};

export const WeightTracker = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Weight: "",
      Date: moment().format("DD-MM-YYYY"),
    },
  });
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input {...register("Weight", { required: "Weight is required" })} />
      <input {...register("Date", { required: "Date is required" })} />
      <input type="submit" />
    </form>
  );
};
