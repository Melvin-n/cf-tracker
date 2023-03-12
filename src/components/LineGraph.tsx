import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { SvgIconClassKey } from "@mui/material";
import { TDateAndWeight } from "./GraphView";
import WeightTracker from "./WeightTracker";
import { max } from "moment";

type TMargins = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

const dummydata: TDateAndWeight[] = [
  { weight: 60, date: new Date("2022-01-16") },
  { weight: 62, date: new Date("2022-02-16") },
  { weight: 65, date: new Date("2022-03-16") },
  { weight: 61, date: new Date("2022-05-16") },
  { weight: 62, date: new Date("2022-06-16") },
];

const LineGraph = (): JSX.Element => {
  const lineGraphMargin: TMargins = {
    top: 500,
    right: 30,
    bottom: 30,
    left: 30,
  };
  const width = 960;
  const height = 500;
  const svgRef = useRef(null);
  const [dateList, setDateList] = useState<Date[]>(
    dummydata.map((d) => d.date)
  );
  // const [weightList, setWeightList] = useState<number[]>(
  //   dummydata.map((d) => d.weight)
  // );
  // const [data] = useState<{ x: Date; y: number }[]>(
  //   dummydata.map((data) => {
  //     return { x: data.date, y: data.weight };
  //   })
  // );

  useEffect(() => {
    console.log(svgRef);

    const svg = d3
      .select(svgRef.current)
      .style("width", width)
      .style("height", height)
      .style("color", "blue")
      .style("background", "white")
      .style("overflow", "visible");

    // scaling
    // x scale which scales by time, using values of dateList as start and end, across the range of width
    const xScale = d3
      .scaleTime()
      .domain([dateList[0], dateList[dateList.length - 1]])
      .range([0, width]);
    // y scale uses weight values as start and end, range of height
    const maxWeight = d3.max(dummydata, (d) => d.weight) || 0;
    const minWeight = d3.min(dummydata, (d) => d.weight) || 0;
    const yScale = d3
      .scaleLinear()
      .domain([minWeight, maxWeight])
      .range([height, 0]);
    const generateScaledLine = d3
      .line<TDateAndWeight>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.weight));

    //set up axes
    const xAxis = d3.axisBottom(xScale).ticks(dummydata.length);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    const yAxis = d3.axisLeft(yScale).ticks(dummydata.length);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".line")
      .data([dummydata])
      .join("path")
      .attr("d", generateScaledLine)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, []);

  return (
    <div>
      {/* ref is a special attribute from useRef hook */}
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineGraph;
