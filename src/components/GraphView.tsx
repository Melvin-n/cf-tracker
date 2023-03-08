import React from "react";
import * as d3 from "d3";

export type TDateAndWeight = {
  weight: number;
  date: Date;
};

const dummydata: TDateAndWeight[] = [
  { weight: 60, date: new Date("2022-01-16") },
  { weight: 62, date: new Date("2022-02-16") },
  { weight: 65, date: new Date("2022-03-16") },
  { weight: 61, date: new Date("2022-05-16") },
  { weight: 62, date: new Date("2022-06-16") },
];

export const GraphView = (): JSX.Element => {
  return <div>hello</div>;
};
